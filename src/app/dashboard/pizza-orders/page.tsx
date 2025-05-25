"use client";
import { useState, useMemo } from "react";
import { mockOrders, getStatusColor, PizzaOrder, OrderStatus } from "@/lib/data";
import Link from "next/link";
import Table, { TableColumn } from "@/components/ui/Table";

const statusOptions: OrderStatus[] = ["Pending", "Preparing", "Out for Delivery", "Delivered", "Cancelled"];

export default function PizzaOrdersPage() {
  const [sortKey, setSortKey] = useState<keyof PizzaOrder>("orderDate");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "all">("all");

  const handleSort = (key: keyof PizzaOrder) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const columns: TableColumn<PizzaOrder>[] = [
    { 
      key: "id", 
      label: "Order ID", 
      sortable: true,
      className: "px-3 sm:px-6 py-3 text-left text-xs sm:text-sm whitespace-nowrap"
    },
    { 
      key: "customerName", 
      label: "Customer", 
      sortable: true,
      className: "hidden sm:table-cell px-6 py-3 text-left text-xs sm:text-sm"
    },
    { 
      key: "pizzaType", 
      label: "Pizza", 
      sortable: true,
      className: "px-3 sm:px-6 py-3 text-left text-xs sm:text-sm"
    },
    { 
      key: "quantity", 
      label: "Qty", 
      sortable: true,
      className: "hidden sm:table-cell px-6 py-3 text-left text-xs sm:text-sm whitespace-nowrap"
    },
    { 
      key: "orderDate", 
      label: "Date", 
      sortable: true,
      className: "hidden md:table-cell px-6 py-3 text-left text-xs sm:text-sm whitespace-nowrap",
      render: (value) => new Date(value).toLocaleDateString()
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      className: "px-3 sm:px-6 py-3 text-left text-xs sm:text-sm whitespace-nowrap",
      render: (value, row) => (
        <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(row.status)}`}>
          {row.status}
        </span>
      ),
    },
  ];

  const filteredAndSortedData = useMemo(() => {
    let filtered = statusFilter === "all" 
      ? mockOrders 
      : mockOrders.filter(order => order.status === statusFilter);

    return filtered.sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc" 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      return 0;
    });
  }, [mockOrders, sortKey, sortOrder, statusFilter]);

  const FilterComponent = (
    <div className="w-full bg-white p-4 border-b">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="w-full sm:w-auto">
          <h2 className="text-sm font-medium text-gray-700 mb-1">Filter by Status</h2>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as OrderStatus | "all")}
            className="w-full sm:w-auto px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
          >
            <option value="all">All Status</option>
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div className="text-sm text-gray-500 hidden sm:block">
          {filteredAndSortedData.length} orders found
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Header Section */}
          <div className="p-4 sm:p-6 border-b">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Pizza Orders</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Manage and track all pizza orders
                </p>
              </div>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center px-3 sm:px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span className="hidden sm:inline">Back to Dashboard</span>
                <span className="sm:hidden">Back</span>
              </Link>
            </div>
          </div>

          {/* Filter Section - Update the FilterComponent */}
          <div className="w-full bg-white p-4 border-b">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="w-full sm:w-auto">
                <h2 className="text-sm font-medium text-gray-700 mb-1">Filter by Status</h2>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as OrderStatus | "all")}
                  className="w-full sm:w-auto px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
                >
                  <option value="all">All Status</option>
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-sm text-gray-500 hidden sm:block">
                {filteredAndSortedData.length} orders found
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-hidden custom-scrollbar">
            <div className="min-w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] inline-block align-middle">
              <div className="overflow-hidden">
                <Table
                  columns={columns}
                  data={filteredAndSortedData}
                  sortKey={sortKey}
                  sortOrder={sortOrder}
                  onSort={handleSort}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}