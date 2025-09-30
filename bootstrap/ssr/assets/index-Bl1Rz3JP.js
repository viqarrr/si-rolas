import { jsx, jsxs } from "react/jsx-runtime";
import { B as Badge } from "./badge-COS-g98a.js";
import { c as cn, B as Button } from "./app-logo-icon-Ob1cKZaq.js";
import { C as Card, a as CardHeader, c as CardContent } from "./card-BtFn3yKH.js";
import { I as Input } from "./input-BJn0Hc2t.js";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon, CheckIcon, ChevronUpIcon, Plus, Search, Edit, Trash2 } from "lucide-react";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-K44slJds.js";
import { u as useDeleteConfirmation } from "./use-delete-confirmation-CpJvjj0Z.js";
import { A as AppLayout } from "./app-layout-CJd6oBTa.js";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
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
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>span]:line-clamp-1",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(ChevronDownIcon, { className: "size-4" })
    }
  );
}
const dummyWorks = [
  {
    id: 1,
    major_id: 2,
    title: "Interactive 3D Exhibition",
    slug: "interactive-3d-exhibition",
    description: "A virtual exhibition project built with Unity and WebGL integration.",
    year: 2023,
    cover_image: "/images/works/exhibition-cover.jpg",
    images: [
      {
        id: 11,
        work_id: 1,
        image: "/images/works/exhibition-1.jpg"
      },
      {
        id: 12,
        work_id: 1,
        image: "/images/works/exhibition-2.jpg"
      }
    ],
    links: [
      {
        id: 21,
        work_id: 1,
        url: "https://github.com/example/exhibition"
      },
      {
        id: 22,
        work_id: 1,
        url: "https://exhibition-demo.vercel.app"
      }
    ]
  },
  {
    id: 2,
    major_id: 3,
    title: "Mobile Learning App",
    slug: "mobile-learning-app",
    description: "Cross-platform mobile application for online learning with quizzes and progress tracking.",
    year: 2024,
    cover_image: "/images/works/learning-app-cover.png",
    images: [
      {
        id: 13,
        work_id: 2,
        image: "/images/works/learning-app-1.png"
      },
      {
        id: 14,
        work_id: 2,
        image: "/images/works/learning-app-2.png"
      }
    ],
    links: [
      {
        id: 23,
        work_id: 2,
        url: "https://play.google.com/store/apps/details?id=com.learning.app"
      },
      {
        id: 24,
        work_id: 2,
        url: "https://github.com/example/learning-app"
      }
    ]
  }
];
const dummyFilters = {
  search: "",
  active: "all"
};
const breadcrumbs = [
  {
    title: "Dashboard",
    href: "/"
  },
  {
    title: "Karya",
    href: "/karya"
  }
];
const WorksIndex = ({ works = dummyWorks, filters = dummyFilters }) => {
  const [search, setSearch] = useState(filters.search || "");
  const [activeFilter, setActiveFilter] = useState(filters.active || "all");
  const { setDeleteItem, DeleteDialog } = useDeleteConfirmation({
    routeName: "works.destroy",
    getParams: (item) => ({ id: item.id })
  });
  const handleSearch = (e) => {
    e.preventDefault();
    router.get(
      route("majors.index"),
      { search, active: activeFilter },
      {
        preserveState: true,
        replace: true
      }
    );
  };
  const handleFilterChange = (value) => {
    setActiveFilter(value);
    router.get(
      route("majors.index"),
      { search, active: value },
      {
        preserveState: true,
        replace: true
      }
    );
  };
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Works" }),
    /* @__PURE__ */ jsx("div", { className: "flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Works" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Manage projects and portfolio items" })
        ] }),
        /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("works.create"), children: [
          /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
          "Add Work"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsx("form", { onSubmit: handleSearch, className: "flex items-center space-x-2", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(Search, { className: "absolute top-2.5 left-2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                placeholder: "Cari karya...",
                value: search,
                onChange: (e) => setSearch(e.target.value),
                className: "w-64 pl-8"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs(Select, { value: activeFilter, onValueChange: handleFilterChange, children: [
            /* @__PURE__ */ jsx(SelectTrigger, { className: "w-32", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Jurusan" }) }),
            /* @__PURE__ */ jsxs(SelectContent, { children: [
              /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "All" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "seni-tari", children: "Seni Tari" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "seni-musik", children: "Seni Musik" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "seni-karawitan", children: "Seni Karawitan" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "seni-pedalangan", children: "Seni Pedalangan" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "seni-teater", children: "Seni Teater" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "kriya-kreatif-logam-dan-perhiasan", children: "Kriya Kreatif Logam dan Perhiasan" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "kriya-kreatif-kulit-dan-imitasi", children: "Kriya Kreatif Kulit dan Imitasi" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "kriya-kreatif-kayu-dan-rotan", children: "Kriya Kreatif Kayu dan Rotan" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "kriya-kreatif-batik-dan-tekstil", children: "Kriya Kreatif Batik dan Tekstil" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "seni-lukis", children: "Seni Lukis" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "desain-komunikasi-visual", children: "Desain Komunikasi Visual" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "produksi-film", children: "Produksi Film" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "animasi", children: "Animasi" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "pengembangan-perangkat-lunak-dan-gim", children: "Pengembangan Perangkat Lunak dan Gim" }),
              /* @__PURE__ */ jsx(SelectItem, { value: "desain-interior-dan-teknik-furnitur", children: "Desain Interior dan Teknik Furnitur" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHead, { children: "Work" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Summary" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Images" }),
            /* @__PURE__ */ jsx(TableHead, { children: "Links" }),
            /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsx(TableBody, { children: works.length === 0 ? /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 6, className: "text-center text-muted-foreground", children: "No works found" }) }) : works.map((work) => /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
              work.images && /* @__PURE__ */ jsx(
                "img",
                {
                  src: work.images[0].image,
                  alt: work.title,
                  className: "h-10 w-10 rounded-md object-cover"
                }
              ),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "font-medium", children: work.title }) })
            ] }) }),
            /* @__PURE__ */ jsx(TableCell, { className: "max-w-xs", children: /* @__PURE__ */ jsx("p", { className: "truncate text-sm", children: work.description }) }),
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: work.images.length }) }),
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: work.links.length }) }),
            /* @__PURE__ */ jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-2", children: [
              /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "/karya/edit", children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" }) }) }),
              /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", onClick: () => setDeleteItem(work), children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
            ] }) })
          ] }, work.id)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(DeleteDialog, {})
    ] }) })
  ] });
};
export {
  WorksIndex as default,
  dummyWorks
};
