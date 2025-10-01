import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { B as Badge } from "./badge-COS-g98a.js";
import { B as Button } from "./app-logo-icon-Ob1cKZaq.js";
import { C as Card, a as CardHeader, c as CardContent } from "./card-BtFn3yKH.js";
import { I as Input } from "./input-BJn0Hc2t.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-K44slJds.js";
import { u as useDeleteConfirmation } from "./use-delete-confirmation-CpJvjj0Z.js";
import { A as AppLayout } from "./app-layout-CJd6oBTa.js";
import { Head, Link, router } from "@inertiajs/react";
import { Plus, Search, Eye, Edit, Trash2 } from "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-alert-dialog";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
import "./index-Cps_U6QX.js";
const majorsIndexData = [
  {
    id: 1,
    slug: "informatics",
    title: "Informatics Engineering",
    short_description: "Focuses on software development, AI, and systems.",
    detail: "Focuses on software development, AI, and systems.",
    logo: "https://via.placeholder.com/80x80.png?text=IT",
    thumbnail: "https://via.placeholder.com/80x80.png?text=IT",
    competencies: [
      { major_id: 1, title: "title", description: "description" },
      { major_id: 1, title: "title", description: "description" },
      { major_id: 1, title: "title", description: "description" }
    ],
    career_prospects: [
      { major_id: 1, title: "title", description: "description" },
      { major_id: 1, title: "title", description: "description" },
      { major_id: 1, title: "title", description: "description" }
    ],
    created_at: "2025-09-20",
    updated_at: "2025-09-21"
  },
  {
    id: 2,
    slug: "graphic-design",
    title: "Graphic Design",
    short_description: "Learn design principles, branding, and multimedia.",
    detail: "Learn design principles, branding, and multimedia.",
    logo: "https://via.placeholder.com/80x80.png?text=Design",
    thumbnail: "https://via.placeholder.com/80x80.png?text=Design",
    competencies: [
      { major_id: 2, title: "title", description: "description" },
      { major_id: 2, title: "title", description: "description" },
      { major_id: 2, title: "title", description: "description" }
    ],
    career_prospects: [
      { major_id: 2, title: "title", description: "description" },
      { major_id: 2, title: "title", description: "description" },
      { major_id: 2, title: "title", description: "description" }
    ],
    created_at: "2025-09-15",
    updated_at: "2025-09-18"
  },
  {
    id: 3,
    slug: "mechanical-engineering",
    title: "Mechanical Engineering",
    short_description: "Covers machines, automotive, and industrial systems.",
    detail: "Covers machines, automotive, and industrial systems.",
    logo: "https://via.placeholder.com/80x80.png?text=Mech",
    thumbnail: "https://via.placeholder.com/80x80.png?text=Mech",
    competencies: [
      { major_id: 3, title: "title", description: "description" },
      { major_id: 3, title: "title", description: "description" },
      { major_id: 3, title: "title", description: "description" }
    ],
    career_prospects: [
      { major_id: 3, title: "title", description: "description" },
      { major_id: 3, title: "title", description: "description" },
      { major_id: 3, title: "title", description: "description" }
    ],
    created_at: "2025-09-10",
    updated_at: "2025-09-19"
  }
];
const dummyFilters = {
  search: ""
};
const breadcrumbs = [
  { title: "Dashboard", href: "/" },
  { title: "Jurusan", href: "/jurusan" }
];
function MajorsIndex({ majors = majorsIndexData, filters = dummyFilters }) {
  const [search, setSearch] = useState(filters.search || "");
  const { setDeleteItem, DeleteDialog } = useDeleteConfirmation({
    routeName: "majors.destroy",
    getParams: (item) => ({ id: item.id })
  });
  const handleSearch = (e) => {
    e.preventDefault();
    router.get(
      route("majors.index"),
      { search },
      {
        preserveState: true,
        replace: true
      }
    );
  };
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Majors" }),
    /* @__PURE__ */ jsx("div", { className: "flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Majors" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Manage academic majors and their competencies" })
        ] }),
        /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("majors.create"), children: [
          /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
          "Add Work"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsx("form", { onSubmit: handleSearch, className: "flex items-center space-x-2", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute top-2.5 left-2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Search majors...",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              className: "w-64 pl-8"
            }
          )
        ] }) }) }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxs(Table, { children: [
            /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
              /* @__PURE__ */ jsx(TableHead, { children: "Logo" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Title" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Description" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Competencies" }),
              /* @__PURE__ */ jsx(TableHead, { children: "Career Prospects" }),
              /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsx(TableBody, { children: majors.map((major) => /* @__PURE__ */ jsxs(TableRow, { children: [
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "h-12 w-12 overflow-hidden rounded-lg bg-gray-100", children: major.logo ? /* @__PURE__ */ jsx("img", { src: major.logo, alt: major.title, className: "h-full w-full object-cover" }) : /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center", children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 text-gray-400" }) }) }) }),
              /* @__PURE__ */ jsxs(TableCell, { children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium", children: major.title }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: major.slug })
              ] }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "max-w-xs truncate", children: major.short_description }) }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, { variant: "outline", children: major.competencies.length }) }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, { variant: "outline", children: major.career_prospects.length }) }),
              /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-2", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", onClick: () => setDeleteItem(major), children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
              ] }) })
            ] }, major.id)) })
          ] }),
          majors.length === 0 && /* @__PURE__ */ jsx("div", { className: "py-12 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "No majors found." }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(DeleteDialog, {})
    ] }) })
  ] });
}
export {
  MajorsIndex as default
};
