'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/shop' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex flex-col focus:outline-none">
            <span className="font-heading font-extrabold text-xl tracking-wider text-brand-dark leading-none">
              SLIMDOWN
            </span>
            <span className="text-[10px] tracking-[0.25em] text-brand-primary uppercase font-semibold mt-1">
              Blueprint
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-primary ${
                    isActive ? 'text-brand-primary font-semibold' : 'text-brand-text'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/shop"
              className="bg-brand-primary hover:bg-brand-dark text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full shadow-premium transition-all duration-300 hover:shadow-lg flex items-center space-x-1"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-dark hover:text-brand-primary focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-brand-bg border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`block px-3 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-brand-primary/10 text-brand-primary font-semibold'
                        : 'text-brand-text hover:bg-gray-55'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 px-3">
                <Link
                  href="/shop"
                  onClick={handleLinkClick}
                  className="w-full bg-brand-primary hover:bg-brand-dark text-white block text-center py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider shadow-premium"
                >
                  Shop All Programs
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}