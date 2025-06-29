import Link from "next/link";

export default function Header() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/skill", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-[#d8d1c5] text-black py-4 px-8 flex justify-center gap-8 font-serif fixed top-0 w-full z-50 shadow-md">
      {links.map((link) => (
        <Link key={link.href} href={link.href} legacyBehavior>
          <a className="hover:underline hover:underline-offset-4 hover:text-gray-700 transition-all duration-300">
            {link.label}
          </a>
        </Link>
      ))}
    </header>
  );
}
