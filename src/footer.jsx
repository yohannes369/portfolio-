import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000 !important", // Ensure black background
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
          Connect with Me
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {/* GitHub */}
          <a
            href="https://github.com/yohannes369"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "none", transition: "color 0.3s ease" }}
          >
            <FaGithub
              style={{
                fontSize: "2rem",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yohannes-yeneakal-a3b94034b"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "none", transition: "color 0.3s ease" }}
          >
            <FaLinkedin
              style={{
                fontSize: "2rem",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </a>
       
          {/* Email */}
          <a
            href="yohannesyeneakal6@example.com"
            style={{ color: "#fff", textDecoration: "none", transition: "color 0.3s ease" }}
          >
            <FaEnvelope
              style={{
                fontSize: "2rem",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </a>
          {/* Phone */}
          <a
            href="tel:+251987294511"
            style={{ color: "#fff", textDecoration: "none", transition: "color 0.3s ease" }}
          >
            <FaPhone
              style={{
                fontSize: "2rem",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </a>
        </div>
        {/* Contact Section */}
        <div style={{ marginTop: "30px" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>Contact Me</h3>
          <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
            Email:{" "}
            <a
              href="mailto:your-email@example.com"
              style={{ color: "#fff", textDecoration: "none" }}
            >
        yohannesyeneakal6@example.com
            </a>
          </p>
          <p style={{ fontSize: "1rem" }}>
            Phone:{" "}
            <a href="tel:+1234567890" style={{ color: "#fff", textDecoration: "none" }}>
              +251987294511
            </a>
          </p>
        </div>
        {/* Copyright Notice */}
        <p style={{ fontSize: "1rem", marginTop: "20px", opacity: "0.8" }}>
          &copy; {new Date().getFullYear()}  YENEAKAL All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;