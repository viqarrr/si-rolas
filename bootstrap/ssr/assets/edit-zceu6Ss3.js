import { jsx, jsxs } from "react/jsx-runtime";
import { I as InlineNestedList } from "./inline-nested-list-D6ujEW03.js";
import { Q as QuillWrapper } from "./quill-wrapper-CcpdOfxV.js";
import { B as Button } from "./app-logo-icon-Ob1cKZaq.js";
import { C as Card, a as CardHeader, c as CardContent, b as CardTitle } from "./card-BtFn3yKH.js";
import { I as Input } from "./input-BJn0Hc2t.js";
import { L as Label } from "./label-1NhrudkK.js";
import { A as AppLayout } from "./app-layout-CJd6oBTa.js";
import { useForm, Link, router } from "@inertiajs/react";
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
const workDataProps = {
  id: 3,
  major_id: 1,
  title: "Title",
  slug: "slug",
  description: "Covers machines, automotive, and industrial systems.",
  year: 2025,
  images: [
    {
      id: 1,
      work_id: 3,
      image: "https://via.placeholder.com/80x80.png?text=Mech"
    }
  ],
  links: [
    {
      id: 1,
      work_id: 3,
      url: "https://via.placeholder.com/80x80.png?text=Mech"
    }
  ]
};
function WorksEdit({ workData = workDataProps, errors }) {
  const { data, setData, post, processing, progress } = useForm({
    id: workData.id,
    major_id: workData.major_id,
    year: workData.year,
    title: workData.title,
    slug: workData.slug,
    description: workData.description,
    images: workData.images,
    links: workData.links,
    links_to_delete: [],
    images_to_delete: []
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
  return /* @__PURE__ */ jsx(AppLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4", children: /* @__PURE__ */ jsx("div", { className: "space-y-6 p-6", children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Edit Major" }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
        "Update details for ",
        workData.title
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
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
              errors?.description && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: errors.description })
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
          errors?.images && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: errors.images })
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
            /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("works.index"), children: "Cancel" }) }),
            /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: processing ? "Saving..." : "Save Work" })
          ] })
        ] })
      ] }),
      progress && /* @__PURE__ */ jsx("div", { className: "fixed right-4 bottom-4 rounded-lg border bg-white p-4 shadow-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Uploading..." }),
        /* @__PURE__ */ jsx("div", { className: "h-2 w-32 rounded-full bg-gray-200", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "h-2 rounded-full bg-blue-600 transition-all duration-300",
            style: { width: `${progress.percentage}%` }
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
          progress.percentage,
          "%"
        ] })
      ] }) })
    ] })
  ] }) }) }) });
}
export {
  WorksEdit as default
};
