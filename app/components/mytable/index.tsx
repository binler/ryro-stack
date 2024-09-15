import {
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "@radix-ui/react-icons";
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Table,
    TextField
} from "@radix-ui/themes";
import {
    type ColumnDef,
    type SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";

import { useState } from "react";

interface ReactTableProps<T> {
    data: T[],
    columns: ColumnDef<T>[]
}

export const MyTable = <T,>({ columns, data }: ReactTableProps<T>) => {
    const [globalFilter, setGlobalFilter] = useState('');
    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable({
        columns,
        data,
        state: {
            globalFilter,
            sorting,
        },
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
    });

    const {
        getHeaderGroups,
        getRowModel,
        firstPage,
        previousPage,
        lastPage,
        nextPage,
        getCanNextPage,
        getCanPreviousPage,
    } = table;

    return (
        <Container>
            <Heading>React Table Example</Heading>
            <Box maxWidth="250px">
                <TextField.Root
                    size="2"
                    placeholder="Search all columns..."
                    value={globalFilter || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)}
                />
            </Box>
            <Table.Root>
                <Table.Header>
                    {getHeaderGroups().map((headerGroup) => (
                        <Table.Row key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <Table.ColumnHeaderCell
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    {header.column.getIsSorted() === 'asc' && <ArrowUpIcon />}
                                    {header.column.getIsSorted() === 'desc' && <ArrowDownIcon />}
                                </Table.ColumnHeaderCell>
                            ))}
                        </Table.Row>
                    ))}
                </Table.Header>
                <Table.Body>
                    {getRowModel().rows.map((row) => (
                        <Table.Row key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <Table.Cell key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </Table.Cell>
                            ))}
                        </Table.Row>
                    ))}
                    {getRowModel().rows.length === 0 && 'Empty'}
                </Table.Body>
            </Table.Root>
            <Flex align="center" justify="center" m={'4'} gap="3">
                <Button
                    onClick={() => firstPage()}
                    aria-label="First Page"
                >
                    <ArrowLeftIcon />
                    First Page
                </Button>
                <Button
                    disabled={!getCanPreviousPage()}
                    onClick={() => previousPage()}
                    aria-label="Prev Page"
                >
                    <ChevronLeftIcon />
                    Prev Page
                </Button>
                <Button
                    disabled={!getCanNextPage()}
                    onClick={() => nextPage()}
                    aria-label="Next Page"
                >
                    <ChevronRightIcon />
                    Next Page
                </Button>
                <Button
                    onClick={() => lastPage()}
                    aria-label="Last Page"
                >
                    <ArrowRightIcon />
                    Last Page
                </Button>
            </Flex>
        </Container>
    );
};