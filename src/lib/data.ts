export type OrderStatus = 'Pending' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled'

export interface PizzaOrder {
  id: string
  customerName: string
  pizzaType: string
  quantity: number
  orderDate: string
  status: OrderStatus
}

export const mockOrders: PizzaOrder[] = [
  {
    id: 'PZA001',
    customerName: 'John Doe',
    pizzaType: 'Margherita',
    quantity: 2,
    orderDate: '2024-05-20 14:30',
    status: 'Preparing',
  },
  {
    id: 'PZA002',
    customerName: 'Jane Smith',
    pizzaType: 'Pepperoni',
    quantity: 1,
    orderDate: '2024-05-20 15:15',
    status: 'Pending',
  },
  {
    id: 'PZA003',
    customerName: 'Mike Johnson',
    pizzaType: 'Veggie Supreme',
    quantity: 3,
    orderDate: '2024-05-20 13:45',
    status: 'Delivered',
  },
  {
    id: 'PZA004',
    customerName: 'Sarah Wilson',
    pizzaType: 'BBQ Chicken',
    quantity: 2,
    orderDate: '2024-05-20 16:00',
    status: 'Out for Delivery',
  },
  {
    id: 'PZA005',
    customerName: 'Tom Brown',
    pizzaType: 'Hawaiian',
    quantity: 1,
    orderDate: '2024-05-20 12:30',
    status: 'Cancelled',
  },
  
]

export function getStatusColor(status: OrderStatus) {
  switch (status) {
    case "Pending": return "bg-yellow-200 text-yellow-800";
    case "Preparing": return "bg-blue-200 text-blue-800";
    case "Out for Delivery": return "bg-orange-200 text-orange-800";
    case "Delivered": return "bg-green-200 text-green-800";
    case "Cancelled": return "bg-red-200 text-red-800";
  }
}