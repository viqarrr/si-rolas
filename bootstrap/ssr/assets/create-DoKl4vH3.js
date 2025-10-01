import { jsxs, jsx } from "react/jsx-runtime";
import { I as InlineNestedList } from "./inline-nested-list-D6ujEW03.js";
import { Q as QuillWrapper } from "./quill-wrapper-CcpdOfxV.js";
import { B as Button } from "./app-logo-icon-Ob1cKZaq.js";
import { C as Card, a as CardHeader, c as CardContent, b as CardTitle } from "./card-BtFn3yKH.js";
import { I as Input } from "./input-BJn0Hc2t.js";
import { L as Label } from "./label-1NhrudkK.js";
import { A as AppLayout } from "./app-layout-CJd6oBTa.js";
import { useForm, Head, router } from "@inertiajs/react";
import "lucide-react";
import "./textarea-6GA5P2nd.js";
import "./file-upload-DpXPwnY0.js";
import "react";
import "react-dropzone";
import "react-quill";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-Cps_U6QX.js";
const WorksCreate = () => {
  const { data, setData, post, processing, errors, progress } = useForm({
    major_id: 0,
    year: (/* @__PURE__ */ new Date()).getFullYear(),
    title: "",
    slug: "",
    description: "",
    images: [],
    links: [],
    links_to_delete: []
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("major_id", String(data.major_id));
    formData.append("year", String(data.year));
    formData.append("title", data.title || "");
    formData.append("slug", data.slug || "");
    formData.append("description", data.description || "");
    data.images.forEach((img, idx) => {
      if (img instanceof File) {
        formData.append("images[]", img);
      } else {
        if (img.id) {
          formData.append(`existing_images[${idx}]`, String(img.id));
        } else if (typeof img.image === "string") {
          formData.append(`existing_images[${idx}]`, img.image);
        }
      }
    });
    data.links.forEach((link, idx) => {
      if (link.id) {
        formData.append(`links[${idx}][id]`, String(link.id));
      }
      if (link.title) {
        formData.append(`links[${idx}][title]`, link.title);
      }
      formData.append(`links[${idx}][url]`, link.url || "");
    });
    data.links_to_delete.forEach((id) => {
      formData.append("links_to_delete[]", String(id));
    });
    router.post(route("works.store"), formData, {
      forceFormData: true,
      preserveScroll: true
    });
  };
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Create Work" }),
    /* @__PURE__ */ jsx("div", { className: "flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4", children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Create Work" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Add a new portfolio project or work item" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Basic Information" }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: "Title" }),
              /* @__PURE__ */ jsx(Input, { id: "title", value: data.title, onChange: (e) => setData("title", e.target.value) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Description" }),
              /* @__PURE__ */ jsx(
                QuillWrapper,
                {
                  value: data.description,
                  onChange: (value) => setData("description", value),
                  placeholder: "Write detailed description about this work..."
                }
              ),
              errors.description && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: errors.description })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(
            InlineNestedList,
            {
              items: data.images,
              onItemsChange: (items) => setData("images", items),
              title: "Images",
              itemLabel: "Work Image",
              showImage: true
            }
          ),
          errors.images && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: errors.images })
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
          InlineNestedList,
          {
            items: data.links,
            onItemsChange: (items) => setData("links", items),
            title: "Links",
            itemLabel: "Publication Link",
            showUrl: true
          }
        ) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: processing && progress && /* @__PURE__ */ jsxs("span", { children: [
            "Uploading... ",
            Math.round(progress.percentage || 0),
            "%"
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", asChild: true, children: "Cancel" }),
            /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: processing ? "Creating..." : "Create Work" })
          ] })
        ] })
      ] }) })
    ] }) }) })
  ] });
};
export {
  WorksCreate as default
};
