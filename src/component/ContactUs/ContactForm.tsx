"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const inputBase = "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2474A5]/30 focus:border-[#2474A5]";

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <section aria-labelledby="contact-heading" className="bg-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 id="contact-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900">Contact Info</h2>
            <div className="mt-3 h-[3px] w-14 bg-[#2474A5]" />
            <p className="mt-4 text-gray-700">
              Welcome to our website. We are glad to have you around.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded bg-[#2474A5] text-white">@</span>
              <div>
                <div className="text-sm font-semibold text-gray-900">Email</div>
                <a href="mailto:info@arrowmetals.net" className="text-gray-700 hover:underline">info@arrowmetals.net</a>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <motion.a href="#" aria-label="Facebook" whileHover={{ scale: 1.1 }} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                <FaFacebookF />
              </motion.a>
              <motion.a href="#" aria-label="Twitter" whileHover={{ scale: 1.1 }} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                <FaTwitter />
              </motion.a>
              <motion.a href="#" aria-label="LinkedIn" whileHover={{ scale: 1.1 }} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                <FaLinkedinIn />
              </motion.a>
              <motion.a href="#" aria-label="Instagram" whileHover={{ scale: 1.1 }} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                <FaInstagram />
              </motion.a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className={inputBase} name="name" placeholder="Name" required />
              <input className={inputBase} type="email" name="email" placeholder="Email" required />
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select className={inputBase} name="inquiryType" defaultValue="" required>
                <option value="" disabled>Inquiry Type</option>
                <option value="buying">Buying / Quote</option>
                <option value="selling">Selling / Asset Liquidation</option>
              </select>
              <input className={inputBase} name="phone" placeholder="Phone" />
            </div>
            <div className="mt-4">
              <textarea className={inputBase + " min-h-[140px]"} name="message" placeholder="Message" required />
            </div>

            <div className="mt-5 flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-[#2474A5] px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#1f6792]"
              >
                Send
              </motion.button>
              {submitted && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-green-700"
                >
                  Thanks! We’ll get back to you shortly.
                </motion.span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;