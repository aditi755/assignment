'use client';

import { useState } from "react";
import { mockOrders, getStatusColor } from "@/lib/data";
import { PizzaOrder, OrderStatus } from "@/types/orders";
import { useFilteredOrders } from "@/hooks/useFilteredOrders";
import Table, { TableColumn } from "@/components/ui/Table";
import OrdersHeader from "@/components/ui/OrdersHeader";
import OrdersFilter from "@/components/ui/OrdersFilter";

const statusOptions: OrderStatus[] = ["Pending", "Preparing", "Out for Delivery", "Delivered", "Cancelled"];

export default function ClientPizzaOrderPage() {
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

  const filteredData = useFilteredOrders(mockOrders, sortKey, sortOrder, statusFilter);

  const columns: TableColumn<PizzaOrder>[] = [
    { key: "id", label: "Order ID", sortable: true },
    { key: "customerName", label: "Customer", sortable: true },
    { key: "pizzaType", label: "Pizza", sortable: true },
    { key: "quantity", label: "Qty", sortable: true },
    { key: "orderDate", label: "Date", sortable: true, render: (v) => new Date(v).toLocaleDateString() },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (v, row) => (
        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(row.status)}`}>
          {row.status}
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl bg-white rounded-lg shadow-sm overflow-hidden">
        <OrdersHeader />
        <OrdersFilter
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          count={filteredData.length}
          options={statusOptions}
        />
        <div className="overflow-x-auto max-w-[400px] sm:max-w-[600px] md:max-w-[800px]">
          <Table
            columns={columns}
            data={filteredData}
            sortKey={sortKey}
            sortOrder={sortOrder}
            onSort={handleSort}
          />
        </div>
      </div>
    </div>
  );
}
