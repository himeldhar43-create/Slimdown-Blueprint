import React from 'react';

export const metadata = {
  title: 'Medical Disclaimer | Slimdown Blueprint',
  description: 'Please review our medical disclaimer regarding the informational and educational nature of our digital programs.',
};

export default function DisclaimerPage() {
  return (
    <div className="py-20 px-4 bg-brand-bg">
      <div className="max-w-3xl mx-auto bg-white border border-gray-100 p-8 md:p-12 rounded-3xl space-y-6 text-gray-600 leading-relaxed text-xs sm:text-sm shadow-premium">
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-brand-dark mb-4">Medical Disclaimer</h1>
        
        <div className="bg-brand-primary/5 border-l-4 border-brand-primary p-4 rounded-r-xl">
          <p className="font-semibold text-brand-dark text-xs sm:text-sm">
            Please Consult a Physician Before Starting Any Program
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-base font-heading font-bold text-brand-dark">Not Medical Advice</h2>
          <p>
            The recipes, smoothie guides, meal schedules, and lifestyle programs published by Slimdown Blueprint are provided for educational and informational purposes only. This content is not intended as medical advice or as a substitute for professional diagnosis or clinical treatment.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-heading font-bold text-brand-dark">Medical Consultation</h2>
          <p>
            We recommend consulting with a primary care doctor or qualified healthcare provider before making changes to your diet, beginning a new exercise routine, or adjusting your nutritional habits. It is especially important to seek professional clearance if you have pre-existing conditions or hormonal imbalances.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-heading font-bold text-brand-dark">User Responsibility</h2>
          <p>
            Every person has unique physical limits and health considerations. By following the fitness suggestions or nutritional plans described on this site, you agree to do so voluntarily and accept responsibility for your health and safety.
          </p>
        </section>
      </div>
    </div>
  );
}