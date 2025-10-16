import { useForm } from "@inertiajs/react";
import { Save } from "lucide-react";
import AppLayout from "@/layouts/app-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FileUploadInertia from "@/components/file-upload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { BreadcrumbItem } from "@/types";
import { Textarea } from "@/components/ui/textarea";

interface HistoryCreateProps {
  errors?: Record<string, string>;
}

const breadcrumbs: BreadcrumbItem[] = [
  { title: "Dashboard", href: "/" },
  { title: "Struktur Organisasi", href: "/struktur-organisasi" },
  { title: "Tambah Data", href: "/sejarah/create" },
];

export default function HistoryCreate({
  errors = {},
}: HistoryCreateProps) {
  const { data, setData, post, processing, progress } = useForm({
    year: "",
    photo: null as File | null,
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("history.store")); // route sesuai Laravel
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
        <div className="space-y-6">

          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-tight">Create History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Photo */}
                  <div className="space-y-2">
                    <Label htmlFor="photo_url">Photo</Label>
                    <FileUploadInertia
                        value={data.photo}
                        onChange={(file) => setData("photo", file as File)}
                        placeholder="Upload history photo"
                    />
                    {errors.photo && (
                      <p className="text-sm text-red-500">{errors.photo}</p>
                    )}
                  </div>

                  {/* Year */}
                  <div className="space-y-2">
                    <Label htmlFor="year">Year *</Label>
                    <Input
                      id="year"
                      type="number"
                      value={data.year}
                      onChange={(e) => setData("year", e.target.value)}
                      placeholder="1972"
                      className={errors.year ? "border-red-500" : ""}
                    />
                    {errors.year && (
                      <p className="text-sm text-red-500">{errors.year}</p>
                    )}
                  </div>

                  {/* Position */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      value={data.description}
                      onChange={(e) => setData("description", e.target.value)}
                      className={errors.description ? "border-red-500" : ""}
                    />
                    {errors.description && (
                      <p className="text-sm text-red-500">{errors.description}</p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => window.history.back()}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" 
                    disabled={processing}
                    >
                      <Save className="mr-2 h-4 w-4" />
                      {processing ? "Saving..." : "Save History"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </AppLayout>
  );
}
