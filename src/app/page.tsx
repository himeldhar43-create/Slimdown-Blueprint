'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Smile, Heart, Zap, Check } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import Newsletter from '@/components/Newsletter';

export default function HomePage() {
  const products = [
    {
      id: "smoothie",
      title: "The 21-Day Smoothie Slim-Down",
      price: "9.99",
      slug: "smoothie-slim-down",
      payhipLink: "https://payhip.com/b/nIp73",
      image: "/smoothie.jpeg",
      description: "A delicious, nutrient-packed smoothie guide engineered specifically to target stubborn bloating, optimize digestion, and support natural metabolic balance in 21 days.",
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
      payhipLink: "https://payhip.com/b/fBC4n",
      image: "/kickstart.jpeg",
      description: "A gentle, low-impact exercise guide combined with a hormone-conscious meal template designed to safely wake up your metabolic rate from home without exhausting your body.",
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
      payhipLink: "https://payhip.com/b/iOpRW",
      image: "/transformation.jpeg",
      description: "Our complete progressive wellness blueprint designed to reshape your habits, optimize body re-composition, and establish lasting lifestyle changes.",
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
      payhipLink: "https://payhip.com/b/L8DhG",
      image: "/hero-bg.jpeg",
      description: "Obtain every single resource in our product line. This complete package provides an adaptable, holistic plan for balanced wellness, nutrition, and strength.",
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
      {/* Hero Section with Silhouette Background */}
      <section 
        className="relative min-h-[85vh] flex items-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-xl md:max-w-2xl text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <span className="text-brand-accent font-heading uppercase tracking-widest text-xs font-extrabold bg-brand-primary/20 border border-brand-accent/20 px-5 py-2 rounded-full inline-block">
                ★ Premium Feminine Wellness Blueprint
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.15]">
                Lose Weight Naturally & Reclaim Your Energy
              </h1>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
                Simple nutrition schedules, digestive anti-bloating smoothie guides, and low-impact home workout blueprints engineered specifically for the female body.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/shop"
                className="bg-brand-primary hover:bg-brand-dark text-white text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-premium text-center"
              >
                Browse Our Programs
              </Link>
              <a
                href="#why-important"
                className="border border-white/20 hover:border-brand-primary bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full transition-all text-center"
              >
                Learn Our Method
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-white border-b border-gray-100 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-brand-primary" />
            <span>Instant PDF Download</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-brand-primary" />
            <span>100% Beginner Friendly</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-brand-primary" />
            <span>No Gym Equipment Needed</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-500 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-brand-primary" />
            <span>Balanced Meal Structures</span>
          </div>
        </div>
      </div>

      {/* Why Important Section */}
      <section id="why-important" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-brand-primary uppercase tracking-widest text-xs font-bold font-heading bg-brand-primary/10 px-4.5 py-1.5 rounded-full inline-block">
                Why This Is Engineered for Women
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-dark">
                Your Body is Unique — Your Plan Should Be Too
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Standard weight loss templates rely on extreme calorie deficits and high-stress workout programs that exhaust your body. For women, this approach often raises cortisol (stress hormones), which can trigger water retention, muscle loss, and chronic fatigue.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Slimdown Blueprint works with your body, not against it. By focusing on digestive recovery, natural nutrient density, and gentle muscle stimulation, our plans help you shed excess weight while protecting your natural energy and hormonal health.
              </p>
            </div>
            
            <div className="lg:col-span-6 bg-brand-bg border border-gray-150 rounded-3xl p-8 space-y-4 shadow-premium">
              <h3 className="font-heading font-bold text-lg text-brand-dark">The Natural Benefits You'll Experience:</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-xs sm:text-sm text-gray-600">
                  <span className="bg-brand-primary/10 text-brand-primary p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span><strong>Digestive Relief:</strong> Targets stubborn bloating and promotes digestive recovery.</span>
                </li>
                <li className="flex items-start text-xs sm:text-sm text-gray-600">
                  <span className="bg-brand-primary/10 text-brand-primary p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span><strong>Consistent Energy:</strong> Stable, whole-food options designed to prevent afternoon blood sugar crashes.</span>
                </li>
                <li className="flex items-start text-xs sm:text-sm text-gray-600">
                  <span className="bg-brand-primary/10 text-brand-primary p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span><strong>Manageable Workouts:</strong> Under 30-minute home workouts to help you build strength without raising cortisol levels.</span>
                </li>
              </ul>
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
                title={p.title}
                price={p.price}
                slug={p.slug}
                bullets={p.bullets}
                isBundle={p.isBundle}
                payhipLink={p.payhipLink}
                image={p.image}
                description={p.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Form */}
      <Newsletter />
    </div>
  );
}