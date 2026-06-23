import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Our Method & Mission | Slimdown Blueprint',
  description: 'Learn about our natural, balanced approach to nutrition, hydration, and manageable wellness designs built for women.',
};

export default function AboutPage() {
  return (
    <div className="py-20 px-4 bg-brand-bg">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-brand-primary uppercase tracking-widest text-xs font-bold font-heading bg-brand-primary/10 px-4.5 py-1.5 rounded-full inline-block">
            Our Method & Strategy
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-dark">
            Feminine-Centric Health Support
          </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Developing sensible digital guides to help women establish balanced habits, support physical energy, and manage healthy body weight naturally.
          </p>
        </div>

        {/* Story details */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 space-y-8 text-gray-600 leading-relaxed shadow-premium">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-brand-dark">A Life-First Health Paradigm</h2>
            <p className="text-xs sm:text-sm leading-relaxed">
              We design our digital programs around nutrient density, hydration templates, and low-impact movement. Our approach emphasizes gentle bodyweight structures and clean nutrition over extreme calorie tracking.
            </p>
            <p className="text-xs sm:text-sm leading-relaxed">
              Tailored specifically for women aged 25 to 55, Slimdown Blueprint offers digital programs that fit easily into a busy schedule, helping you maintain energy and focus throughout your day.
            </p>
          </div>

          <div className="border-t border-gray-55 pt-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-brand-dark">The Three Core Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2 bg-brand-bg p-5 rounded-2xl border border-gray-50">
                <span className="text-brand-primary font-bold font-heading text-xs tracking-wide block">1. Natural Ingredients</span>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                  We focus on leafy greens, rich antioxidant berries, digestive fibers, and nutrient-dense fats.
                </p>
              </div>
              <div className="space-y-2 bg-brand-bg p-5 rounded-2xl border border-gray-50">
                <span className="text-brand-primary font-bold font-heading text-xs tracking-wide block">2. Adaptable Exercises</span>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                  Manageable workouts designed for home execution. Keep movement simple and realistic.
                </p>
              </div>
              <div className="space-y-2 bg-brand-bg p-5 rounded-2xl border border-gray-50">
                <span className="text-brand-primary font-bold font-heading text-xs tracking-wide block">3. Structured Habits</span>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                  Develop consistent routines with printable checksheets and simplified daily tracking systems.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-50 pt-8 text-center space-y-4">
            <h3 className="font-heading font-bold text-lg text-brand-dark">Ready to Begin?</h3>
            <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
              Our guides are built for realistic integration. No complex calculations or restrictive demands.
            </p>
            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-block bg-brand-primary hover:bg-brand-dark text-white font-semibold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all shadow-premium"
              >
                View Blueprints
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}