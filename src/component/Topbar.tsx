"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

const Topbar: React.FC = () => {
  return (
    <motion.div
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full bg-[#2474A5] text-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-10 items-center justify-between text-[13px]">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden sm:inline font-semibold">Have any question?</span>
            <a href="mailto:info@arrowmetals.net" className="flex items-center gap-2 opacity-95 hover:opacity-100">
              <MdEmail className="text-base" />
              <span className="hidden xs:inline">info@arrowmetals.net</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              aria-label="Facebook"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="transition-colors hover:text-white/90"
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="#"
              aria-label="Twitter"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="transition-colors hover:text-white/90"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="#"
              aria-label="Google Plus"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="transition-colors hover:text-white/90"
            >
              <FaGooglePlusG />
            </motion.a>
            <motion.a
              href="#"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="transition-colors hover:text-white/90"
            >
              <FaLinkedinIn />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Topbar;