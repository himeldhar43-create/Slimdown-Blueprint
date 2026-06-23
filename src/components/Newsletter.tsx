'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Newsletter() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '' });
    }, 1500);
  };

  return (
    <section className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white border border-gray-100 shadow-premium rounded-3xl p-8 md:p-14 text-center">
          <span className="text-brand-primary font-heading uppercase tracking-widest text-xs font-bold bg-brand-primary/10 px-4.5 py-1.5 rounded-full inline-block mb-4">
            Limited Time Offer
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-brand-dark mb-3">
            Get A Free 7-Day Smoothie Starter Guide
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Unlock our high-nutrient starter blueprint, containing simple morning recipe structures, a balanced grocery overview, and physical vitality tips.
          </p>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-brand-primary/5 border border-brand-primary/10 rounded-2xl p-6 text-center max-w-md mx-auto"
            >
              <div className="bg-brand-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-brand-dark text-base">Check Your Inbox!</h3>
              <p className="text-xs text-gray-500 mt-1">
                Your free starter guide and instructions are on their way to your email address.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full sm:w-1/3 px-5 py-4 bg-[#FAFAF8] border border-gray-200 rounded-full text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-brand-text transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full sm:w-2/3 px-5 py-4 bg-[#FAFAF8] border border-gray-200 rounded-full text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-brand-text transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-primary hover:bg-brand-dark text-white font-semibold text-xs md:text-sm uppercase tracking-wider py-4 rounded-full transition-all shadow-premium hover:shadow-lg disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Get My Free Guide'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}