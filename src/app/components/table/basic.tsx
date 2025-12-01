'use client'

import { getCoreRowModel, 
         flexRender, 
         useReactTable, 
         ColumnDef, 
         getPaginationRowModel, 
         PaginationState 
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@/src/app/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/src/app/components/ui/pagination";

import { Button } from "@/src/app/components/ui/button";

//import BlzPagination from "@/src/app/components/pagination";
import Link from 'next/link';
import { useEffect, useState, useReducer } from 'react';

export default function BasicTable(props: {
    title: string;
    caption?: string;
    data?: any[];
    columns?: ColumnDef<any>[];
    itemsPerPage?: number;
}){
    const defaultItemsPerPage: number = 4;
    //const rerender = useReducer(() => ({}), {})[1];
    const [itemsPerPage, setItemsPerPage] = useState<number>(props.itemsPerPage || defaultItemsPerPage);
    //const [currentPage, setCurrentPage] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);
    //const [pageRangeArray, setPageRangeArray] = useState<number[]>([]);

    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    })

    const buildPageRangeArray = () => {
        let array: number[] = []; 
        for(let i = 0; i < totalPages; i++){
            array.push(i+1);
        }
        return array;
    }

    useEffect(() => {
        setTotalPages(Math.ceil((props.data?.length || 0) / itemsPerPage));
        setPagination({
            pageIndex: 0,
            pageSize: itemsPerPage
        });
    }, [itemsPerPage, props.data]);

    const table = useReactTable({
        columns: props.columns || [],
        data: props.data || [],
        getCoreRowModel: getCoreRowModel(),
        onPaginationChange: setPagination,
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            pagination,
        },
    });

    if(props.data == undefined) return <p>No data</p>;
    if (props.data?.length === 0) return <p>No data</p>;

    if(props.data.length > 0){
        const headers = Object.keys(props.data[0]);

        return (
            <Table className="overflow-y-visible overflow-x-scroll">
                {
                    props.caption != undefined ? (
                        <TableCaption>{props.caption}</TableCaption>
                    ) : ""
                }
                <TableHeader className="select-none">
                   {
                    table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id} className="bg-gray-300 dark:bg-gray-900">
                                {headerGroup.headers.map(header => (
                                    <TableHead key={header.id} colSpan={header.colSpan} className="py-3 pl-2">
                                        {
                                            header.isPlaceholder ? null :
                                            flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )
                                        }
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))
                   }
                </TableHeader>
                <TableBody>
                    {
                        table.getRowModel().rows.map(row => (
                            <TableRow key={row.id}>
                                {
                                    row.getVisibleCells().map(cell => (
                                        <TableCell key={cell.id} className="px-3 p-2">
                                            { flexRender(cell.column.columnDef.cell, cell.getContext()) }
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        ))
                    }
                </TableBody>
                {
                    props.data.length > itemsPerPage?
                    (
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={12}>
                                    <Pagination className="select-none">
                                        <PaginationContent>
                                            {
                                                !table.getCanPreviousPage() ? 
                                                (
                                                    <PaginationItem>
                                                        <PaginationPrevious href="" className="text-gray-400 hover:text-gray-400" />
                                                    </PaginationItem>
                                                ) : (
                                                    <PaginationItem>
                                                        <PaginationPrevious href="" title="Previous page" onClick={() => { table.previousPage(); }} />
                                                    </PaginationItem>
                                                )
                                            }
                                            {
                                                buildPageRangeArray().map((page, index) => {
                                                    return (
                                                        <PaginationItem key={index}>
                                                            {
                                                                page == table.getState().pagination.pageIndex + 1 ? 
                                                                (
                                                                    <PaginationLink href="" isActive>
                                                                        {(table.getState().pagination.pageIndex + 1).toString()} 
                                                                    </PaginationLink>
                                                                ) : (
                                                                    <PaginationLink href="" title={`Go to page ${page}`} onClick={() => {
                                                                        table.setPageIndex(Number(page)-1);
                                                                    }}>
                                                                        {page}
                                                                    </PaginationLink>
                                                                )
                                                            }
                                                        </PaginationItem>
                                                    )
                                                }
                                            )}
                                            {
                                                !table.getCanNextPage() ? 
                                                (
                                                    <PaginationItem>
                                                        <PaginationNext href="" className="text-gray-400 hover:text-gray-400" />
                                                    </PaginationItem>
                                                ) : (
                                                    <PaginationItem>
                                                        <PaginationNext href="" title="Next page" onClick={() => { 
                                                            table.nextPage();
                                                        }} />
                                                    </PaginationItem>
                                                )
                                            }
                                        </PaginationContent>
                                        </Pagination>
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    ) : ""
                }
            </Table>
        );
    }
}