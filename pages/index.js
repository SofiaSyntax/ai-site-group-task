import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Home</a>
        </div>
        <ul className="gap-2">
          <li>
            <Link href={"/pages/Sofia"}>Sofia</Link>
          </li>
          <li>
            <Link href={"/pages/embla"}>Embla</Link>
          </li>
          <li>
            <Link href={"/pages/fabricio"}>Fabricio</Link>
          </li>
          <li>
            <Link href={"/pages/mustaf"}>Mustaf</Link>
          </li>
          <Link href={"/pages/ahmet"}>Ahmet</Link>
          <li></li>
        </ul>
        <button className="btn btn-square btn-ghost md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
