'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Smile, Heart, Zap } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import Newsletter from '@/components/Newsletter';

export default function HomePage() {
  const products = [
    {
      id: "smoothie",
      title: "The 21-Day Smoothie Slim-Down",
      price: "9.99",
      slug: "smoothie-slim-down",
      bullets: [
        "20 Smoothie Recipes",
        "21-Day Meal Plan",
        "Shopping Lists",
        "Ingredient Guide",
        "Expert Tips"
      ],
    },
    {
      id: "kickstart",
      title: "4-Week Weight Loss Kickstart",
      price: "12.99",
      slug: "4-week-kickstart",
      bullets: [
        "Home Workout Program",
        "Meal Plan",
        "Progress Tracking",
        "Beginner Friendly"
      ],
    },
    {
      id: "transformation",
      title: "10-Week Transformation Guide",
      price: "19.99",
      slug: "10-week-transformation",
      bullets: [
        "Complete Workout System",
        "Nutrition Strategy",
        "Habit Building Guide",
        "Transformation Tracking"
      ],
    },
    {
      id: "bundle",
      title: "Complete Transformation Bundle",
      price: "29.99",
      slug: "bundle",
      isBundle: true,
      bullets: [
        "The 21-Day Smoothie Slim-Down",
        "4-Week Weight Loss Kickstart",
        "10-Week Transformation Guide",
        "Lifetime Free Revisions & Updates"
      ],
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36 bg-[#FAF8F5]">
        <div className="absolute top-[-300px] right-[-300px] w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-brand-primary font-heading uppercase tracking-widest text-xs font-extrabold bg-brand-primary/10 px-5 py-2 rounded-full inline-block">
              Empowering Feminine Wellness
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-brand-dark tracking-tight leading-[1.15] max-w-4xl mx-auto">
              Helping Women Lose Weight Naturally & Feel Their Best
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 font-body max-w-2xl mx-auto leading-relaxed">
              Discover smoothie guides, meal plans, and workout programs designed to help women build healthier habits and sustainable results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10"
          >
            <Link
              href="/shop"
              className="w-full sm:w-auto bg-brand-primary hover:bg-brand-dark text-white text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-premium hover:shadow-lg text-center"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/shop"
              className="w-full sm:w-auto border border-gray-200 hover:border-brand-primary text-gray-700 hover:text-brand-primary bg-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all text-center"
            >
              Browse Programs
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-gray-100 pt-10 mt-16"
          >
            <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs sm:text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-brand-primary" />
              <span>Instant Download</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs sm:text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-brand-primary" />
              <span>Beginner Friendly</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs sm:text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-brand-primary" />
              <span>Home Workout Options</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs sm:text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-brand-primary" />
              <span>Meal Plans Included</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-primary uppercase tracking-widest text-xs font-bold font-heading">
              Our Core Strategy
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-dark">
              Sustainable Habits For Lasting Vitality
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We design structured health methods around nutrition density and active restoration. Avoid severe calorie limits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-bg rounded-3xl p-8 border border-gray-100 text-center space-y-4">
              <div className="bg-brand-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto text-brand-primary">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-brand-dark">Reduce Bloating</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Prioritize dietary components that assist natural digestion and balance gastrointestinal networks.
              </p>
            </div>

            <div className="bg-brand-bg rounded-3xl p-8 border border-gray-100 text-center space-y-4">
              <div className="bg-brand-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto text-brand-primary">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-brand-dark">Improve Baseline Energy</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Nourish physical structures with whole-food options that stabilize glucose curves and mitigate crashes.
              </p>
            </div>

            <div className="bg-brand-bg rounded-3xl p-8 border border-gray-100 text-center space-y-4">
              <div className="bg-brand-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto text-brand-primary">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-brand-dark">Build Lasting Habits</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Integrate straightforward routines, printable checksheets, and uncomplicated lifestyle designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Selection Spotlight */}
      <section className="py-24 px-4 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-primary uppercase tracking-widest text-xs font-bold font-heading">
              Digital Guides & Blueprints
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-dark">
              Choose Your Pathway
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Explore easy-to-digest files, printable structures, and guides built for real, daily environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                title={p.title}
                price={p.price}
                slug={p.slug}
                bullets={p.bullets}
                isBundle={p.isBundle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page Callout Banner */}
      <section className="py-20 px-4 bg-white border-t border-b border-gray-50">
        <div className="max-w-4xl mx-auto bg-brand-bg border border-gray-100 shadow-premium rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-md">
            <h3 className="font-heading font-bold text-xl text-brand-dark">
              Want the Entire Transformation Library?
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Save 30% by acquiring all three digital programs in one premium bundle package. Download instantly.
            </p>
          </div>
          <Link
            href="/products/bundle"
            className="w-full md:w-auto bg-brand-primary hover:bg-brand-dark text-white text-center py-3.5 px-8 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-premium"
          >
            Access Complete Bundle
          </Link>
        </div>
      </section>

      {/* Newsletter Signup Form */}
      <Newsletter />
    </div>
  );
}