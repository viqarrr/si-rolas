import { jsx, jsxs } from "react/jsx-runtime";
import { A as AppLayout, a as Avatar, b as AvatarFallback } from "./app-layout-CJd6oBTa.js";
import { B as Button } from "./app-logo-icon-Ob1cKZaq.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle, d as CardDescription } from "./card-BtFn3yKH.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-K44slJds.js";
import { u as useDeleteConfirmation } from "./use-delete-confirmation-CpJvjj0Z.js";
import { Link, router } from "@inertiajs/react";
import { Plus, Users, Edit, Trash2 } from "lucide-react";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-Cps_U6QX.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-alert-dialog";
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
const organizationalStructuresDummyData = [
  {
    id: 1,
    name: "Dr. Ahmad Wijaya, M.Pd.",
    position: "Principal",
    photo_url: "organizational-structure/principal.jpg",
    created_at: "2024-01-10T08:00:00.000Z"
  },
  {
    id: 2,
    name: "Siti Nurhaliza, S.Pd., M.M.",
    position: "Vice Principal - Academic Affairs",
    photo_url: "organizational-structure/vice-academic.jpg",
    created_at: "2024-01-10T08:30:00.000Z"
  },
  {
    id: 3,
    name: "Budi Santoso, S.Pd.",
    position: "Vice Principal - Student Affairs",
    photo_url: "organizational-structure/vice-student.jpg",
    created_at: "2024-01-10T09:00:00.000Z"
  },
  {
    id: 4,
    name: "Indira Sari, S.Kom.",
    position: "Head of IT Department",
    photo_url: "organizational-structure/head-it.jpg",
    created_at: "2024-01-11T08:00:00.000Z"
  },
  {
    id: 5,
    name: "Raden Mas Suryo, S.T.",
    position: "Head of Engineering Department",
    photo_url: "organizational-structure/head-engineering.jpg",
    created_at: "2024-01-11T08:30:00.000Z"
  }
];
function OrganizationalStructuresIndex({ organizationalStructures = organizationalStructuresDummyData }) {
  const { setDeleteItem, DeleteDialog } = useDeleteConfirmation({
    routeName: "organizational-structure.destroy",
    getParams: (item) => ({ id: item.id })
  });
  return /* @__PURE__ */ jsx(AppLayout, { breadcrumbs, children: /* @__PURE__ */ jsx("div", { className: "flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Organizational Structure" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Manage your organization's leadership and structure" })
      ] }),
      /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("organizational-structures.create"), children: [
        /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
        "Add Work"
      ] }) })
    ] }),
    organizationalStructures.length === 0 ? /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "flex flex-col items-center justify-center py-16", children: [
      /* @__PURE__ */ jsx(Users, { className: "mb-4 h-12 w-12 text-muted-foreground" }),
      /* @__PURE__ */ jsx("h3", { className: "mb-2 text-lg font-semibold", children: "No organizational structure" }),
      /* @__PURE__ */ jsx("p", { className: "mb-6 text-center text-muted-foreground", children: "Get started by adding your first organizational member." }),
      /* @__PURE__ */ jsxs(Button, { onClick: () => router.visit(route("organizational-structures.create")), children: [
        /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
        "Add Member"
      ] })
    ] }) }) : /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Organization Members" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "A list of all members in your organizational structure" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { children: "Member" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Position" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Created" }),
          /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: organizationalStructures.map((item) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Avatar, { children: /* @__PURE__ */ jsx(AvatarFallback, { children: item.name.split(" ").map((n) => n[0]).join("").toUpperCase() }) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "font-medium", children: item.name }) })
          ] }) }),
          /* @__PURE__ */ jsx(TableCell, { children: item.position }),
          /* @__PURE__ */ jsx(TableCell, { className: "text-muted-foreground", children: new Date(item.created_at).toLocaleDateString() }),
          /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-2", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => router.visit(route("organizational-structures.edit", { id: item.id })),
                children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", onClick: () => setDeleteItem(item), children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
          ] }) })
        ] }, item.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(DeleteDialog, {})
  ] }) }) });
}
export {
  OrganizationalStructuresIndex as default
};
