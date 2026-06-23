import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, CheckCircle, Smartphone, Award, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: '4-Week Weight Loss Kickstart | Slimdown Blueprint',
  description: 'A beginner-friendly 4-week system featuring low-impact home cardio moves and structural nutrition charts.',
};

export default function FourWeekKickstartPage() {
  const inclusions = [
    "4 Weeks of Easy Home Workouts (Under 30 Minutes)",
    "Clean-Eating Weekly Meal Plans",
    "Beginner-Friendly Active Fitness Charts",
    "Progressive Wellness Checklist",
    "Hydration Guides & Body Support Guidelines"
  ];

  return (
    <div className="py-16 md:py-24 px-4 bg-brand-bg">
      <div className="max-w-6xl mx-auto">
        <Link href="/shop" className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-brand-primary mb-8 hover:text-brand-dark transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Programs</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-brand-primary uppercase tracking-widest text-[10px] font-extrabold bg-brand-primary/10 px-4.5 py-1.5 rounded-full inline-block">
              Beginner Friendly
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-dark leading-tight">
              4-Week Weight Loss Kickstart
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Designed for women who want to establish a steady wellness baseline, this introductory system merges low-impact physical movement routines with a simple, balanced nutrition template.
            </p>

            <div className="bg-white border border-gray-100 shadow-premium rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="font-heading font-bold text-brand-dark text-base">
                What's Inside The Digital PDF:
              </h3>
              <ul className="space-y-3">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-start text-xs sm:text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-brand-primary mr-2.5 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-bold text-lg text-brand-dark">
                Gentle Movement, Positive Consistency
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Strenuous workouts can sometimes trigger elevated stress and burnout. This program uses supportive movement designs to help you gain momentum without feeling overwhelmed.
              </p>
            </div>
          </div>

          {/* Checkout Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-100 shadow-premium rounded-3xl p-8 space-y-6 sticky top-28">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Digital Download</span>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-brand-dark">Instant PDF Edition</h2>
              </div>

              <div className="flex items-baseline space-x-1 border-b border-gray-50 pb-6">
                <span className="text-4xl font-extrabold text-brand-dark">$12.99</span>
                <span className="text-xs text-gray-400 uppercase font-semibold">One-time payment</span>
              </div>

              <a
                href="PAYHIP_PRODUCT_LINK_HERE"
                className="w-full bg-brand-primary hover:bg-brand-dark text-white text-center py-4 rounded-full font-semibold text-xs uppercase tracking-wider transition-all shadow-premium flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Download Now</span>
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