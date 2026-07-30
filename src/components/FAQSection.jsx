import React, { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    {
      q: "How to Use the Billionaire Brain Wave Program?",
      a: "Listen to the 7-minute audio once daily (headphones recommended but often not mandatory), ideally at the same time each day. Most users find morning sessions or just before bed work best for establishing a consistent routine."
    },
    {
      q: "How fast will I see results?",
      a: "Some people feel calmer and more focused within days; deeper wealth‑mindset shifts typically appear after 21–60 days of consistent listening. Results vary by individual."
    },
    {
      q: "Is it safe?",
      a: "The Billionaire Brain Wave Program uses non-invasive sound frequencies and is generally safe for healthy adults. However, people with epilepsy, severe mental health conditions, or sensitivity to audio should consult a healthcare professional before use."
    },
    {
      q: "Do I need experience with manifestation or meditation?",
      a: "No. Billionaire Brain Wave program is designed as a plug‑and‑play audio for beginners and experienced manifestors alike. Simply press play and listen."
    },
    {
      q: "Are there any hidden subscriptions?",
      a: "No. It’s a one-time payment for lifetime access with free updates during your offer. You pay once and get permanent access to all materials."
    },
    {
      q: "What if it doesn't work for me?",
      a: "It is covered by our full 90-day money-back guarantee. If you don’t feel it’s worth the investment after giving it an honest try, you can request a full refund with no questions asked."
    }
  ];

  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section style={styles.section}>
      <div className="container">
        <h2 className="text-center" style={styles.title}>Frequently Asked Questions</h2>
        
        <div style={styles.faqList}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={styles.faqItem} onClick={() => toggle(idx)}>
              <div style={styles.question}>
                <strong>{faq.q}</strong>
                <span>{openIdx === idx ? '−' : '+'}</span>
              </div>
              {openIdx === idx && (
                <div style={styles.answer}>
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 0',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: '40px',
  },
  faqList: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  faqItem: {
    borderBottom: '1px solid #e2e8f0',
    padding: '20px 0',
    cursor: 'pointer',
  },
  question: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.2rem',
    color: 'var(--primary)',
  },
  answer: {
    marginTop: '15px',
    fontSize: '1rem',
    color: 'var(--text-main)',
    lineHeight: '1.6',
  }
};

export default FAQSection;
