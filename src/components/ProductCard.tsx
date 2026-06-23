'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, ChevronRight, Check } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  slug: string;
  bullets: string[];
  isBundle?: boolean;
}

export default function ProductCard({ title, price, slug, bullets, isBundle }: ProductCardProps) {
  return (
    <div className={`relative flex flex-col justify-between bg-white rounded-3xl p-8 transition-all duration-300 ${
      isBundle 
        ? 'border-2 border-brand-accent shadow-premium shadow-brand-accent/10' 
        : 'border border-gray-100 shadow-premium'
    } hover:-translate-y-1 hover:shadow-xl`}>
      {isBundle && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-dark text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
          Best Value Pack
        </span>
      )}

      <div>
        <h3 className="font-heading text-lg font-bold text-brand-dark mb-1 leading-snug">
          {title}
        </h3>
        <div className="flex items-baseline space-x-1 mb-6">
          <span className="text-3xl font-extrabold text-brand-dark">${price}</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">One-Time Download</span>
        </div>

        <ul className="space-y-3 mb-8">
          {tailwindBulletedElements()}
        </ul>
      </div>

      <div className="space-y-3 pt-4 border-t border-gray-50">
        <a
          href="PAYHIP_PRODUCT_LINK_HERE"
          className="w-full bg-brand-primary hover:bg-brand-dark text-white text-center py-3.5 px-6 rounded-full font-semibold text-xs uppercase tracking-wider transition-all shadow-premium flex items-center justify-center space-x-2"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Instant Purchase</span>
        </a>
        <Link
          href={`/products/${slug}`}
          className="w-full bg-[#FAFAF8] hover:bg-gray-55 text-gray-700 hover:text-brand-primary text-center py-3 px-6 rounded-full font-medium text-xs transition-all flex items-center justify-center space-x-1"
        >
          <span>Learn Program Details</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );

  function tailwindBulletedElements() {
    return bullets.map((bullet, idx) => (
      <li key={idx} className="flex items-start text-xs text-gray-500">
        <Check className="w-3.5 h-3.5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
        <span>{bullet}</span>
      </li>
    ));
  }
}