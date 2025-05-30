import { OrderStatus } from "@/types/orders";

interface OrdersFilterProps {
  statusFilter: OrderStatus | "all";
  setStatusFilter: (status: OrderStatus | "all") => void;
  count: number;
  options: OrderStatus[];
}

export default function OrdersFilter({ statusFilter, setStatusFilter, count, options }: OrdersFilterProps) {
  return (
  <div className="w-full bg-white p-4 border-b">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <div className="w-full flex flex-col sm:w-auto">
      {/* Label above the select */}
      <label htmlFor="status-filter" className="block text-sm font-medium text-gray-500 mb-2">
        Filter by status
      </label>
      <select
        id="status-filter"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value as OrderStatus | "all")}
        className="w-full sm:w-auto px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
      >
        <option value="all">All Status</option>
        {options.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
    
    <div className="text-sm text-gray-500 hidden sm:block">{count} orders found</div>
  </div>
</div>

  );
}
