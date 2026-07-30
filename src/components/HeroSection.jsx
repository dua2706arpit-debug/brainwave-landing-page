import React from 'react';
const AFFILIATE_LINK = "https://1eb8cdiazzs2vye8uluwflnkdt.hop.clickbank.net";
export default function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-left">

        <div className="hero-badge">
          ⭐⭐⭐⭐⭐ Trusted by 67,000+ Customers
        </div>

        <h1>
          Billionaire
          <span>Brain Wave™</span>
        </h1>

        <h2>
          Rewire Your Mind for
          <br />
          Wealth, Success & Abundance
        </h2>

        <p>
          Discover a simple daily audio experience designed to help improve
          focus, confidence and success-oriented thinking through guided
          listening.
        </p>

        <div className="hero-list">

          <div>✔ 7-Minute Daily Audio</div>

          <div>✔ Instant Digital Access</div>

          <div>✔ 90-Day Money Back Guarantee</div>

        </div>

        <a
          href={AFFILIATE_LINK}
          className="hero-btn"
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
        >
          Get Instant Access →
        </a>

        <div className="trust">

          <span>🔒 Secure Checkout</span>

          <span>⚡ Instant Download</span>

          <span>⭐ 90-Day Guarantee</span>

        </div>

      </div>

      <div className="hero-right">

        <div className="glow"></div>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer sponsored nofollow"
        >

        <img
          src="/brainwave.webp"
          alt="Billionaire Brain Wave"
           width="650"
           height="650"
           loading="eager"
           fetchPriority="high"
           decoding="async"
        />
        </a>

      </div>

    </section>
  );
}

const styles = {
  heroSection: {
    padding: '60px 0',
    backgroundColor: 'var(--background)',
  },
  headline: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  subHeadlineHighlight: {
    color: 'var(--accent)',
    fontSize: '2rem',
  },
  paragraph: {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto 30px auto',
    color: 'var(--text-main)',
  },
  heroImage: {
    width: "100%",
    maxWidth: "700px",
    height: "auto",
    display: "block",
    margin: "40px auto",
    borderRadius: "20px",
    filter: "drop-shadow(0 30px 80px rgba(0,180,255,.35))",
    animation: none,
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: '0 auto 40px auto',
    maxWidth: '600px',
    textAlign: 'left',
    fontSize: '1.1rem',
    fontWeight: '500',
    color: 'var(--text-main)',
    lineHeight: '1.8'
  },
  videoContainer: {
    maxWidth: '800px',
    margin: '0 auto 40px auto',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  videoPlaceholder: {
    width: '100%',
    paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
    backgroundColor: '#000',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    cursor: 'pointer',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80px',
    height: '80px',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '30px',
    transition: 'background-color 0.3s',
  },
  ctaButton: {
    fontSize: '1.5rem',
    padding: '20px 50px',
    marginBottom: '15px',
  },
  rating: {
    fontSize: '1.1rem',
    color: 'var(--text-light)',
    fontWeight: '600'
  }
};


