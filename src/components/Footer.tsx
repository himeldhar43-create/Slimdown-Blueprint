import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo Brand Panel */}
          <div className="space-y-4">
            <Link href="/" className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-wider text-brand-dark leading-none">
                SLIMDOWN
              </span>
              <span className="text-[10px] tracking-[0.25em] text-brand-primary uppercase font-semibold mt-1">
                Blueprint
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Providing modern women with natural, sustainable digital nutrition strategies, active fitness pathways, and habit guides.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-xs uppercase tracking-widest text-brand-dark mb-4">
              Digital Guides
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-600">
              <li>
                <Link href="/products/smoothie-slim-down" className="hover:text-brand-primary transition-colors">
                  21-Day Smoothie Slim-Down
                </Link>
              </li>
              <li>
                <Link href="/products/4-week-kickstart" className="hover:text-brand-primary transition-colors">
                  4-Week Weight Loss Kickstart
                </Link>
              </li>
              <li>
                <Link href="/products/10-week-transformation" className="hover:text-brand-primary transition-colors">
                  10-Week Transformation Guide
                </Link>
              </li>
              <li>
                <Link href="/products/bundle" className="hover:text-brand-primary transition-colors font-semibold text-brand-primary">
                  Complete Transformation Bundle
                </Link>
              </li>
            </ul>
          </div>

          {/* Support and Company */}
          <div>
            <h3 className="font-heading font-semibold text-xs uppercase tracking-widest text-brand-dark mb-4">
              Resources
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-600">
              <li><Link href="/reviews" className="hover:text-brand-primary transition-colors">Customer Reviews</Link></li>
              <li><Link href="/about" className="hover:text-brand-primary transition-colors">Our Approach</Link></li>
              <li><Link href="/blog" className="hover:text-brand-primary transition-colors">Wellness Journal</Link></li>
              <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Support Desk</Link></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h3 className="font-heading font-semibold text-xs uppercase tracking-widest text-brand-dark mb-4">
              Legal Info
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-600">
              <li><Link href="/privacy-policy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-brand-primary transition-colors">Medical Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 space-y-4 md:space-y-0">
          <p>© {currentYear} Slimdown Blueprint. All rights reserved.</p>
          <p className="text-center md:text-right max-w-lg leading-relaxed">
            The wellness and nutrition files offered on this platform are designed for educational purposes. Consult with a medical professional prior to adjusting nutrition structures.
          </p>
        </div>
      </div>
    </footer>
  );
}