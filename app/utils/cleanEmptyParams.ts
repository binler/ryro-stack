const DEFAULT_PAGE_INDEX = 0;
const DEFAULT_PAGE_SIZE = 10;
export const cleanEmptyParams = <T extends Record<string, unknown>>(
    search: T
) => {
    const newSearch = { ...search }
    Object.keys(newSearch).forEach((key, _) => {
        const value = newSearch[key]
        if (
            value === undefined ||
            value === '' ||
            (typeof value === 'number' && Number.isNaN(value))
        )
            delete newSearch[key]
    })

    if (search.pageIndex === DEFAULT_PAGE_INDEX) {
        // biome-ignore lint/performance/noDelete: <explanation>
        delete newSearch.pageIndex;
    }
    if (search.pageSize === DEFAULT_PAGE_SIZE) {
        // biome-ignore lint/performance/noDelete: <explanation>
        delete newSearch.pageSize;
    }

    return newSearch;
}
