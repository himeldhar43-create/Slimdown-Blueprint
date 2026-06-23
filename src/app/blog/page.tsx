import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Wellness Blog | Slimdown Blueprint',
  description: 'Articles regarding clean nutrition recipes, home fitness movements, hydration habits, and simple meal plans.',
};

export default function BlogPage() {
  const posts = [
    {
      title: "Healthy Smoothie Recipes For Clean Digestion",
      slug: "healthy-smoothie-recipes",
      excerpt: "Explore green leafy and berry combinations designed to support energy, supply antioxidants, and promote digestive health.",
      category: "Nutrition"
    },
    {
      title: "Weight Loss Tips For Women",
      slug: "weight-loss-tips-for-women",
      excerpt: "Simple lifestyle guidelines, meal strategies, and mindful habits to help busy women reach their wellness goals.",
      category: "Lifestyle"
    },
    {
      title: "Home Workouts For Beginners",
      slug: "home-workouts-for-beginners",
      excerpt: "No gym required. Start building momentum with these low-impact, beginner-friendly physical exercises.",
      category: "Fitness"
    },
    {
      title: "Meal Planning Guide",
      slug: "meal-planning-guide",
      excerpt: "Organize your nutrient intake easily. Learn simple templates to plan healthy meals without spending hours in the kitchen.",
      category: "Meal Prep"
    }
  ];

  return (
    <div className="py-20 px-4 bg-brand-bg">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-brand-primary uppercase tracking-widest text-xs font-bold font-heading bg-brand-primary/10 px-4.5 py-1.5 rounded-full inline-block">
            Wellness Insights
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-dark">
            The Wellness Journal
          </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Free tips and resources covering metabolic support, meal-prep structures, and introductory home routines.
          </p>
        </div>

        {/* List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col justify-between hover:shadow-lg transition-shadow shadow-premium">
              <div className="space-y-4">
                <span className="text-brand-primary font-bold text-xs uppercase tracking-wider block">
                  {post.category}
                </span>
                <h2 className="text-lg md:text-xl font-heading font-bold text-brand-dark hover:text-brand-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-50">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-brand-primary hover:text-brand-dark inline-flex items-center space-x-1"
                >
                  <span>Read Article</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}