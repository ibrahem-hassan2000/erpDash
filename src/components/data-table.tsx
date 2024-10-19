import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Pagination, Table } from "@mantine/core";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  Component?: React.ComponentType<{ employee: TData }>;
}
export function DataTable<TData, TValue>({
  columns,
  data,
  Component,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div>
      {Component && (
        <div className=" flex flex-col w-full gap-5 mdl:hidden mb-14">
          {table
            .getRowModel()
            .rows.map((row, i) =>
              row.original !== null ? (
                <Component key={i} employee={row.original as TData} />
              ) : null
            )}
        </div>
      )}
      <div className="  border-none pt-3 pb-6 mb-16">
        <div className="  hidden mdl:block ">
          <Table>
            <Table.Thead className=" border-black ">
              {table.getHeaderGroups().map((headerGroup) => (
                <Table.Tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <Table.Th
                        key={header.id}
                        className="text-start   font-medium pb-4 text-xs"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </Table.Th>
                    );
                  })}
                </Table.Tr>
              ))}
            </Table.Thead>
            <Table.Tbody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <Table.Tr
                    className="min-h-[72px]  h-[72px]"
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <Table.Td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Table.Td>
                    ))}
                  </Table.Tr>
                ))
              ) : (
                <Table.Tr>
                  <Table.Td
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </Table.Td>
                </Table.Tr>
              )}
            </Table.Tbody>
          </Table>
        </div>

        {data.length > 10 && (
          <div className="font-bold !mt-14 flex items-center justify-center">
            <Pagination
              total={table.getPageCount()} // Total number of pages
              dir="ltr"
              classNames={{
                control:
                  "!bg-white !border text-main border-solid border-main !rounded-full !w-10 !h-10 !flex !items-center !justify-center !mx-2",
              }}
              size="md"
              radius="xl"
              value={table.getState().pagination.pageIndex + 1}
              onChange={(value) => table.setPageIndex(value - 1)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
