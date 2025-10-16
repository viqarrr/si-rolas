// InlineNestedList.tsx
import React from "react";
import { Plus, Trash2, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import FileUploadInertia from "@/components/file-upload";

// Base interface biar fleksibel
interface BaseItem {
  id?: number;
  title?: string;
  _destroy?: boolean;
  [key: string]: any; // fleksibel untuk url, description, image, dll
}

interface InlineNestedListProps<T extends BaseItem> {
  items: T[];
  onItemsChange: (items: T[]) => void;
  title: string;
  itemLabel: string;
  showImage?: boolean;
  showDescription?: boolean;
  showUrl?: boolean;
}

const InlineNestedList = <T extends BaseItem>({
  items,
  onItemsChange,
  title,
  itemLabel,
  showImage = false,
  showDescription = false,
  showUrl = false,
}: InlineNestedListProps<T>) => {
  const addItem = () => {
    const newItem: T = {
      title: "",
      ...(showDescription ? { description: "" } : {}),
      ...(showUrl ? { url: "" } : {}),
      ...(showImage ? { image: null } : {}),
    } as T;
    onItemsChange([...items, newItem]);
  };

  const updateItem = (index: number, field: keyof T, value: any) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    onItemsChange(updatedItems);
  };

  const removeItem = (index: number) => {
    const item = items[index];
    if (item.id) {
      updateItem(index, "_destroy" as keyof T, true);
    } else {
      const updatedItems = items.filter((_, i) => i !== index);
      onItemsChange(updatedItems);
    }
  };

  const visibleItems = items.filter((item) => !item._destroy);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-base font-medium">{title}</Label>
        <Button type="button" variant="outline" size="sm" onClick={addItem}>
          <Plus className="h-4 w-4 mr-2" />
          Add {itemLabel}
        </Button>
      </div>

      <div className="space-y-4">
        {visibleItems.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 cursor-grab">
                  <GripVertical className="h-5 w-5 text-gray-400" />
                </div>

                <div className="flex-1 space-y-4">
                  {/* Title */}
                  <div className="space-y-2">
                    <Label>Title *</Label>
                    <Input
                      value={item.title}
                      onChange={(e) =>
                        updateItem(index, "title" as keyof T, e.target.value)
                      }
                      placeholder={`${itemLabel} title`}
                    />
                  </div>

                  {/* Description (opsional) */}
                  {showDescription && (
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        value={item.description || ""}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "description" as keyof T,
                            e.target.value
                          )
                        }
                        placeholder={`${itemLabel} description`}
                        rows={3}
                      />
                    </div>
                  )}

                  {/* URL (opsional, WorkLink) */}
                  {showUrl && (
                    <div className="space-y-2">
                      <Label>URL</Label>
                      <Input
                        type="url"
                        value={item.url || ""}
                        onChange={(e) =>
                          updateItem(index, "url" as keyof T, e.target.value)
                        }
                        placeholder={`${itemLabel} URL`}
                      />
                    </div>
                  )}

                  {/* Image (opsional) */}
                  {showImage && (
                    <div className="space-y-2">
                      <Label>Image</Label>
                      <FileUploadInertia
                        value={item.image}
                        onChange={(file) =>
                          updateItem(index, "image" as keyof T, file)
                        }
                        accept="image/*"
                        placeholder="Upload image"
                      />
                    </div>
                  )}
                </div>

                {/* Remove button */}
                <div className="flex-shrink-0">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeItem(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {visibleItems.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No {title.toLowerCase()} added yet. Click "Add {itemLabel}" to get
            started.
          </div>
        )}
      </div>
    </div>
  );
};

export default InlineNestedList;
