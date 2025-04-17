import React from 'react';

function FAQ() {
  const faqs = [
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. You'll continue to have access to your plan until the end of your billing period."
    },
    {
      question: "What happens if I exceed my scan limit?",
      answer: "You'll receive a notification when you're approaching your limit. Once reached, you can upgrade your plan or wait until your next billing cycle."
    },
    {
      question: "Is there a free trial of the Pro plan?",
      answer: "Yes! You can try the Pro plan free for 14 days. No credit card required during the trial period."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;