import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./app-logo-icon-Ob1cKZaq.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle, d as CardDescription } from "./card-BtFn3yKH.js";
import { u as useDeleteConfirmation } from "./use-delete-confirmation-CpJvjj0Z.js";
import { A as AppLayout } from "./app-layout-CJd6oBTa.js";
import { router } from "@inertiajs/react";
import { Plus, Eye, Edit, Trash2 } from "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "react";
import "@radix-ui/react-alert-dialog";
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
  }
];
const visionMissionsDummyData = [
  {
    id: 1,
    title: "Our Vision",
    content: "To become a leading vocational school that produces skilled, innovative, and character-driven graduates who are ready to compete in the global job market and contribute to sustainable national development.",
    created_at: "2024-01-15T08:00:00.000Z",
    updated_at: "2024-01-15T08:00:00.000Z"
  },
  {
    id: 2,
    title: "Our Mission",
    content: "1. Provide quality vocational education that aligns with industry standards and technological developments.<br>2. Develop students' technical skills, creativity, and entrepreneurial spirit.<br>3. Foster character building based on noble values and national culture.<br>4. Build partnerships with industry, government, and educational institutions.<br>5. Continuously improve facilities, infrastructure, and teaching quality.",
    created_at: "2024-01-15T08:30:00.000Z",
    updated_at: "2024-01-15T08:30:00.000Z"
  }
];
function VissionMissionsIndex({ visionMissions = visionMissionsDummyData }) {
  const { setDeleteItem, DeleteDialog } = useDeleteConfirmation({
    routeName: "vision-missions.destroy",
    getParams: (item) => ({ id: item.id })
  });
  return /* @__PURE__ */ jsx(AppLayout, { breadcrumbs, children: /* @__PURE__ */ jsx("div", { className: "flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Vision & Mission Ta iki" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Manage your organization's vision and mission statements" })
      ] }),
      /* @__PURE__ */ jsxs(Button, { onClick: () => router.visit(route("vision-missions.create")), children: [
        /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
        "Add New"
      ] })
    ] }),
    visionMissions.length === 0 ? /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "flex flex-col items-center justify-center py-16", children: [
      /* @__PURE__ */ jsx(Eye, { className: "mb-4 h-12 w-12 text-muted-foreground" }),
      /* @__PURE__ */ jsx("h3", { className: "mb-2 text-lg font-semibold", children: "No vision or mission statements" }),
      /* @__PURE__ */ jsx("p", { className: "mb-6 text-center text-muted-foreground", children: "Get started by creating your first vision or mission statement." }),
      /* @__PURE__ */ jsxs(Button, { onClick: () => router.visit(route("vision-missions.create")), children: [
        /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
        "Add New"
      ] })
    ] }) }) : /* @__PURE__ */ jsx("div", { className: "grid gap-6", children: visionMissions.map((item) => /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: item.title }),
          /* @__PURE__ */ jsxs(CardDescription, { children: [
            "Created ",
            new Date(item.created_at).toLocaleDateString()
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => router.visit(route("vision-missions.edit", { id: item.id })),
              children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", onClick: () => setDeleteItem(item), children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "prose max-w-none text-sm text-muted-foreground",
          dangerouslySetInnerHTML: {
            __html: item.content.length > 300 ? item.content.substring(0, 300) + "..." : item.content
          }
        }
      ) })
    ] }, item.id)) }),
    /* @__PURE__ */ jsx(DeleteDialog, {})
  ] }) }) });
}
export {
  VissionMissionsIndex as default
};
