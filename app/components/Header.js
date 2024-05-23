import Link from "next/link";

export default function Header() {
  return (
    <div className='bg-blue-500'>
      <div className="max-w-6xl mx-auto p-3 space-x-3 flex">
        <Link href="/ " className="text-xl">
          Home
        </Link>
        <Link href="/about" className="text-xl">
          About
        </Link>
      </div>
      <div></div>
    </div>
  );
}
