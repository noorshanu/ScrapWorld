"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Scrap", href: "/products/ferrous" },
  { label: "Surplus", href: "/products/non-ferrous" },
  { label: "Available stock", href: "/stock" },
  { label: "Contact", href: "/contact" },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-[#0F0F0F] text-gray-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="container mx-auto px-4 py-14 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="text-lg font-extrabold tracking-wide">ABOUT US</h3>
            <div className="mt-3 h-[2px] w-16 bg-white/30" />
            <p className="mt-5 text-sm leading-7 text-gray-300/90">
              Scrap World has served the UAE market since 1983. Over decades, we have
              maintained uncompromised quality, long‑term relationships and strong
              environmental stewardship.
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-300/90">
              We provide official requirements such as laborers pass, transportation
              and loading equipment measures on time.
              <Link href="/about-us" className="ml-2 text-white hover:underline font-semibold">Read more</Link>
            </p>
          </div>

          {/* More links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-lg font-extrabold tracking-wide">MORE LINK</h3>
            <div className="mt-3 h-[2px] w-16 bg-white/30" />
            <ul className="mt-5 divide-y divide-white/10">
              {links.map((item) => (
                <li key={item.label} className="py-3">
                  <Link href={item.href} className="hover:underline text-gray-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-extrabold tracking-wide">CONTACT US</h3>
            <div className="mt-3 h-[2px] w-16 bg-white/30" />
            <motion.a
              href="mailto:info@arrowmetals.net"
              whileHover={{ x: 2 }}
              className="mt-6 inline-flex items-center gap-2 text-gray-100 hover:text-white"
            >
              <MdEmail className="text-xl" /> info@arrowmetals.net
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-4 py-6">
        <p className="text-xs text-gray-400">
          Copyright © {year} - Scrap World | Designed by <span className="font-semibold">Ahlanitsolutions</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;