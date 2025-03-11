import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold">Home page</h1>
      <Link href="/login" className="btn">
        Login
      </Link>
    </div>
  );
}
