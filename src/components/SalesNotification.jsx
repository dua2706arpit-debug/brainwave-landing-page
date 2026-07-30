import React, { useState, useEffect } from 'react';
import productImage from "../assets/brainwave-hero.webp.webp";

const salesData = {
  productName: "Billionaire Brain Wave",
  productImage: productImage,
  names: [
    "John M.", "Sarah T.", "Michael R.", "Jennifer L.", "David K.",
    "Emily S.", "Robert P.", "Lisa W.", "James H.", "Maria G."
  ],
  locations: [
    "Texas", "California", "Florida", "New York", "London, UK",
    "Toronto, Canada", "Sydney, Australia", "Chicago, IL", "Houston, TX", "Miami, FL"
  ]
};

const SalesNotification = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', location: '', time: '' });

  useEffect(() => {
    const showNotification = () => {
      const name = salesData.names[Math.floor(Math.random() * salesData.names.length)];
      const location = salesData.locations[Math.floor(Math.random() * salesData.locations.length)];
      const time = Math.floor(Math.random() * 59) + 1 + " minutes ago";
      
      setData({ name, location, time });
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000); // Hide after 5 seconds
    };

    // Initial delay before first popup
    const initialTimeout = setTimeout(showNotification, 3000);

    // Recurring popups
    const interval = setInterval(() => {
      showNotification();
    }, 15000); // Every 15 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.notification} className="fade-in">
      <button style={styles.closeBtn} onClick={() => setVisible(false)}>&times;</button>
      <img src={salesData.productImage} alt="Product" style={styles.image} />
      <div style={styles.content}>
        <div style={styles.name}>{data.name}</div>
        <div style={styles.product}>Purchased {salesData.productName}</div>
        <div style={styles.location}>{data.location}</div>
        <div style={styles.time}>{data.time}</div>
      </div>
    </div>
  );
};

const styles = {
  notification: {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    maxWidth: '320px',
    width: 'calc(100% - 40px)',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    padding: '12px',
    display: 'flex',
    zIndex: 9999,
    fontFamily: 'var(--font-body)',
  },
  closeBtn: {
    position: 'absolute',
    top: '6px',
    right: '8px',
    border: 'none',
    background: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    color: '#888',
  },
  image: {
    width: '60px',
    height: '60px',
    borderRadius: '6px',
    objectFit: 'cover',
    flexShrink: 0,
  },
  content: {
    flex: 1,
    marginLeft: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: { fontSize: '13px', color: '#666' },
  product: { fontSize: '14px', fontWeight: '600', color: '#333' },
  location: { fontSize: '12px', color: '#888' },
  time: { fontSize: '11px', color: '#999' }
};

export default SalesNotification;
