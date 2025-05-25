// app/orders/hooks/useFilteredOrders.ts
import { useMemo } from "react";
import { PizzaOrder, OrderStatus } from "@/types/orders";

export function useFilteredOrders(
  orders: PizzaOrder[],
  sortKey: keyof PizzaOrder,
  sortOrder: "asc" | "desc",
  statusFilter: OrderStatus | "all"
) {
  return useMemo(() => {
    let filtered = statusFilter === "all" 
      ? orders 
      : orders.filter(order => order.status === statusFilter);

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
  }, [orders, sortKey, sortOrder, statusFilter]);
}
