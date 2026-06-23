import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return [
    { slug: 'healthy-smoothie-recipes' },
    { slug: 'weight-loss-tips-for-women' },
    { slug: 'home-workouts-for-beginners' },
    { slug: 'meal-planning-guide' },
  ];
}

interface BlogPost {
  title: string;
  category: string;
  content: string[];
}

const getPostData = (slug: string): BlogPost | null => {
  const data: Record<string, BlogPost> = {
    'healthy-smoothie-recipes': {
      title: "Healthy Smoothie Recipes For Clean Digestion",
      category: "Nutrition",
      content: [
        "A healthy digestive tract is essential for stable metabolic function and sustained daily energy. When the body processes nutrients smoothly, you can avoid common issues like bloating and energy slumps.",
        "Green leafy vegetables and fiber-rich fruits are excellent for supporting digestion. Combining fresh spinach or kale with gut-friendly ingredients like ground flaxseeds and ginger provides a simple way to nourish your body.",
        "Sample Hydration Shake Blueprint: Blend 1 cup of unsweetened almond milk, half a frozen banana, 1 tablespoon of chia seeds, a handful of fresh baby spinach, and a small slice of raw ginger. Enjoy this refreshing option to start your day."
      ]
    },
    'weight-loss-tips-for-women': {
      title: "Weight Loss Tips For Women",
      category: "Lifestyle",
      content: [
        "Managing family priorities, career commitments, and daily tasks can sometimes push wellness goals to the background. This often leads to skipping breakfast and eating heavier, less balanced meals later in the day.",
        "Reaching your health goals does not require complex or restrictive routines. Simple habits, such as prepping balanced snacks or following basic portion-control guidelines, can make a big difference.",
        "Focusing on consistent, nourishing options throughout the day helps keep your energy stable, making it easier to avoid late-day cravings."
      ]
    },
    'home-workouts-for-beginners': {
      title: "Home Workouts For Beginners",
      category: "Fitness",
      content: [
        "Starting with highly strenuous exercise routines can sometimes lead to fatigue and physical setbacks. Low-impact movement is an effective, sustainable way to build strength and endurance.",
        "A simple home workout requires no specialized equipment. You can build a reliable routine focusing on controlled bodyweight squats, knee-supported pushups, and active stretching to improve mobility.",
        "Perform each exercise in steady, 30-second intervals followed by a brief break. Try running through the circuit twice, three mornings a week, to build healthy momentum."
      ]
    },
    'meal-planning-guide': {
      title: "Meal Planning Guide",
      category: "Meal Prep",
      content: [
        "Planning your weekly meals does not need to be a complicated or time-consuming task. Creating a simple nutrition plan helps you save time and reduces cooking anxiety.",
        "We recommend using a straightforward three-part structure when building your plates: a high-fiber carbohydrate (like roasted sweet potato), a clean source of protein, and a generous portion of colorful vegetables.",
        "Focusing on whole foods rather than strict calorie tracking makes it easier to establish consistent, healthy eating habits that last."
      ]
    }
  };

  return data[slug] || null;
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold">Post Not Found</h1>
        <Link href="/blog" className="text-brand-primary underline mt-4 inline-block">Back To Blog</Link>
      </div>
    );
  }

  return (
    <article className="py-20 px-4 bg-brand-bg">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-brand-primary mb-8 hover:text-brand-dark transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back To Blog</span>
        </Link>

        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 space-y-6 shadow-premium">
          <div className="space-y-2">
            <span className="text-brand-primary text-xs font-bold uppercase tracking-widest">{post.category}</span>
            <h1 className="text-2xl md:text-4xl font-heading font-extrabold text-brand-dark leading-snug">{post.title}</h1>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base border-t border-gray-105 pt-8">
            {post.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}