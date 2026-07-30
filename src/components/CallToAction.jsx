import React from "react";
import guaranteeBadge from "../assets/90-days-guarantee.png";

const CallToAction = () => {
  return (
    <section style={styles.section} className="section-alt">
      <div className="container text-center">

        <h2 style={styles.title}>
          Give Your Mind 7 Minutes – Let Billionaire Brain Wave Do the Rest.
        </h2>

        <p style={styles.subtitle}>
          Join thousands using Billionaire Brain Wave to develop better focus,
          confidence, and a more positive mindset.
        </p>

        <div style={styles.box}>

          <div style={styles.ribbon}>
            🔥 LIMITED TIME OFFER
          </div>

          <h3 style={styles.boxTitle}>
            Get Instant Access Today
          </h3>

          <p style={styles.boxText}>
            One-time payment. No monthly subscriptions. Instant digital
            delivery after purchase.
          </p>

          <ul style={styles.list}>
            <li>✔ Full Billionaire Brain Wave Audio Program</li>
            <li>✔ Wealth Building Bonus Pack</li>
            <li>✔ Quick Start Guide</li>
            <li>✔ Lifetime Digital Access</li>
            <li>✔ Free Future Updates</li>
          </ul>

          <div style={styles.priceContainer}>
            <span style={styles.oldPrice}>$199</span>

            <span style={styles.newPrice}>$39</span>

            <div style={styles.save}>
              Save $160 Today
            </div>
          </div>

          <a
            href="https://1eb8cdiazzs2vye8uluwflnkdt.hop.clickbank.net"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.btn,
                      textDecoration: "none",
                      display: "inline-block",
                      textAlign: "center", }}
          >
            
              🚀 Get Instant Access Now
            
          </a>

          <div style={styles.security}>
            🔒 Secure Checkout &nbsp; • &nbsp;
            ⚡ Instant Access &nbsp; • &nbsp;
            ⭐ Trusted Worldwide
          </div>

          <div style={styles.guaranteeBox}>

            <img
              src={guaranteeBadge}
              alt="90 Day Money Back Guarantee"
              style={styles.badge}
            />

            <div>

              <h3 style={styles.guaranteeTitle}>
                90-Day Money Back Guarantee
              </h3>

              <p style={styles.guaranteeText}>
                Try Billionaire Brain Wave completely risk-free. If you're not
                satisfied within 90 days, simply request a full refund.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

const styles = {

  section:{
    padding:"100px 20px",
  },

  title:{
    fontSize:"2.7rem",
    marginBottom:"20px",
    fontWeight:"800",
  },

  subtitle:{
    maxWidth:"700px",
    margin:"0 auto 50px",
    fontSize:"1.2rem",
    lineHeight:"1.8",
    color:"#d4d4d4",
  },

  box:{
    maxWidth:"850px",
    margin:"auto",
    background:"#ffffff",
    borderRadius:"20px",
    padding:"50px",
    boxShadow:"0 30px 80px rgba(0,0,0,.15)",
    position:"relative",
  },

  ribbon:{
    position:"absolute",
    top:"-18px",
    left:"50%",
    transform:"translateX(-50%)",
    background:"#ff4d4d",
    color:"#fff",
    padding:"10px 30px",
    borderRadius:"50px",
    fontWeight:"700",
  },

  boxTitle:{
    fontSize:"2rem",
    marginBottom:"15px",
    color:"#0b1736",
  },

  boxText:{
    fontSize:"18px",
    color:"#555",
    marginBottom:"30px",
  },

  list:{
    listStyle:"none",
    padding:0,
    textAlign:"left",
    maxWidth:"420px",
    margin:"0 auto 40px",
    lineHeight:"2",
    fontSize:"18px",
  },

  priceContainer:{
    marginBottom:"35px",
  },

  oldPrice:{
    textDecoration:"line-through",
    color:"#888",
    fontSize:"28px",
    marginRight:"20px",
  },

  newPrice:{
    color:"#e11d48",
    fontSize:"56px",
    fontWeight:"800",
  },

  save:{
    marginTop:"10px",
    color:"#16a34a",
    fontWeight:"700",
    fontSize:"18px",
  },

  btn:{
    background:"#00bfff",
    color:"#fff",
    border:"none",
    padding:"20px 50px",
    fontSize:"22px",
    fontWeight:"700",
    borderRadius:"12px",
    cursor:"pointer",
    transition:"0.3s",
  },

  security:{
    marginTop:"25px",
    color:"#666",
    fontSize:"15px",
  },

  guaranteeBox:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"30px",
    flexWrap:"wrap",
    marginTop:"50px",
    background:"#f8fafc",
    borderRadius:"18px",
    padding:"25px",
  },

  badge:{
    width:"140px",
  },

  guaranteeTitle:{
    fontSize:"26px",
    color:"#0b1736",
    marginBottom:"10px",
  },

  guaranteeText:{
    maxWidth:"450px",
    color:"#555",
    lineHeight:"1.8",
    textAlign:"left",
  },

};

export default CallToAction;