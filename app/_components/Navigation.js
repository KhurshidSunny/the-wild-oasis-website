import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      {/* Hamburger button and checkbox for mobile toggle */}
      <input type="checkbox" id="nav-toggle" className="hidden peer" />
      <label
        htmlFor="nav-toggle"
        className="md:hidden p-2 cursor-pointer"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
            className="peer-checked:hidden"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
            className="hidden peer-checked:block"
          />
        </svg>
      </label>

      {/* Navigation list */}
      <ul
        className="
          hidden peer-checked:flex
          flex-col md:flex md:flex-row
          gap-8 md:gap-16 items-center
          absolute md:static
          top-16 left-0 right-0
          bg-primary-800 md:bg-transparent
          p-4 md:p-0
          shadow-md md:shadow-none
        "
      >
        <li>
          <Link href="/cabins" className="hover:text-accent-400 transition-colors">
            Cabins
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-accent-400 transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="/account" className="hover:text-accent-400 transition-colors">
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}