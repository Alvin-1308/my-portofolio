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
      <div
        style={{
          minHeight: "100vh",
          paddingTop: "6rem",
          fontFamily: "'Playfair Display', serif",
        }}
      >
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
                  borderRadius: "14px",
                  cursor: "pointer",
                  overflow: "hidden",

                  willChange: "width, max-height, transform, box-shadow",

                  transition: `
                    width 0.6s cubic-bezier(0.25, 1, 0.3, 1),
                    max-height 0.65s cubic-bezier(0.25, 1, 0.3, 1),
                    transform 0.55s cubic-bezier(0.25, 1, 0.3, 1),
                    box-shadow 0.65s ease
                  `,

                  boxShadow: isOpen
                    ? "0 0 45px rgba(255,180,80,0.45)"
                    : "0 8px 20px rgba(0,0,0,0.35)",
                  transform: isOpen ? "scale(1.025)" : "scale(1)",
                  border: isOpen
                    ? "1px solid rgba(255,200,120,0.35)"
                    : "1px solid transparent",

                  maxHeight: isOpen ? "950px" : "350px",
                }}
              >
                {/* IMAGE */}
                <Image
                  src={exp.img}
                  width={1600}
                  height={isOpen ? 420 : 260}
                  alt={exp.title}
                  style={{
                    borderRadius: "12px",
                    marginBottom: "1.2rem",
                    objectFit: "cover",
                    width: "100%",
                    height: isOpen ? "420px" : "260px",

                    willChange: "height, filter",
                    transition: `
                      height 0.65s cubic-bezier(0.25, 1, 0.3, 1),
                      filter 0.4s ease
                    `,
                    filter: isOpen ? "brightness(105%)" : "brightness(95%)",
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
                  <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
                    {exp.title}
                  </h2>

                  <ChevronDown
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.55s cubic-bezier(0.25, 1, 0.3, 1)",
                    }}
                  />
                </div>

                {/* DESCRIPTION */}
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    opacity: isOpen ? 1 : 0,
                    transition: `opacity 0.5s ease ${isOpen ? "0.1s" : "0s"}, transform 0.5s ease`,
                    transform: isOpen ? "translateY(0)" : "translateY(10px)",
                    paddingBottom: isOpen ? "0.5rem" : "0",
                  }}
                >
                  {isOpen ? exp.longDesc : exp.shortDesc}
                </p>

                {/* UNDERLINE */}
                <div
                  style={{
                    marginTop: "1rem",
                    height: "2px",
                    background: "linear-gradient(to right, #eec78a, transparent)",
                    width: isOpen ? "100%" : "0%",
                    transition: "width 0.6s cubic-bezier(0.25, 1, 0.3, 1) 0.15s",
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BOTTOM MARQUEE */}
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
