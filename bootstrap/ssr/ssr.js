import { jsx } from "react/jsx-runtime";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = "Laravel";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./pages/admin/history/create.tsx": () => import("./assets/create-Bp6_zh43.js"), "./pages/admin/history/edit.tsx": () => import("./assets/edit-D0c6pCds.js"), "./pages/admin/history/index.tsx": () => import("./assets/index-Ct7S8N0f.js"), "./pages/admin/major/create.tsx": () => import("./assets/create-CoAexzWQ.js"), "./pages/admin/major/edit.tsx": () => import("./assets/edit-DR2doSbJ.js"), "./pages/admin/major/index.tsx": () => import("./assets/index-By5sKm__.js"), "./pages/admin/organizational-structure/create.tsx": () => import("./assets/create-BiA7o3uS.js"), "./pages/admin/organizational-structure/edit.tsx": () => import("./assets/edit-ClyCK10y.js"), "./pages/admin/organizational-structure/index.tsx": () => import("./assets/index-BECrFKxP.js"), "./pages/admin/vission-missions/create.tsx": () => import("./assets/create-Bj-1AnQF.js"), "./pages/admin/vission-missions/edit.tsx": () => import("./assets/edit-BV0_izSL.js"), "./pages/admin/vission-missions/index.tsx": () => import("./assets/index-DNeS95lR.js"), "./pages/admin/works/create.tsx": () => import("./assets/create-DoKl4vH3.js"), "./pages/admin/works/edit.tsx": () => import("./assets/edit-zceu6Ss3.js"), "./pages/admin/works/index.tsx": () => import("./assets/index-Bl1Rz3JP.js"), "./pages/auth/confirm-password.tsx": () => import("./assets/confirm-password-CRCuFtg9.js"), "./pages/auth/forgot-password.tsx": () => import("./assets/forgot-password-Bs1WC6oG.js"), "./pages/auth/login.tsx": () => import("./assets/login-CC96Y1JD.js"), "./pages/auth/register.tsx": () => import("./assets/register-ryb24hOx.js"), "./pages/auth/reset-password.tsx": () => import("./assets/reset-password-DLkTxd6u.js"), "./pages/auth/verify-email.tsx": () => import("./assets/verify-email-DUx0z5wn.js"), "./pages/dashboard.tsx": () => import("./assets/dashboard-KADw4nuo.js"), "./pages/settings/appearance.tsx": () => import("./assets/appearance-BinRcLFt.js"), "./pages/settings/password.tsx": () => import("./assets/password-B1zlUTu5.js"), "./pages/settings/profile.tsx": () => import("./assets/profile-BZJnyxld.js"), "./pages/welcome.tsx": () => import("./assets/welcome-C_799BRJ.js") })),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
