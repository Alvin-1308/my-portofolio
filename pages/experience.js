import { useState } from "react";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  const experiences = [
    {
      title: "Intern — JSC",
      img: "/profile.jpg",
      desc: `Magang sebagai IT Support & Cybersecurity awal 2025. 
             Belajar ticketing system internal (osTicket), monitoring jaringan, 
             praktikum keamanan dasar, serta dokumentasi insiden.`,
    },
    {
      title: "Project Web Portfolio",
      img: "/placeholder.jpg",
      desc: `Membangun website portfolio Next.js dengan hosting Vercel, docker, 
             dan formspree untuk pengiriman pesan.`,
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "#f0eadd",
        paddingTop: "120px",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      {/* TITLE */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "6rem",
          marginBottom: "4rem",
          letterSpacing: "4px",
          fontWeight: "bold",
        }}
      >
        EXPERIENCE
      </h1>

      {/* CARDS */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "2rem",
          padding: "0 4rem 8rem",
        }}
      >
        {experiences.map((exp, index) => (
          <div
            key={index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            style={{
              background: "#1a1a1a",
              border: "1px solid #333",
              borderRadius: "8px",
              width: "320px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              transform: openIndex === index ? "scale(1.05)" : "scale(1)",
            }}
            className="exp-card"
          >
            <img
              src={exp.img}
              alt={exp.title}
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
                borderBottom: "1px solid #333",
              }}
            />

            <div style={{ padding: "1.5rem" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                  color: "#ffce8a",
                }}
              >
                {exp.title}
              </h2>

              {openIndex === index && (
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    opacity: 0.9,
                  }}
                >
                  {exp.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .exp-card:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
