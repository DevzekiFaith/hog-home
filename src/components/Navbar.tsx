import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar flex items-center justify-between gap-4 p-4 bg-black">
      <Link href="/">
        <div>
          <Image
            src="/logo2.png"
            height={600}
            width={600}
            alt="hog-logo"
            className=""
          />
        </div>
      </Link>
      <ul className="nav-list">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/ministry">Ministry</Link>
        </li>
        <li>
          <Link href="/founder">Founder</Link>
        </li>
        <li>
          <Link href="/catalogue">Catalogue</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      {/* Social media links removed as requested */}
    </nav>
  );
}
