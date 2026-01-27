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
      shortDesc:
        "Infrastructure, cybersecurity, and enterprise IT environment learning experience.",
      longDesc:
        "During my internship at JSC, I learned and observed the internal working environment, especially in the infrastructure division. I gained an understanding of IT infrastructure management in a professional setting. I also participated in ISO-related meetings and learned about information security practices, including the implementation of Web Application Firewall (WAF). Additionally, I joined the IoT team for field visits to check CCTV systems and sensors at a pump house facility.",
    },
    {
      title: "Coming Soon",
      year: "2027",
      img: "/images/comingsoon.jpg",
      shortDesc: "Something exciting is being prepared.",
      longDesc: "More details will be revealed when the time is right.",
    },
    {
      title: "Coming Soon",
      year: "2027",
      img: "/images/comingsoon.jpg",
      shortDesc: "Another story in progress.",
      longDesc: "Stay tuned for future updates.",
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
        {/* TITLE SECTION — SAME STRUCTURE AS CONTACT */}
        <section
          className="experience-title-section"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "2rem 1rem",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              width: "100%",
              background: "#222",
              color: "#fff",
              textAlign: "center",
              padding: "1rem clamp(1.5rem, 4vw, 3rem)",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2.8rem, 8vw, 6rem)",
                fontWeight: "700",
                margin: 0,
                letterSpacing: "5px",
                wordBreak: "break-word",
              }}
            >
              EXPERIENCE
            </h1>
          </div>
        </section>

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
                maxWidth: "100%",
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
                  fontSize: "1.1rem",
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

      {/* OVERLAY */}
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
            width: "90%",
            maxWidth: "900px",
            background: "#e7dbc8",
            color: "#3a2f25",
            padding: "2rem",
            borderRadius: "18px",
            zIndex: 50,
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
              gap: "1rem",
            }}
          >
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
                {experiences[activeIndex].title}
              </h2>
              <div style={{ opacity: 0.7 }}>
                {experiences[activeIndex].year}
              </div>
            </div>

            {showClose && (
              <X
                onClick={() => setActiveIndex(null)}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            {experiences[activeIndex].longDesc}
          </p>
        </div>
      )}

      {/* MARQUEE — TIDAK DISENTUH */}
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
      `}</style>
    </>
  );
}
