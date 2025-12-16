import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Experience() {
  const [openCards, setOpenCards] = useState([]);

  const experiences = [
    {
      title: "Intern — JSC",
      year: "2025",
      img: "/images/project4.png",
      shortDesc:
        "Magang sebagai IT Support & Cybersecurity awal 2025. Belajar ticketing system internal, monitoring jaringan, dokumentasi insiden, dan keamanan dasar.",
      longDesc:
        "Selama magang di JSC (2025), saya mempelajari ticketing system menggunakan osTicket, troubleshooting jaringan LAN & WiFi, instalasi software, manajemen akses, serta membuat dokumentasi insiden keamanan dasar. Selain itu saya memahami workflow internal IT support dan praktik dasar cybersecurity.",
    },
    {
      title: "Project Web Portfolio",
      year: "2025",
      img: "/images/project4.png",
      shortDesc:
        "Membangun website portfolio berbasis Next.js, dengan animasi GSAP, deploy menggunakan Vercel.",
      longDesc:
        "Membuat portfolio modern menggunakan Next.js (2025), styling custom dan animasi GSAP, integrasi Formspree, serta deploy di Vercel. Desain terinspirasi pendekatan experimental scrolling.",
    },
    {
      title: "Project Web Portfolio",
      year: "2025",
      img: "/images/project4.png",
      shortDesc:
        "Membangun website portfolio berbasis Next.js, dengan animasi GSAP, deploy menggunakan Vercel.",
      longDesc:
        "Membuat portfolio modern menggunakan Next.js (2025), styling custom dan animasi GSAP, integrasi Formspree, serta deploy di Vercel. Desain terinspirasi pendekatan experimental scrolling.",
    },
    {
      title: "Project Web Portfolio",
      year: "2025",
      img: "/images/project4.png",
      shortDesc:
        "Membangun website portfolio berbasis Next.js, dengan animasi GSAP, deploy menggunakan Vercel.",
      longDesc:
        "Membuat portfolio modern menggunakan Next.js (2025), styling custom dan animasi GSAP, integrasi Formspree, serta deploy di Vercel. Desain terinspirasi pendekatan experimental scrolling.",
    },
    {
      title: "Project Web Portfolio",
      year: "2025",
      img: "/images/project4.png",
      shortDesc:
        "Membangun website portfolio berbasis Next.js, dengan animasi GSAP, deploy menggunakan Vercel.",
      longDesc:
        "Membuat portfolio modern menggunakan Next.js (2025), styling custom dan animasi GSAP, integrasi Formspree, serta deploy di Vercel. Desain terinspirasi pendekatan experimental scrolling.",
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
      <div
        style={{
          minHeight: "100vh",
          paddingTop: "6rem",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        {/* TITLE EXPERIENCE */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto 4rem",
            background: "#222",
            color: "#fff",
            padding: "1rem 3rem",
            fontSize: "4.5rem",
            fontWeight: "bold",
            letterSpacing: "5px",
            textAlign: "center",
          }}
        >
          EXPERIENCE
        </div>

        {/* EXPERIENCE CARDS */}
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
                  background: "#e7dbc8",
                  color: "#3a2f25",
                  padding: "1.5rem",
                  borderRadius: "14px",
                  cursor: "pointer",
                  overflow: "hidden",
                  position: "relative",
                  maxHeight: isOpen ? "950px" : "350px",
                  transform: isOpen ? "scale(1.025)" : "scale(1)",
                  transition:
                    "all 0.6s cubic-bezier(0.25, 1, 0.3, 1)",
                  boxShadow: isOpen
                    ? "0 0 45px rgba(0, 0, 0, 0.45)"
                    : "0 8px 20px rgba(0,0,0,0.35)",
                }}
              >
                {/* stitched border */}
                <div
                  style={{
                    position: "absolute",
                    inset: "8px",
                    border: "2px dashed #5e4b31",
                    borderRadius: "10px",
                    pointerEvents: "none",
                  }}
                />

                {/* IMAGE */}
                <Image
                  src={exp.img}
                  width={1600}
                  height={isOpen ? 420 : 260}
                  alt={exp.title}
                  style={{
                    width: "100%",
                    height: isOpen ? "420px" : "260px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    marginBottom: "1.2rem",
                  }}
                />

                {/* TITLE + YEAR + ICON */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "0.6rem",
                  }}
                >
                  <div>
                    <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
                      {exp.title}
                    </h2>

                    {/* YEAR — GEDE & HILANG SAAT OPEN */}
                    {!isOpen && (
                      <div
                        style={{
                          fontSize: "1.2rem",
                          marginTop: "4px",
                          letterSpacing: "2px",
                          opacity: 0.85,
                        }}
                      >
                        {exp.year}
                      </div>
                    )}
                  </div>

                  <ChevronDown
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.4s ease",
                    }}
                  />
                </div>

                {/* DESCRIPTION */}
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen
                      ? "translateY(0)"
                      : "translateY(10px)",
                    transition: "all 0.5s ease",
                  }}
                >
                  {isOpen ? exp.longDesc : exp.shortDesc}
                </p>

                {/* UNDERLINE */}
                <div
                  style={{
                    marginTop: "1rem",
                    height: "2px",
                    background:
                      "linear-gradient(to right, #000000ff, transparent)",
                    width: isOpen ? "100%" : "0%",
                    transition: "width 0.6s ease",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* MARQUEE — ORIGINAL — TIDAK DISENTUH */}
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
