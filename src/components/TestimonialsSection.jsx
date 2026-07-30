import React from 'react';
import willieImg from "../assets/testimonials/whilecom.webp";
import jamesImg from "../assets/testimonials/jamecom.webp";
import margoImg from "../assets/testimonials/margo-com.webp";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Willie A.",
      location: "Portland, OR",
      text: "“At first, I expected quick results. Over time, I realized the Billionaire Brain Wave program works more as a mental support tool. It helps me stay consistent, think clearly, and approach my goals with patience.”",
      image: willieImg,
    },
    {
      name: "James Thompson",
      location: "Austin, TX",
      text: "“I use the Billionaire Brain Wave program daily in a quiet room. It helps me relax before a busy schedule. I do not see it as a money tool, but it supports my mindset and helps reduce daily stress.”",
      image: jamesImg,
    },
    {
      name: "Margo D.",
      location: "Miami, FL",
      text: "“I listen to the Billionaire Brain Wave program before important work tasks. It helps me feel calm and less distracted. The effect is subtle, but my focus feels better after regular use.”",
      image: margoImg,
    }
  ];

  return (
    <section style={styles.section}>
      <div className="container">
        <h2 className="text-center" style={styles.title}>Billionaire Brain Wave Reviews</h2>
        <p className="text-center" style={styles.subtitle}>
          Join thousands who have transformed their relationship with money and success by using Billionaire Brain Wave.
        </p>

        <div style={styles.grid}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card" style={styles.card}>
              <div style={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p style={styles.text}>{t.text}</p>
              <div style={styles.authorContainer}>
                <img src={t.image} alt={t.name} style={styles.avatar} />
                <div style={styles.author}>
                  <strong>{t.name}</strong> <br/>
                  <span style={styles.location}>{t.location}</span>
                </div>
              </div>
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
    backgroundColor: 'var(--background)',
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: '15px',
  },
  subtitle: {
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
  background: "#ffffff",
  borderRadius: "20px",
  padding: "35px",
  boxShadow: "0 20px 45px rgba(0,0,0,.08)",
  border: "1px solid #edf2f7",
  transition: "all .35s ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  cursor: "pointer",
},
  stars: {
  color: "#FFD700",
  fontSize: "24px",
  marginBottom: "18px",
  letterSpacing: "3px",
},
  text: {
    fontSize: '1.05rem',
    fontStyle: 'italic',
    color: 'var(--text-main)',
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  authorContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  avatar: {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "4px solid #00BFFF",
  boxShadow: "0 10px 25px rgba(0,191,255,.35)",
  flexShrink: 0,
},
 author: {
  fontSize: "16px",
  color: "#0f172a",
  fontWeight: "700",
},
 location: {
  color: "#64748b",
  fontSize: "14px",
},
};

export default TestimonialsSection;
