import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Slimdown Blueprint',
  description: 'Learn how we manage, protect, and process user data on our digital download site.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 px-4 bg-brand-bg">
      <div className="max-w-3xl mx-auto bg-white border border-gray-100 p-8 md:p-12 rounded-3xl space-y-6 text-gray-600 leading-relaxed text-xs sm:text-sm shadow-premium">
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-dark mb-4">Privacy Policy</h1>
        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Effective Date: June 1, 2024</p>

        <section className="space-y-2">
          <h2 className="text-base font-heading font-bold text-brand-dark">1. Collection of Data</h2>
          <p>
            We collect personal information that you share with us directly, such as your name, email address, and billing details when purchasing guides or subscribing to our newsletters.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-heading font-bold text-brand-dark">2. Purpose of Use</h2>
          <p>
            We use your data to deliver digital files, process payments, send guide updates, and answer support messages. We do not sell or lease customer database details to third-party marketing companies.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-heading font-bold text-brand-dark">3. Security</h2>
          <p>
            All electronic transaction pipelines are handled securely by Payhip in partnership with Stripe and PayPal, using industry-standard SSL encryption methods.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-heading font-bold text-brand-dark">4. Cookies</h2>
          <p>
            We use session cookies to preserve browser configurations and compile basic anonymous website visitor metrics.
          </p>
        </section>
      </div>
    </div>
  );
}