import React from 'react';
import logo from "../assets/billlionairbrainwavelogo.png";

const Header = () => {
  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        <img 
          src={logo}
          alt="Billionaire Brain Wave Logo" 
          style={styles.logo} 
        />
        <nav style={styles.nav}>
         <a
  href="https://1eb8cdiazzs2vye8uluwflnkdt.hop.clickbank.net"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none" }}
>
  <button style={styles.btnSmall}>
    Order Now →
  </button>
</a>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    background: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(12px)",
    padding: "15px 0",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },


  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    height: "60px",
    width: "auto",
    objectFit: "contain",
    cursor: "pointer",
  },

  nav: {
    display: "flex",
    alignItems: "center",
  },

  btnSmall: {
    background: "#00BFFF",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    padding: "12px 28px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 20px rgba(0,191,255,0.3)",
  },
};

export default Header;
