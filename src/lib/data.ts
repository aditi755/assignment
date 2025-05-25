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

export const getStatusColor = (status: OrderStatus): string => {
  const colors = {
    Pending: 'bg-yellow-100 text-yellow-800',
    Preparing: 'bg-blue-100 text-blue-800',
    'Out for Delivery': 'bg-purple-100 text-purple-800',
    Delivered: 'bg-green-100 text-green-800',
    Cancelled: 'bg-red-100 text-red-800',
  }
  return colors[status]
}