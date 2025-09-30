import { jsx, jsxs } from "react/jsx-runtime";
import { B as Button } from "./app-logo-icon-Ob1cKZaq.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./card-BtFn3yKH.js";
import { u as useDeleteConfirmation } from "./use-delete-confirmation-CpJvjj0Z.js";
import { A as AppLayout } from "./app-layout-CJd6oBTa.js";
import { Link, router } from "@inertiajs/react";
import { Plus, Clock, Edit, Trash2 } from "lucide-react";
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
    title: "Struktur Organisasi",
    href: "/struktur-organisasi"
  }
];
const historiesDummyData = [
  {
    id: 1,
    year: 2020,
    photo_url: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=600&fit=crop",
    description: "Successfully transitioned to digital learning during the pandemic, ensuring continuity of education for all students with innovative online learning solutions.",
    created_at: "2024-01-05T08:00:00.000Z"
  },
  {
    id: 2,
    year: 2015,
    photo_url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
    description: "Achieved A-grade accreditation from the National Education Board, recognizing our commitment to educational excellence and quality standards.",
    created_at: "2024-01-05T08:30:00.000Z"
  },
  {
    id: 3,
    year: 2010,
    photo_url: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
    description: "Establishment of Information Technology department with state-of-the-art computer laboratories to meet growing demand for tech professionals.",
    created_at: "2024-01-05T09:00:00.000Z"
  },
  {
    id: 4,
    year: 2e3,
    photo_url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
    description: "Construction of new academic building completed, expanding our capacity to serve more students with modern facilities and learning spaces.",
    created_at: "2024-01-05T09:30:00.000Z"
  },
  {
    id: 5,
    year: 1985,
    photo_url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop",
    description: "School was founded with the vision to provide quality vocational education to the community and prepare students for successful careers.",
    created_at: "2024-01-05T10:00:00.000Z"
  }
];
function HistoryIndex({ histories = historiesDummyData }) {
  const { setDeleteItem, DeleteDialog } = useDeleteConfirmation({
    routeName: "history.destroy",
    getParams: (item) => ({ id: item.id })
  });
  return /* @__PURE__ */ jsx(AppLayout, { breadcrumbs, children: /* @__PURE__ */ jsx("div", { className: "flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "School History" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Manage historical milestones and achievements" })
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("histories.create"), children: [
        /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
        "Add History"
      ] }) })
    ] }),
    histories.length === 0 ? /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "flex flex-col items-center justify-center py-16", children: [
      /* @__PURE__ */ jsx(Clock, { className: "mb-4 h-12 w-12 text-muted-foreground" }),
      /* @__PURE__ */ jsx("h3", { className: "mb-2 text-lg font-semibold", children: "No history records" }),
      /* @__PURE__ */ jsx("p", { className: "mb-6 text-center text-muted-foreground", children: "Start building your school's historical timeline." }),
      /* @__PURE__ */ jsxs(Button, { onClick: () => window.location.href = "/histories/create", children: [
        /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
        "Add History"
      ] })
    ] }) }) : /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: histories.map((item) => /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-bold text-primary", children: item.year }) }),
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
      /* @__PURE__ */ jsxs(CardContent, { children: [
        item.photo && /* @__PURE__ */ jsx("img", { src: item.photo, alt: `History ${item.year}`, className: "mb-4 h-48 w-full rounded-md object-cover" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.description && item.description.length > 150 ? `${item.description.substring(0, 150)}...` : item.description || "No description available" })
      ] })
    ] }, item.id)) }),
    /* @__PURE__ */ jsx(DeleteDialog, {})
  ] }) }) });
}
export {
  HistoryIndex as default
};
