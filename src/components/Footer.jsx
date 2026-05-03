import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative  bg-blue-950 text-white ">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* <Image
                src="/logo.png"
                alt="pixgen logo"
                width={32}
                height={32}
                className="dark:brightness-200"
              /> */}
              <h2 className="text-xl font-semibold tracking-tight  dark:text-white">
                QurBanir-Hat
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-400 dark:text-gray-400 max-w-xs">
              Online Qurbani Hat is a modern digital platform where users can
              select, book, and complete their Qurbani (sacrifice) from home.
            </p>
          </div>

          {/* animal */}
          <div className=" text-white">
            <h3 className="text-sm font-semibold  dark:text-white mb-4">
              Animals
            </h3>
            <ul className="space-y-3 text-sm text-gray-400 dark:text-gray-400">
              <li className=" dark:hover:text-white transition">Cow</li>
              <li className=" dark:hover:text-white transition">Camel</li>
              <li href="/pricing" className=" dark:hover:text-white transition">
                Goat
              </li>
              <li className=" dark:hover:text-white transition">Sheep</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold  dark:text-white mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm  dark:text-gray-400">
              <li className=" dark:hover:text-white transition text-gray-400 ">
                Support: +880 1700-000000 Email: support@qurbanihat.com
                Location: Dhaka, Bangladesh
              </li>
              <div className=" flex gap-2">
                <li className=" text-2xl">
                  <CiFacebook />
                </li>
                <li className=" text-2xl">
                  <FaYoutube />
                </li>
                <li className=" text-2xl">
                  <CiTwitter />
                </li>
              </div>
            </ul>
          </div>

          {/* CTA Block */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold  dark:text-white">
              Start booking
            </h3>

            <p className="text-sm  dark:text-gray-400 text-gray-400">
              A complete digital solution for performing Qurbani easily from
              home
            </p>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-black text-white dark:bg-white dark:text-black 
              text-sm font-medium transition-all duration-200 
              hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Qurbanir-hat. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-black dark:hover:text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
