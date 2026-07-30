import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Remove Money Blocks",
      desc: "Remove hidden money blocks and scarcity beliefs holding you back from your true wealth potential."
    },
    {
      title: "Boost Focus & Creativity",
      desc: "Boost focus, creativity and smart decision-making for business, career or investments."
    },
    {
      title: "Increase Motivation",
      desc: "Increase confidence, motivation and follow-through on wealth-building ideas."
    },
    {
      title: "Heighten Intuition",
      desc: "Heighten intuition so you spot opportunities faster and avoid poor deals."
    },
    {
      title: "Reduce Anxiety",
      desc: "Reduce anxiety and procrastination around finances while feeling calmer and more in control."
    },
    {
      title: "7-Minute Success Ritual",
      desc: "Create a daily success ritual that takes only 7 minutes but can reshape your financial trajectory."
    }
  ];

  return (
    <section style={styles.section} className="section-alt">
      <div className="container">
        <h2 className="text-center" style={styles.sectionTitle}>What Can Billionaire Brain Wave Do for You?</h2>
        <p className="text-center" style={styles.sectionSubtitle}>
          Transform your relationship with money and unlock your brain’s natural wealth-building capabilities.
        </p>

        <div style={styles.grid}>
          {benefits.map((b, idx) => (
            <div key={idx} style={styles.card}>
              <div style={styles.icon}>🧠</div>
              <h3 style={styles.cardTitle}>{b.title}</h3>
              <p style={styles.cardDesc}>{b.desc}</p>
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
  },
  sectionTitle: {
    fontSize: '2.2rem',
    marginBottom: '15px',
  },
  sectionSubtitle: {
    fontSize: '1.1rem',
    color: 'var(--text-light)',
    marginBottom: '50px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  card: {
    backgroundColor: 'var(--background)',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '1.3rem',
    color: 'var(--primary)',
    marginBottom: '15px',
  },
  cardDesc: {
    fontSize: '1rem',
    color: 'var(--text-main)',
  }
};

export default BenefitsSection;
