import { jsx, jsxs } from "react/jsx-runtime";
import { useForm } from "@inertiajs/react";
import { Save } from "lucide-react";
import { A as AppLayout } from "./app-layout-CJd6oBTa.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-BtFn3yKH.js";
import { F as FileUploadInertia } from "./file-upload-DpXPwnY0.js";
import { B as Button } from "./app-logo-icon-Ob1cKZaq.js";
import { I as Input } from "./input-BJn0Hc2t.js";
import { L as Label } from "./label-1NhrudkK.js";
import { T as Textarea } from "./textarea-6GA5P2nd.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-Cps_U6QX.js";
import "react-dropzone";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
const breadcrumbs = [
  { title: "Dashboard", href: "/" },
  { title: "Struktur Organisasi", href: "/struktur-organisasi" },
  { title: "Tambah Data", href: "/sejarah/create" }
];
function HistoryCreate({
  errors = {}
}) {
  const { data, setData, post, processing, progress } = useForm({
    year: "",
    photo: null,
    description: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("history.store"));
  };
  return /* @__PURE__ */ jsx(AppLayout, { breadcrumbs, children: /* @__PURE__ */ jsx("div", { className: "flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4", children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-bold tracking-tight", children: "Create History" }) }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "photo_url", children: "Photo" }),
        /* @__PURE__ */ jsx(
          FileUploadInertia,
          {
            value: data.photo,
            onChange: (file) => setData("photo", file),
            placeholder: "Upload history photo"
          }
        ),
        errors.photo && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.photo })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "year", children: "Year *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "year",
            type: "number",
            value: data.year,
            onChange: (e) => setData("year", e.target.value),
            placeholder: "1972",
            className: errors.year ? "border-red-500" : ""
          }
        ),
        errors.year && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.year })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Description *" }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            id: "description",
            value: data.description,
            onChange: (e) => setData("description", e.target.value),
            className: errors.description ? "border-red-500" : ""
          }
        ),
        errors.description && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-4", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            onClick: () => window.history.back(),
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            type: "submit",
            disabled: processing,
            children: [
              /* @__PURE__ */ jsx(Save, { className: "mr-2 h-4 w-4" }),
              processing ? "Saving..." : "Save History"
            ]
          }
        )
      ] })
    ] }) })
  ] }) }) }) }) });
}
export {
  HistoryCreate as default
};
