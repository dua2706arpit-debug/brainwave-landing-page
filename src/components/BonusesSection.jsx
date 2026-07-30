import React from 'react';
import rockefeller from "../assets/bonuses/rockefeller-pyramicom.webp";
import millionaire from "../assets/bonuses/lazy habits.webp";
import quickCash from "../assets/bonuses/quick-cash-manifestatiocom.webp";
import successStories from "../assets/bonuses/success-story.webp";

const BonusesSection = () => {
  const bonuses = [
  {
    title: "Free Bonus #1: The Rockefeller Pyramid",
    desc: "Shows practical wealth-building principles focused on long-term financial habits and smart decision-making.",
    value: "$69.95",
    image: rockefeller,
  },
  {
    title: "Free Bonus #2: The 7 Lazy Millionaire Habits",
    desc: "Learn simple daily habits that successful people use to improve focus, productivity, and financial discipline.",
    value: "$69.95",
    image: millionaire,
  },
  {
    title: "Free Bonus #3: Quick Cash Manifestation",
    desc: "Includes additional guided audio sessions designed to encourage positive thinking and financial motivation.",
    value: "$69.95",
    image: quickCash,
  },
  {
    title: "Free Bonus #4: Success Stories Collection",
    desc: "Read inspiring experiences shared by users about their mindset improvements and personal growth journey.",
    value: "$69.95",
    image: successStories,
  },
];

  return (
    <section style={styles.section} className="section-alt">
      <div className="container">
        <h2 className="text-center" style={styles.title}>Billionaire Brain Wave Bonuses!</h2>
        
        <div style={styles.grid}>
          {bonuses.map((b, idx) => (
            <div key={idx} style={styles.card}>
              <img src={b.image} alt={b.title} style={styles.image} />
              <h3 style={styles.cardTitle}>{b.title}</h3>
              <p style={styles.cardDesc}>{b.desc}</p>
              <div style={styles.value}>Value: {b.value}</div>
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
  title: {
    fontSize: '2.5rem',
    marginBottom: '40px',
    color: 'var(--primary)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '8px',
  },
  cardTitle: {
    fontSize: '1.4rem',
    color: 'var(--text-main)',
    marginBottom: '15px',
  },
  cardDesc: {
    fontSize: '1rem',
    color: 'var(--text-light)',
    marginBottom: '15px',
    lineHeight: '1.5',
  },
  value: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: 'var(--secondary)',
  }
};

export default BonusesSection;
