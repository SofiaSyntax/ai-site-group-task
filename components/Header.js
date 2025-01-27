import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-base-100 top-0 sticky z-50">
      <Link href={"/"} className="flex-1 text-xl font-semibold">
        Home
      </Link>

      <ul className="gap-4 hidden md:flex">
        <li>
          <Link href={"/sofia"}>Music</Link>
        </li>
        <li>
          <Link href={"/embla"}>Recipes</Link>
        </li>
        <li>
          <Link href={"/fabricio"}>Movies</Link>
        </li>
        <li>
          <Link href={"/mustaf"}>Books</Link>
        </li>
        <Link href={"/ahmet"}>Games</Link>
        <li></li>
      </ul>

      <button
        className="btn btn-square btn-ghost md:hidden"
        onClick={toggleMenu}>
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
      {isOpen && (
        <ul className="flex flex-col gap-2 md:hidden absolute bg-base-100 top-16 right-0 w-48 p-4 shadow-lg items-center">
          <li>
            <Link href={"/sofia"}>Music</Link>
          </li>
          <li>
            <Link href={"/embla"}>Recipes</Link>
          </li>
          <li>
            <Link href={"/fabricio"}>Movies</Link>
          </li>
          <li>
            <Link href={"/mustaf"}>Books</Link>
          </li>
          <li>
            <Link href={"/ahmet"}>Games</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
