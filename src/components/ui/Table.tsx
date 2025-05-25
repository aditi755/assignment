import React from "react";

export interface TableColumn<T, K extends keyof T = keyof T> {
  key: K;
  label: string;
  sortable?: boolean;
  render?: (value: T[K], row: T) => React.ReactNode;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  sortKey?: keyof T;
  sortOrder?: "asc" | "desc";
  onSort?: (key: keyof T) => void;
  filterComponent?: React.ReactNode;
}

export function Table<T extends { id: string | number }>({
  columns,
  data,
  sortKey,
  sortOrder,
  onSort,
  filterComponent,
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-lg shadow">
      {filterComponent && <div className="mb-4">{filterComponent}</div>}
      <table className="min-w-[300px]  divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key as string}
                onClick={() => column.sortable && onSort?.(column.key)}
                className={`
            px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
            ${
              column.sortable ? "cursor-pointer hover:text-gray-700" : ""
            }
            whitespace-nowrap
          `}
              >
                <span className="flex items-center gap-1">
                  {column.label}
                  {column.sortable && sortKey === column.key && (
                    <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-6 text-center text-gray-500"
              >
                No data found.
              </td>
            </tr>
          ) : (
            data.map((row) => (
              <tr
                key={row.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                {columns.map((col) => (
                  <td key={String(col.key)} className="px-4 py-3">
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;