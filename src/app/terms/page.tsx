import React from 'react';

export const metadata = {
  title: 'Terms of Service | Slimdown Blueprint',
  description: 'Understand the terms governing your purchase and use of our digital fitness materials.',
};

export default function TermsPage() {
  return (
    <div className="py-20 px-4 bg-brand-bg">
      <div className="max-w-3xl mx-auto bg-white border border-gray-100 p-8 md:p-12 rounded-3xl space-y-6 text-gray-600 leading-relaxed text-xs sm:text-sm shadow-premium">
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-dark mb-4">Terms of Service</h1>
        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Effective Date: June 1, 2024</p>

        <section className="space-y-2">
          <h2 className="text-base font-heading font-bold text-brand-dark">1. Digital Licensing</h2>
          <p>
            When purchasing digital programs from Slimdown Blueprint, you are granted a single, non-transferable license for personal, non-commercial use. Sharing, reselling, or reproducing the contents of our PDF guides is prohibited.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-heading font-bold text-brand-dark">2. Delivery Policy</h2>
          <p>
            All digital purchases are sent automatically to your verified email address after checkout is complete. Because digital files are delivered immediately, we cannot offer traditional cash refunds. Please contact our support team if you have any trouble with your download.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-heading font-bold text-brand-dark">3. Acceptable Use</h2>
          <p>
            All content on our website and in our guides is provided for informational and educational purposes. You agree to use these wellness resources responsibly and in consultation with your primary healthcare provider.
          </p>
        </section>
      </div>
    </div>
  );
}