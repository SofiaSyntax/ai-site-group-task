import { model } from "@/util/ai";
import Link from "next/link";

export default function Games() {
  return (
    <div className="navbar bg-base-100 top-0 sticky z-50">
      <Link href={"/"} className="flex-1 text-xl font-semibold">
        Home
      </Link>

      <ul className="gap-2 hidden md:flex">
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
  );
}
