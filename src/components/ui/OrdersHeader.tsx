// app/orders/components/OrdersHeader.tsx
import Link from "next/link";

export default function OrdersHeader() {
  return (
    <div className="p-4 sm:p-6 border-b">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Pizza Orders</h1>
          <p className="mt-1 text-sm text-gray-500">Manage and track all pizza orders</p>
        </div>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center px-3 sm:px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="hidden sm:inline">Back to Dashboard</span>
          <span className="sm:hidden">Back</span>
        </Link>
      </div>
    </div>
  );
}
