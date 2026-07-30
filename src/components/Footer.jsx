import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container text-center">
        <ul style={styles.links}>
          <li><a href="#" style={styles.link}>Privacy Policy</a></li>
          <li><a href="#" style={styles.link}>Terms And Conditions</a></li>
          <li><a href="#" style={styles.link}>Refund Policy</a></li>
          <li><a href="#" style={styles.link}>Shipping Info</a></li>
          <li><a href="#" style={styles.link}>Contact Us</a></li>
        </ul>

        <div style={styles.disclaimer}>
          <p><strong>DISCLAIMER:</strong></p>
          <p>The information on this website is for educational purposes only and does not constitute medical, financial, or professional advice. This product has not been evaluated by the FDA and is not intended to diagnose, treat, cure, or prevent any disease.</p>
          <p>Individual results may vary. Testimonials do not represent typical results and are not a guarantee of success. This product does not promise or guarantee financial or income results.</p>
          <p>If you are pregnant, nursing, taking medication, or have a medical or mental health condition, consult a qualified professional before use. Intended for adults 18 years of age or older.</p>
        </div>
        
        <p style={styles.copyright}>© Copyright {new Date().getFullYear()} Billionaire Brain Wave. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'var(--primary-hover)',
    color: 'var(--background-alt)',
    padding: '40px 0 20px 0',
  },
  links: {
    listStyleType: 'none',
    padding: 0,
    margin: '0 0 30px 0',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  link: {
    color: '#cbd5e1',
    textDecoration: 'none',
    fontSize: '0.9rem',
  },
  disclaimer: {
    fontSize: '0.75rem',
    color: '#94a3b8',
    maxWidth: '800px',
    margin: '0 auto 30px auto',
    lineHeight: '1.6',
    textAlign: 'left'
  },
  copyright: {
    fontSize: '0.85rem',
    color: '#64748b',
  }
};

export default Footer;
