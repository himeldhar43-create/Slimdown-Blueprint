'use client';

import React, { useState } from 'react';
import { Mail, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <div className="py-20 px-4 bg-brand-bg">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-brand-primary uppercase tracking-widest text-xs font-bold font-heading bg-brand-primary/10 px-4.5 py-1.5 rounded-full inline-block">
            Support Desk
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-dark">
            How Can We Assist You?
          </h1>
          <p className="text-gray-505 text-sm md:text-base leading-relaxed">
            Have questions about your digital download, ingredient suggestions, or bundle access? Send a message to our customer support team below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Support Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-gray-100 p-6 rounded-2xl flex items-start space-x-4 shadow-premium">
              <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-brand-dark">Email Support</h3>
                <p className="text-[10px] text-gray-400 mb-1">Response within 24–48 hours</p>
                <p className="text-sm font-semibold text-brand-primary">support@slimdownblueprint.com</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 p-6 rounded-2xl flex items-start space-x-4 shadow-premium">
              <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary flex-shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-brand-dark">Digital Delivery Info</h3>
                <p className="text-xs text-gray-505 leading-relaxed">
                  Your PDF download link will be emailed to you immediately after purchase. If you don't see it, please check your spam or promotions folders.
                </p>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-7 bg-white border border-gray-100 p-8 rounded-3xl shadow-premium">
            {status === 'success' ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-brand-primary/5 border border-brand-primary/10 text-brand-dark rounded-2xl p-8 text-center space-y-3"
              >
                <h3 className="font-heading font-bold text-lg">Thank You For Reaching Out</h3>
                <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                  Your message was submitted. Our team will review your request and get back to you by email as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full bg-[#FAFAF8] border border-gray-200 rounded-xl p-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-gray-800 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide detailed information regarding your inquiry..."
                    className="w-full bg-[#FAFAF8] border border-gray-200 rounded-xl p-3.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary text-gray-800 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-brand-primary hover:bg-brand-dark text-white font-semibold text-xs uppercase tracking-wider py-4 rounded-full transition-all shadow-premium disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Submit Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}