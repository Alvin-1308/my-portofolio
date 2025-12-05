import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Experience() {
  const [openCards, setOpenCards] = useState([]);

  const experiences = [
    {
      title: "Intern — JSC",
      img: "/images/project4.png",
      shortDesc:
        "Magang sebagai IT Support & Cybersecurity awal 2025. Belajar ticketing system internal, monitoring jaringan, dokumentasi insiden, dan keamanan dasar.",
      longDesc:
        "Selama magang di JSC (2025), saya mempelajari ticketing system menggunakan osTicket, troubleshooting jaringan LAN & WiFi, instalasi software, manajemen akses, serta membuat dokumentasi insiden keamanan dasar. Selain itu saya memahami workflow internal IT support dan praktik dasar cybersecurity.",
    },
    {
      title: "Project Web Portfolio",
      img: "/images/project4.png",
      shortDesc:
        "Membangun website portfolio berbasis Next.js, dengan animasi GSAP, deploy menggunakan Vercel.",
      longDesc:
        "Membuat portfolio modern menggunakan Next.js, styling custom dan animasi GSAP, integrasi Formspree, serta deploy di Vercel. Desain terinspirasi pendekatan experimental scrolling.",
    },
    {
      title: "Project Web Portfolio",
      img: "/images/project4.png",
      shortDesc:
        "Membangun website portfolio berbasis Next.js, dengan animasi GSAP, deploy menggunakan Vercel.",
      longDesc:
        "Membuat portfolio modern menggunakan Next.js, styling custom dan animasi GSAP, integrasi Formspree, serta deploy di Vercel. Desain terinspirasi pendekatan experimental scrolling.",
    },
    {
      title: "Project Web Portfolio",
      img: "/images/project4.png",
      shortDesc:
        "Membangun website portfolio berbasis Next.js, dengan animasi GSAP, deploy menggunakan Vercel.",
      longDesc:
        "Membuat portfolio modern menggunakan Next.js, styling custom dan animasi GSAP, integrasi Formspree, serta deploy di Vercel. Desain terinspirasi pendekatan experimental scrolling.",
    },
    {
      title: "Project Web Portfolio",
      img: "/images/project4.png",
      shortDesc:
        "Membangun website portfolio berbasis Next.js, dengan animasi GSAP, deploy menggunakan Vercel.",
      longDesc:
        "Membuat portfolio modern menggunakan Next.js, styling custom dan animasi GSAP, integrasi Formspree, serta deploy di Vercel. Desain terinspirasi pendekatan experimental scrolling.",
    },
  ];

  const handleClick = (index) => {
    if (openCards.includes(index)) {
      setOpenCards(openCards.filter((i) => i !== index));
    } else {
      setOpenCards([...openCards, index]);
    }
  };

  return (
    <>
      {/* ===== MAIN SECTION ===== */}
      <div
        style={{
          minHeight: "100vh",
          paddingTop: "6rem",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        {/* ===== TITLE ===== */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto 4rem",
            background: "#111",
            color: "#f0eadd",
            padding: "1rem 3rem",
            fontSize: "4.5rem",
            fontWeight: "bold",
            letterSpacing: "5px",
            border: "2px solid #222",
            textAlign: "center",
          }}
        >
          EXPERIENCE
        </div>

        {/* ===== CARDS ===== */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          {experiences.map((exp, index) => {
            const isOpen = openCards.includes(index);

            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                style={{
                  width: isOpen ? "90%" : "400px",
                  maxWidth: "1000px",
                  background: "#111",
                  color: "#eec78a",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "all 0.45s ease",
                  boxShadow: isOpen
                    ? "0 0 35px rgba(255,180,80,0.4)"
                    : "0 6px 18px rgba(0,0,0,0.4)",
                  transform: isOpen ? "scale(1.02)" : "scale(1)",
                  overflow: "hidden",
                  border: isOpen
                    ? "1px solid rgba(255,200,120,0.35)"
                    : "1px solid transparent",
                }}
              >
                {/* IMAGE */}
                <Image
                  src={exp.img}
                  width={800}
                  height={isOpen ? 380 : 260}
                  alt={exp.title}
                  style={{
                    borderRadius: "12px",
                    marginBottom: "1.2rem",
                    objectFit: "cover",
                    width: "100%",
                    height: isOpen ? "380px" : "260px",
                    transition: "all 0.4s ease",
                  }}
                />

                {/* TITLE + ICON */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.6rem",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                    }}
                  >
                    {exp.title}
                  </h2>

                  <ChevronDown
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>

                {/* DESC */}
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    opacity: isOpen ? 1 : 0.85,
                    transition: "all 0.4s ease",
                    transform: isOpen
                      ? "translateY(0px)"
                      : "translateY(2px)",
                  }}
                >
                  {isOpen ? exp.longDesc : exp.shortDesc}
                </p>

                {/* UNDERLINE ANIMATION */}
                <div
                  style={{
                    marginTop: "1rem",
                    height: "2px",
                    background: "linear-gradient(to right, #eec78a, transparent)",
                    width: isOpen ? "100%" : "0%",
                    transition: "width 0.45s ease",
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== BOTTOM MARQUEE TETAP SAMA ===== */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          whiteSpace: "nowrap",
          borderTop: "1px solid #222",
          borderBottom: "1px solid #222",
        }}
      >
        <p className="marquee-text">
          <a
            href="/contact"
            style={{
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "#222",
              padding: "0.3rem 0.6rem",
              display: "inline-block",
            }}
          >
            EMAIL ME
          </a>{" "}
          • LET'S CREATE SOMETHING TOGETHER •{" "}
          <a
            href="/contact"
            style={{
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "#222",
              padding: "0.3rem 0.6rem",
              display: "inline-block",
            }}
          >
            EMAIL ME
          </a>{" "}
          • LET'S CREATE SOMETHING TOGETHER •{" "}
          <a
            href="/contact"
            style={{
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "#222",
              padding: "0.3rem 0.6rem",
              display: "inline-block",
            }}
          >
            EMAIL ME
          </a>{" "}
          • LET'S CREATE SOMETHING TOGETHER •
        </p>
      </div>
    </>
  );
}
