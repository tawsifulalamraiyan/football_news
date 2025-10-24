"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./ThemeBtn";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // <-- Icons for menu toggle

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItem = [
    { id: 1, title: "News", link: "/news" },
    { id: 2, title: "Players", link: "/players" },
    { id: 3, title: "Others", link: "/others" },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b md:hidden sticky top-0 left-0 bg-background z-50">
        <h1 className="text-2xl font-bold">Football News</h1>

        {/* Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md hover:bg-neutral-800 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar (Desktop) or Slide-in Menu (Mobile) */}
      <nav
        className={`fixed md:sticky top-0 left-0 h-full md:h-auto border-r bg-background
        flex flex-col justify-between px-5 py-4 w-64 md:w-64 transition-transform duration-300 z-40
        ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex flex-col w-full">
          {/* Desktop Title (hidden on mobile) */}
          <h1 className="text-2xl font-bold hidden md:block">Football News</h1>

          <ul className="flex flex-col gap-2 mt-10 w-full">
            {navItem.map((item) => (
              <li
                key={item.id}
                className={`text-xl px-2 py-1 rounded-md w-full hover:bg-neutral-800 transition ${
                  pathname === item.link ? "bg-neutral-700" : ""
                }`}
              >
                <Link
                  href={item.link}
                  onClick={() => setMenuOpen(false)} // Close menu when clicking link (mobile)
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ModeToggle />
        </div>
      </nav>

      {/* Overlay (for mobile when menu is open) */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
