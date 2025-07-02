import Link from "next/link";
import { useState, useEffect } from "react";
import gsap from "gsap";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(".overlay", { opacity: 1, pointerEvents: "auto", duration: 0.5 });
    } else {
      gsap.to(".overlay", { opacity: 0, pointerEvents: "none", duration: 0.5 });
    }
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          position: "fixed",
          top: 0,
          width: "98%",
          backgroundColor: "#efe2c6",
          zIndex: 50,
          borderBottom: "1px solid #000",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        <div style={{ fontSize: "0.9rem" }}>Pratama Alvin Ahlafi</div>
        <div style={{ fontWeight: "bold" }}>The Paper Portfolio</div>

        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Overlay menu */}
      <div
        className="overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#111",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 40,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          fontFamily: "'Playfair Display', serif",
          transition: "opacity 0.5s ease",
        }}
      >
        <MenuLink href="/" title="Home" onClick={() => setMenuOpen(false)} />
        <MenuLink href="/portfolio" title="Portfolio" onClick={() => setMenuOpen(false)} />
        <MenuLink href="/about" title="About" onClick={() => setMenuOpen(false)} />
        <MenuLink href="/skill" title="Skills" onClick={() => setMenuOpen(false)} />
        <MenuLink href="/contact" title="Contact" onClick={() => setMenuOpen(false)} />
      </div>

      {/* Burger style */}
      <style jsx>{`
        .burger {
          width: 25px;
          height: 20px;
          position: relative;
          cursor: pointer;
        }
        .burger span {
          background: #000;
          display: block;
          height: 3px;
          width: 100%;
          position: absolute;
          transition: all 0.4s ease;
        }
        .burger span:nth-child(1) {
          top: 0;
        }
        .burger span:nth-child(2) {
          top: 8px;
        }
        .burger span:nth-child(3) {
          top: 16px;
        }
        .burger.open span:nth-child(1) {
          transform: rotate(45deg);
          top: 8px;
        }
        .burger.open span:nth-child(2) {
          opacity: 0;
        }
        .burger.open span:nth-child(3) {
          transform: rotate(-45deg);
          top: 8px;
        }
      `}</style>
    </>
  );
}

function MenuLink({ href, title, onClick }) {
  return (
    <Link href={href} legacyBehavior>
      <a
        onClick={onClick}
        style={{
          color: "#f0eadd",
          fontSize: "4rem",
          textDecoration: "none",
          position: "relative",
          transition: "all 0.3s ease",
        }}
        className="menu-link"
      >
        {title}
        <style jsx>{`
          .menu-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0%;
            height: 4px;
            background-color: #ff4a00;
            transition: width 0.3s ease;
          }
          .menu-link:hover::after {
            width: 100%;
          }
        `}</style>
      </a>
    </Link>
  );
}
