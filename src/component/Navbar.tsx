"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-us" },
  {
    label: "INVENTORY",
    href: "/inventory",
    children: [
      { label: "OCTG", href: "/inventory/octg" },
      { label: "Valves", href: "/inventory/valves" },
      { label: "Drilling Equipment", href: "/inventory/drilling-equipment" },
      { label: "Instrumentation", href: "/inventory/instrumentation" },
    ],
  },
  { label: "SELL YOUR SURPLUS", href: "/sell" },
  { label: "CONTACT", href: "/contact-us" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [drawerOpenItem, setDrawerOpenItem] = React.useState<string | null>(null);
  const [scrolled, setScrolled] = React.useState(false);

  // Lock body scroll and close on ESC while drawer is open
  React.useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = original;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Toggle sticky + background after scrolling past the hero
  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = scrolled
    ? "flex items-center gap-1 font-semibold text-gray-800 hover:text-gray-900"
    : "flex items-center gap-1 font-semibold text-white hover:text-white/90";
  const headerClasses = scrolled
    ? "fixed top-0 z-40 w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow"
    : "absolute top-10 z-40 w-full bg-transparent";
  const iconColorClass = scrolled ? "text-gray-900" : "text-white";
  const underlineColorClass = scrolled ? "bg-[#2474A5]" : "bg-white";

  return (
    <>
    <header className={headerClasses}>
      <div className="container mx-auto py-4">
        <div className="flex h-20 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 select-none">
            <Image src="/logo2.png" width={250} height={90} alt="ScrapWorld" priority className="drop-shadow rounded-lg" />
      
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={linkClass}
                >
                  <span>{item.label}</span>
                  {item.children && <FiChevronDown className="text-[18px]" />}
                </Link>

                {/* Active underline */}
                <div className="h-1 mt-2 relative">
                  <AnimatePresence initial={false}>
                    {isActive(item.href) && (
                      <motion.span
                        layoutId="nav-underline"
                        className={`absolute left-0 right-0 mx-auto h-[3px] w-8 ${underlineColorClass} rounded`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Dropdown (desktop) */}
                {item.children && (
                  <AnimatePresence>
                    {openMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-[calc(100%+10px)] z-20 min-w-[220px] rounded-md border border-gray-200 bg-white py-2 shadow-lg"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            aria-label="Menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <RxCross2 className={`text-2xl ${iconColorClass}`} /> : <RxHamburgerMenu className={`text-2xl ${iconColorClass}`} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer + overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed inset-y-0 left-0 z-50 w-[300px] max-w-[85vw] bg-white shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between px-4 h-16 border-b">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                  <Image src="/logo.png" width={28} height={28} alt="ScrapWorld" />
                  <span className="font-semibold">Scrap World</span>
                </Link>
                <button
                  aria-label="Close menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  <RxCross2 className="text-xl" />
                </button>
              </div>

              <nav className="px-3 py-3 overflow-y-auto">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="">
                    <button
                      className="w-full flex items-center justify-between px-3 py-3 text-left font-semibold text-gray-800 hover:bg-gray-50 rounded"
                      onClick={() => {
                        if (item.children) {
                          setDrawerOpenItem((prev) => (prev === item.label ? null : item.label));
                        } else {
                          setMobileOpen(false);
                          window.location.href = item.href;
                        }
                      }}
                    >
                      <span>{item.label}</span>
                      {item.children && (
                        <motion.span
                          animate={{ rotate: drawerOpenItem === item.label ? 180 : 0 }}
                          transition={{ duration: 0.15 }}
                          className="text-lg"
                        >
                          <FiChevronDown />
                        </motion.span>
                      )}
                    </button>

                    {/* Collapsible children */}
                    {item.children && (
                      <AnimatePresence initial={false}>
                        {drawerOpenItem === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="ml-4 border-l pl-3"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 text-sm text-gray-700 hover:underline"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {isActive(item.href) && !item.children && (
                      <div className="mx-3 mb-2 h-[3px] w-8 bg-[#2474A5] rounded" />
                    )}
                  </div>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
    {/* Spacer to prevent content jump when navbar becomes fixed */}
    {scrolled && <div aria-hidden className="h-20" />}
    </>
  );
};

export default Navbar;