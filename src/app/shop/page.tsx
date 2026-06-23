import React from 'react';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'All Programs & Guides | Slimdown Blueprint',
  description: 'Choose from our structured smoothie recipes, weight loss kickstarts, physical training guides, and total bundle options.',
};

export default function ShopPage() {
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
    <div className="py-20 bg-brand-bg px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-primary font-heading uppercase tracking-widest text-xs font-bold bg-brand-primary/10 px-4.5 py-1.5 rounded-full inline-block">
            Step-by-Step Toolkits
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-dark">
            Feminine-Centric Health Blueprints
          </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            All programs are formatted as instantly accessible PDF downloads. No physical shipments, no monthly dues—just straightforward guides built to support your goals.
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

        {/* Brand Guarantees */}
        <div className="mt-24 border-t border-gray-100 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2 bg-white p-8 rounded-3xl border border-gray-55 shadow-premium">
            <h3 className="font-heading font-bold text-sm text-brand-dark">Instant Email PDF Delivery</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Read comfortably on smart devices, tablet readers, computers, or print hard copies directly.
            </p>
          </div>
          <div className="space-y-2 bg-white p-8 rounded-3xl border border-gray-55 shadow-premium">
            <h3 className="font-heading font-bold text-sm text-brand-dark">Fully Secured Processing</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Payments are completely processed through Payhip via fully encrypted merchant interfaces.
            </p>
          </div>
          <div className="space-y-2 bg-white p-8 rounded-3xl border border-gray-55 shadow-premium">
            <h3 className="font-heading font-bold text-sm text-brand-dark">Lifetime Document Revisions</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Any future upgrades or nutritional recipes are automatically delivered straight to your inbox.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}