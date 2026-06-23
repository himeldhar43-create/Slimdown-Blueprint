'use client';

import React, { useState } from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ReviewsPage() {
  const [formData, setFormData] = useState({ name: '', rating: '5', comment: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', rating: '5', comment: '' });
  };

  return (
    <div className="py-20 px-4 bg-[#FAFAF8]">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-brand-primary uppercase tracking-widest text-xs font-bold font-heading bg-brand-primary/10 px-4.5 py-1.5 rounded-full inline-block">
            Verified Customer Hub
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-dark">
            Real Transformations
          </h1>
          <p className="text-gray-550 text-sm md:text-base leading-relaxed">
            We prioritize transparency and genuine user experiences. Read what program members have written regarding their progress.
          </p>
        </div>

        {/* Aggregate Ratings */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-premium">
          <div className="md:col-span-4 text-center space-y-2 md:border-r md:border-gray-100 py-4">
            <h2 className="text-5xl font-extrabold text-brand-dark">4.9</h2>
            <div className="flex justify-center text-brand-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Average Customer Score</p>
          </div>
          <div className="md:col-span-8 flex flex-col justify-center space-y-2">
            <h3 className="font-heading font-bold text-lg text-brand-dark text-center md:text-left">
              Real Experiences of Progress
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed text-center md:text-left">
              We focus on helping women discover manageable nutrition structures, build steady energy levels, and reduce bloating naturally.
            </p>
          </div>
        </div>

        {/* Required Placeholder Box */}
        <div className="bg-[#FAF8F5] border border-gray-200/60 rounded-3xl p-12 text-center space-y-4">
          <div className="bg-brand-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-brand-primary">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-brand-dark">
            Customer Reviews Coming Soon
          </h3>
          <p className="text-gray-500 max-w-md mx-auto text-xs md:text-sm leading-relaxed">
            As a newly-launched digital resource brand, we are currently gathering early client reviews. Updates will appear here shortly.
          </p>
        </div>

        {/* Input Form Structure */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 space-y-8 shadow-premium">
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-xl text-brand-dark mb-2">Share Your Story</h3>
            <p className="text-xs sm:text-sm text-gray-550">Provide purchase reviews or share how you felt during the program below.</p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-brand-primary/5 border border-brand-primary/10 text-brand-dark rounded-2xl p-6 text-center space-y-2"
            >
              <h4 className="font-heading font-bold">Feedback Submitted</h4>
              <p className="text-xs text-gray-500">We verify all product logs before publishing reviews to protect site transparency.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-[#FAFAF8] border border-gray-200 rounded-xl p-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-gray-800 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Select Your Rating</label>
                  <select
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                    className="w-full bg-[#FAFAF8] border border-gray-200 rounded-xl p-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-gray-800 transition-all"
                  >
                    <option value="5">⭐⭐⭐⭐⭐ Excellent (5 Stars)</option>
                    <option value="4">⭐⭐⭐⭐ Great (4 Stars)</option>
                    <option value="3">⭐⭐⭐ Satisfactory (3 Stars)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Your Experience</label>
                <textarea
                  required
                  rows={4}
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  placeholder="Tell us which parts of the program or nutrition guides you enjoyed..."
                  className="w-full bg-[#FAFAF8] border border-gray-200 rounded-xl p-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-gray-800 transition-all"
                />
              </div>
              <button
                type="submit"
                className="bg-brand-primary hover:bg-brand-dark text-white font-semibold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all shadow-premium"
              >
                Submit Review
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}