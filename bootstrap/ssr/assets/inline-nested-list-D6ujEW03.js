import { jsxs, jsx } from "react/jsx-runtime";
import { Plus, GripVertical, Trash2 } from "lucide-react";
import { B as Button } from "./app-logo-icon-Ob1cKZaq.js";
import { I as Input } from "./input-BJn0Hc2t.js";
import { T as Textarea } from "./textarea-6GA5P2nd.js";
import { L as Label } from "./label-1NhrudkK.js";
import { C as Card, c as CardContent } from "./card-BtFn3yKH.js";
import { F as FileUploadInertia } from "./file-upload-DpXPwnY0.js";
const InlineNestedList = ({
  items,
  onItemsChange,
  title,
  itemLabel,
  showImage = false,
  showDescription = false,
  showUrl = false
}) => {
  const addItem = () => {
    const newItem = {
      title: "",
      ...showDescription ? { description: "" } : {},
      ...showUrl ? { url: "" } : {},
      ...showImage ? { image: null } : {}
    };
    onItemsChange([...items, newItem]);
  };
  const updateItem = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    onItemsChange(updatedItems);
  };
  const removeItem = (index) => {
    const item = items[index];
    if (item.id) {
      updateItem(index, "_destroy", true);
    } else {
      const updatedItems = items.filter((_, i) => i !== index);
      onItemsChange(updatedItems);
    }
  };
  const visibleItems = items.filter((item) => !item._destroy);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(Label, { className: "text-base font-medium", children: title }),
      /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", size: "sm", onClick: addItem, children: [
        /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
        "Add ",
        itemLabel
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      visibleItems.map((item, index) => /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 cursor-grab", children: /* @__PURE__ */ jsx(GripVertical, { className: "h-5 w-5 text-gray-400" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { children: "Title *" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                value: item.title,
                onChange: (e) => updateItem(index, "title", e.target.value),
                placeholder: `${itemLabel} title`
              }
            )
          ] }),
          showDescription && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { children: "Description" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                value: item.description || "",
                onChange: (e) => updateItem(
                  index,
                  "description",
                  e.target.value
                ),
                placeholder: `${itemLabel} description`,
                rows: 3
              }
            )
          ] }),
          showUrl && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { children: "URL" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "url",
                value: item.url || "",
                onChange: (e) => updateItem(index, "url", e.target.value),
                placeholder: `${itemLabel} URL`
              }
            )
          ] }),
          showImage && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { children: "Image" }),
            /* @__PURE__ */ jsx(
              FileUploadInertia,
              {
                value: item.image,
                onChange: (file) => updateItem(index, "image", file),
                accept: "image/*",
                placeholder: "Upload image"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: () => removeItem(index),
            children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
          }
        ) })
      ] }) }) }, index)),
      visibleItems.length === 0 && /* @__PURE__ */ jsxs("div", { className: "text-center py-8 text-gray-500", children: [
        "No ",
        title.toLowerCase(),
        ' added yet. Click "Add ',
        itemLabel,
        '" to get started.'
      ] })
    ] })
  ] });
};
export {
  InlineNestedList as I
};
