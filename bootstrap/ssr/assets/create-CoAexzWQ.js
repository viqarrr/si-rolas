import { jsx, jsxs } from "react/jsx-runtime";
import { F as FileUploadInertia } from "./file-upload-DpXPwnY0.js";
import { I as InlineNestedList } from "./inline-nested-list-D6ujEW03.js";
import { Q as QuillWrapper } from "./quill-wrapper-CcpdOfxV.js";
import { B as Button } from "./app-logo-icon-Ob1cKZaq.js";
import { C as Card, a as CardHeader, c as CardContent, b as CardTitle } from "./card-BtFn3yKH.js";
import { I as Input } from "./input-BJn0Hc2t.js";
import { L as Label } from "./label-1NhrudkK.js";
import { T as Textarea } from "./textarea-6GA5P2nd.js";
import { A as AppLayout } from "./app-layout-CJd6oBTa.js";
import { useForm, router } from "@inertiajs/react";
import { Save } from "lucide-react";
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
function MajorsCreate({ errors }) {
  const { data, setData, post, processing, progress } = useForm({
    id: 0,
    slug: "",
    title: "",
    short_description: "",
    detail: "",
    thumbnail: "",
    logo: "",
    competencies: [],
    career_prospects: []
  });
  const generateSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
  };
  const handleTitleChange = (title) => {
    setData((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("slug", data.slug);
    formData.append("title", data.title);
    formData.append("short_description", data.short_description);
    formData.append("detail", data.detail);
    if (data.thumbnail) {
      formData.append("thumbnail", data.thumbnail);
    }
    data.competencies.forEach((competency, index) => {
      formData.append(`competencies[${index}][title]`, competency.title);
      formData.append(`competencies[${index}][description]`, competency.description);
      if (competency.image instanceof File) {
        formData.append(`competencies[${index}][image]`, competency.image);
      }
    });
    data.career_prospects.forEach((prospect, index) => {
      formData.append(`career_prospects[${index}][title]`, prospect.title);
      formData.append(`career_prospects[${index}][description]`, prospect.description);
      if (prospect.image instanceof File) {
        formData.append(`career_prospects[${index}][image]`, prospect.image);
      }
    });
    router.post(route("majors.store"), formData, {
      forceFormData: true,
      preserveScroll: true
    });
  };
  return /* @__PURE__ */ jsx(AppLayout, { children: /* @__PURE__ */ jsx("div", { className: "flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4", children: /* @__PURE__ */ jsx("div", { className: "space-y-6 p-6", children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Create Major" }) }) }) }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Basic Information" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { children: "Logo" }),
            /* @__PURE__ */ jsx(
              FileUploadInertia,
              {
                value: data.logo,
                onChange: (file) => setData("logo", file),
                placeholder: "Upload major logo"
              }
            ),
            errors?.logo && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.logo })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { children: "Thumbnail" }),
            /* @__PURE__ */ jsx(
              FileUploadInertia,
              {
                value: data.thumbnail,
                onChange: (file) => setData("thumbnail", file),
                placeholder: "Upload major thumbnail"
              }
            ),
            errors?.thumbnail && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.thumbnail })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: "Title *" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "title",
                  value: data.title,
                  onChange: (e) => handleTitleChange(e.target.value),
                  placeholder: "Major title"
                }
              ),
              errors?.title && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.title })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "slug", children: "Slug *" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "slug",
                  value: data.slug,
                  onChange: (e) => setData("slug", e.target.value),
                  placeholder: "major-slug"
                }
              ),
              errors?.slug && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.slug })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "short_description", children: "Short Description" }),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                id: "short_description",
                value: data.short_description,
                onChange: (e) => setData("short_description", e.target.value),
                placeholder: "Brief description of the major",
                rows: 3
              }
            ),
            errors?.short_description && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.short_description })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "detail", children: "Detailed Description" }),
            /* @__PURE__ */ jsx(
              QuillWrapper,
              {
                value: data.detail,
                onChange: (value) => setData("detail", value),
                placeholder: "Detailed description of the major"
              }
            ),
            errors?.detail && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.detail })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
        InlineNestedList,
        {
          items: data.competencies,
          onItemsChange: (items) => setData("competencies", items),
          title: "Competencies",
          itemLabel: "Competency",
          showImage: true
        }
      ) }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
        InlineNestedList,
        {
          items: data.career_prospects,
          onItemsChange: (items) => setData("career_prospects", items),
          title: "Career Prospects",
          itemLabel: "Career Prospect",
          showImage: true
        }
      ) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-4", children: [
        /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: () => router.visit(route("majors.index")), children: "Cancel" }),
        /* @__PURE__ */ jsxs(Button, { type: "submit", disabled: processing, children: [
          /* @__PURE__ */ jsx(Save, { className: "mr-2 h-4 w-4" }),
          processing ? "Savinging..." : "Save Major"
        ] })
      ] })
    ] }) })
  ] }) }) }) });
}
export {
  MajorsCreate as default
};
