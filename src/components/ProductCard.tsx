import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, CheckCircle, Smartphone, Award, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Complete Transformation Bundle | Slimdown Blueprint',
  description: 'Access our complete series of guides including the Smoothie Slim-Down, Weight Loss Kickstart, and Transformation modules.',
};

export default function BundlePage() {
  const inclusions = [
    "The 21-Day Smoothie Slim-Down (PDF E-Book)",
    "4-Week Weight Loss Kickstart (Instructional Guide)",
    "10-Week Transformation Guide (Goal Tracker & Habits)",
    "Printable Weekly Shopping Templates & Cheatsheets",
    "All Future Revisions & Upgrades Delivered Free"
  ];

  return (
    <div className="py-16 md:py-24 px-4 bg-brand-bg">
      <div className="max-w-6xl mx-auto">
        <Link href="/shop" className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-brand-primary mb-8 hover:text-brand-dark transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Programs</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-brand-dark bg-brand-accent uppercase tracking-widest text-[10px] font-extrabold px-4.5 py-1.5 rounded-full inline-block shadow-sm">
              Complete Transformation Package
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-dark leading-tight">
              Complete Transformation Bundle
            </h1>

            {/* Image Preview */}
            <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-premium">
              <img src="/hero-bg.jpeg" alt="All Bundled Plans" className="w-full h-full object-cover" />
            </div>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Get comprehensive wellness resources in one package. This complete digital suite is designed to help you organize a balanced nutrition pattern, establish supportive home habits, and build long-term consistency.
            </p>

            <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="font-heading font-bold text-brand-dark text-base">
                What's Inside The Digital PDF:
              </h3>
              <ul className="space-y-3">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-start text-xs sm:text-sm text-gray-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-brand-primary mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-bold text-lg text-brand-dark">
                The Core Benefits
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                By taking a step-by-step approach, you can start with refreshing digestive smoothies, progress to approachable low-impact movement patterns, and establish steady wellness habits that support a balanced lifestyle.
              </p>
            </div>
          </div>

          {/* Checkout Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border-2 border-brand-accent shadow-premium shadow-brand-accent/5 rounded-3xl p-8 space-y-6 sticky top-28">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Digital Download Bundle</span>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-brand-dark">The Complete Package</h2>
              </div>

              <div className="flex items-baseline space-x-2 border-b border-gray-50 pb-6">
                <span className="text-4xl font-extrabold text-brand-dark">$29.99</span>
                <span className="text-xs text-gray-400 line-through">$42.97</span>
                <span className="text-[10px] bg-brand-primary/10 text-brand-primary font-bold px-2 py-0.5 rounded uppercase">Save 30%</span>
              </div>

              <a
                href="https://payhip.com/b/L8DhG"
                className="w-full bg-brand-primary hover:bg-brand-dark text-white text-center py-4 rounded-full font-semibold text-xs uppercase tracking-wider transition-all shadow-premium flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Download Entire Bundle</span>
              </a>

              <div className="space-y-3.5 text-xs text-gray-400 pt-4 border-t border-gray-50">
                <div className="flex items-start space-x-2">
                  <Smartphone className="w-4.5 h-4.5 text-brand-primary flex-shrink-0" />
                  <span>Compatible with smartphones, tablet readers, and home printers.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-brand-primary flex-shrink-0" />
                  <span>Encrypted transactions processed securely via Payhip.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Award className="w-4.5 h-4.5 text-brand-primary flex-shrink-0" />
                  <span>Instant access keys are sent to your email immediately.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}