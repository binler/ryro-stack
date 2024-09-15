import { useReactTable } from '@tanstack/react-table';
import React from 'react';

interface TableProps {
    data: any[]; // replace 'any' with your data type
    columns: any[]; // replace 'any' with your column type
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
    const {
        getTableProps,
        getTableBodyProps,
        getHeaderGroups,
        rows,
        prepareRow,
    } = useReactTable({ columns, data });

    return (
        <table {...getTableProps()}>
            <thead>
                {getHeaderGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;