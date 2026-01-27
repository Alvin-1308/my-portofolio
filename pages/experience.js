import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, X } from "lucide-react";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showClose, setShowClose] = useState(false);

  useEffect(() => {
    if (activeIndex !== null) {
      setShowClose(false);
      const timer = setTimeout(() => setShowClose(true), 2500);
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  const experiences = [
    {
      title: "Intern — JSC",
      year: "2025",
      img: "/images/internjsc.jpeg",
      shortDesc: "Infrastructure, cybersecurity, and enterprise IT environment learning experience.",
      longDesc:
        "During my internship at JSC, I learned and observed the internal working environment, especially in the infrastructure division. I gained an understanding of IT infrastructure management in a professional setting. I also participated in ISO-related meetings and learned about information security practices, including the implementation of Web Application Firewall (WAF). Additionally, I joined the IoT team for field visits to check CCTV systems and sensors at a pump house facility.",
    },
    {
      title: "Coming soon",
      year: "To Be Continued…",
      img: "/images/comingsoon.jpg",
      shortDesc: "New project in progress.",
      longDesc: "Details will be available soon.",
    },
    {
      title: "Coming soon",
      year: "To Be Continued…",
      img: "/images/comingsoon.jpg",
      shortDesc: "New project in progress.",
      longDesc: "Details will be available soon.",
    },
  ];

  return (
    <>
      {/* PAGE */}
      <div
        style={{
          minHeight: "100vh",
          paddingTop: "6rem",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        {/* TITLE */}
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

        {/* CARDS */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            justifyContent: "center",
            padding: "2rem",
            flexWrap: "wrap",
          }}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                width: "380px",
                background: "#e7dbc8",
                color: "#3a2f25",
                padding: "1.5rem",
                borderRadius: "14px",
                cursor: "pointer",
                position: "relative",
                boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
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

              <Image
                src={exp.img}
                width={1200}
                height={260}
                alt={exp.title}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginBottom: "1.2rem",
                }}
              />

              <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
                {exp.title}
              </h2>

              <div
                style={{
                  fontSize: "1.2rem",
                  opacity: 0.8,
                  letterSpacing: "2px",
                }}
              >
                {exp.year}
              </div>

              <ChevronDown style={{ marginTop: "0.6rem" }} />
            </div>
          ))}
        </div>
      </div>

      {/* OVERLAY (NO CLICK CLOSE) */}
      {activeIndex !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(6px)",
            zIndex: 40,
          }}
        />
      )}

      {/* MODAL */}
      {activeIndex !== null && (
        <div
          style={{
            position: "fixed",
            top: "54%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "88%",
            maxWidth: "900px",
            background: "#e7dbc8",
            color: "#3a2f25",
            padding: "2rem",
            borderRadius: "18px",
            zIndex: 50,
            fontFamily: "'Playfair Display', serif",
            boxShadow: "0 25px 70px rgba(0,0,0,0.55)",
            animation: "fadeInScale 0.5s ease",
          }}
        >
          <Image
            src={experiences[activeIndex].img}
            width={1400}
            height={360}
            alt=""
            style={{
              width: "100%",
              height: "360px",
              objectFit: "cover",
              borderRadius: "14px",
              marginBottom: "1.5rem",
            }}
          />

          {/* HEADER */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "bold" }}>
                {experiences[activeIndex].title}
              </h2>
              <div style={{ opacity: 0.7 }}>
                {experiences[activeIndex].year}
              </div>
            </div>

            {showClose && (
              <X
                onClick={() => setActiveIndex(null)}
                style={{
                  cursor: "pointer",
                  animation: "fadeInClose 0.4s ease",
                }}
              />
            )}
          </div>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            {experiences[activeIndex].longDesc}
          </p>
        </div>
      )}

      {/* MARQUEE — ORIGINAL (DIKEMBALIKAN FULL) */}
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

      {/* ANIMATIONS */}
      <style jsx global>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translate(-50%, -48%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes fadeInClose {
          from {
            opacity: 0;
            transform: scale(0.6);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
