"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./ThemeBtn";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Users,
  FileText,
  Settings,
  Star,
  Trophy,
  Calendar,
  Info,
  PenIcon,
} from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 2, title: "News", link: "/news", icon: <FileText size={20} /> },
    { id: 3, title: "Players", link: "/players", icon: <Users size={20} /> },
    {
      id: 4,
      title: "Matches",
      link: "/matches",
      icon: <Trophy size={20} />,
    },

    {
      id: 5,
      title: "Schedule",
      link: "/schedule",
      icon: <Calendar size={20} />,
    },
    { id: 6, title: "Favorites", link: "/favorite", icon: <Star size={20} /> },
    {
      id: 7,
      title: "Settings",
      link: "/setting",
      icon: <Settings size={20} />,
    },
    { id: 8, title: "About", link: "/about", icon: <Info size={20} /> },
    {
      id: 9,
      title: "Create",
      link: "/admin",
      icon: <PenIcon size={20} />,
    },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b md:hidden sticky top-0 left-0 bg-background z-50">
        <h1 className="text-2xl font-bold">Football News</h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md hover:bg-neutral-800 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar / Navbar */}
      <nav
        className={`fixed md:sticky top-0 left-0 border-r bg-background
    flex flex-col justify-between px-5 py-4 w-64 md:w-64 transition-transform duration-300 z-40
    h-full max-h-screen overflow-auto
    ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
    max-sm:mt-10`}
      >
        <div className="flex flex-col w-full pb-4">
          {" "}
          {/* Add padding-bottom */}
          <h1 className="text-2xl font-bold hidden md:block">Football News</h1>
          <ul className="flex flex-col gap-2 mt-10 w-full">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`flex items-center gap-2 text-xl px-2 py-1 rounded-md w-full hover:bg-neutral-800 transition ${
                  pathname === item.link ? "bg-neutral-700" : ""
                }`}
              >
                <Link
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 w-full"
                >
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="pb-4">
          {" "}
          <ModeToggle />
        </div>
      </nav>

      {/* Overlay for mobile */}
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
