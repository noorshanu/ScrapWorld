"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from "next/image";

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
            <Link href="/" className="inline-flex items-center gap-3 select-none">
              <Image src="/logo2.png" width={300} height={100} alt="Scrap World" className="opacity-95 rounded-lg" />
            </Link>
            
      
            <div className="mt-3 h-[2px] w-16 bg-white/30" />
            <p className="mt-3 text-sm leading-7 text-gray-300/90">
              Al Farwania has served the UAE market since 1983. Over decades, we have
              maintained uncompromised quality, long‑term relationships and strong
              environmental stewardship.
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-300/90">
              We provide official requirements such as laborers pass, transportation
              and loading equipment measures on time.
              <Link href="/about-us" className="ml-2 text-white hover:underline font-semibold">Read more</Link>
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <motion.a href="#" aria-label="Facebook" whileHover={{ scale: 1.1 }} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
                <FaFacebookF />
              </motion.a>
              <motion.a href="#" aria-label="Twitter" whileHover={{ scale: 1.1 }} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
                <FaTwitter />
              </motion.a>
              <motion.a href="#" aria-label="LinkedIn" whileHover={{ scale: 1.1 }} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
                <FaLinkedinIn />
              </motion.a>
              <motion.a href="#" aria-label="Instagram" whileHover={{ scale: 1.1 }} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
                <FaInstagram />
              </motion.a>
            </div>
          </div>

          {/* More links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-lg font-extrabold tracking-wide">QUICK LINKS</h3>
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

            {/* Newsletter */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex items-center gap-2"
              aria-label="Subscribe to newsletter"
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-md bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/60 outline-none ring-1 ring-white/20 focus:ring-white/40"
                required
              />
              <button
                type="submit"
                className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#0F0F0F] hover:bg-white/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">Copyright © {year} - Al Farwania</p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <Link href="#" className="hover:text-gray-200">Privacy</Link>
            <span className="text-gray-600">•</span>
            <Link href="#" className="hover:text-gray-200">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;