import { jsx, jsxs } from "react/jsx-runtime";
import { Q as QuillWrapper } from "./quill-wrapper-CcpdOfxV.js";
import { B as Button } from "./app-logo-icon-Ob1cKZaq.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-BtFn3yKH.js";
import { I as Input } from "./input-BJn0Hc2t.js";
import { L as Label } from "./label-1NhrudkK.js";
import { A as AppLayout } from "./app-layout-CJd6oBTa.js";
import { useForm } from "@inertiajs/react";
import { Save } from "lucide-react";
import "react-quill";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "react";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-Cps_U6QX.js";
const breadcrumbs = [
  {
    title: "Dashboard",
    href: "/"
  },
  {
    title: "Visi Misi",
    href: "/visi-misi"
  },
  {
    title: "Ubah Visi Misi",
    href: "/visi-misi/edit"
  }
];
function VisionMissionsEdit({ visionMission, errors }) {
  const { data, setData, put, processing } = useForm({
    title: visionMission.title,
    content: visionMission.content
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("vision-missions.update", { id: visionMission.id }));
  };
  return /* @__PURE__ */ jsx(AppLayout, { breadcrumbs, children: /* @__PURE__ */ jsx("div", { className: "flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4", children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-bold tracking-tight", children: "Edit Vision/Mission" }) }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: "Title *" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "title",
            placeholder: "e.g., Vision, Mission, Core Values",
            value: data.title,
            onChange: (e) => setData("title", e.target.value),
            className: errors.title ? "border-red-500" : ""
          }
        ),
        errors.title && /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: errors.title })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "content", children: "Content *" }),
        /* @__PURE__ */ jsx(
          QuillWrapper,
          {
            value: data.content,
            onChange: (value) => setData("content", value),
            placeholder: "Write detailed content about vission/mission..."
          }
        ),
        errors.content && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: errors.content })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-4", children: [
        /* @__PURE__ */ jsx(Button, { type: "button", variant: "outline", onClick: () => window.history.back(), children: "Cancel" }),
        /* @__PURE__ */ jsxs(Button, { type: "submit", disabled: processing, children: [
          /* @__PURE__ */ jsx(Save, { className: "mr-2 h-4 w-4" }),
          processing ? "Saving..." : "Save Vision/Mission"
        ] })
      ] })
    ] }) })
  ] }) }) }) });
}
export {
  VisionMissionsEdit as default
};
