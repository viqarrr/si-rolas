import * as React from "react";
import { router } from "@inertiajs/react";

export function useFilters<T extends Record<string, string>>(opts: {
  initialFilters: T;
  routeName: string;
}) {
  const [filtersState, setFiltersState] = React.useState<T>(opts.initialFilters);

  const handleFilter = (key: keyof T, value: string) => {
    const newFilters = { ...filtersState, [key]: value };
    setFiltersState(newFilters);

    router.get(route(opts.routeName), newFilters, {
      preserveState: true,
      replace: true,
    });
  };

  return {
    filtersState,
    setFiltersState,
    handleFilter,
    ...filtersState,
  };
}
