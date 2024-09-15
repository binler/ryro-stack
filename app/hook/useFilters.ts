import { useSearchParams } from '@remix-run/react';

export function useFilters(routeId: string) {
    const [searchParams, setSearchParams] = useSearchParams();

    const filters = Object.fromEntries(searchParams);

    const setFilters = (partialFilters: { [key: string]: string }) =>
        setSearchParams({ ...filters, ...partialFilters });

    const resetFilters = () => setSearchParams({});

    return { filters, setFilters, resetFilters };
}