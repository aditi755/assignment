import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-background">Welcome to My App</h1>
        <p className="text-lg text-gray-700">
          To login, please{' '}
          <Link
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            click here
          </Link>
        </p>
      </div>
    </main>
  );
}
