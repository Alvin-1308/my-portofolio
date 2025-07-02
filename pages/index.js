import Image from "next/image";

export default function Home() {
  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          padding: "5rem 2rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "left",
          position: "relative",
          color: "#222222",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Foto Profile */}
        <div
          style={{
            width: "260px",
            height: "300px",
            borderRadius: "15px",
            overflow: "hidden",
            flexShrink: 0,
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Profile Photo"
            width={260}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Konten */}
        <div>
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "700",
              fontFamily: "'Playfair Display', serif",
              marginBottom: "0.5rem",
            }}
          >
            Hi! I'm Pratama Alvin Ahlafi
          </h1>

          <p
            style={{
              fontSize: "1.5rem",
              fontFamily: "'Playfair Display', serif",
              marginBottom: "1rem",
            }}
          >
            IT Student
          </p>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.6",
              maxWidth: "500px",
              fontFamily: "'Inter', sans-serif",
              marginBottom: "2rem",
            }}
          >
            IT student at President University, passionate about building digital experiences and continuously learning in the field of technology.
          </p>

          {/* Teks besar Website Portfolio tanpa hover */}
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              fontFamily: "'Playfair Display', serif",
              backgroundColor: "#222",
              color: "#fff",
              padding: "0.5rem 1rem",
              display: "inline-block",
            }}
          >
            Website Portfolio
          </h2>
        </div>
      </main>

      {/* Animasi berjalan bawah */}
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

      {/* CSS tambahan */}
      <style jsx>{`
        @media (max-width: 768px) {
          main {
            flex-direction: column;
            text-align: center;
          }
          h1 {
            font-size: 2rem !important;
          }
          p {
            font-size: 1rem !important;
          }
          h2 {
            font-size: 2rem !important;
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-text {
          display: inline-block;
          padding: 1rem;
          font-size: 2rem;
          font-weight: bold;
          font-family: 'Playfair Display', serif;
          animation: marquee 10s linear infinite;
        }

        .marquee-text:hover {
          animation-play-state: paused;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
