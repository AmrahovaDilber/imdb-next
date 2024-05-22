import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="space-x-3 flex p-3 bg-red-500">
      <Link href="/ " className="text-xl">
        Home
      </Link>
      <Link href="/about"  className="text-xl">About</Link>
    </div>
  );
}

export default Navbar;
