import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
          gap: "3rem",
          maxWidth: "1100px",
          margin: "0 auto",
          flexWrap: "wrap",
        }}
      >
        {/* POSTER */}
        <div className="wanted-container">
          <div className={mounted ? "poster animate" : "poster"}>
            <Image
              src="/images/wanted.png"
              width={450}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        {/* TEKS */}
        <div
          className={mounted ? "text show" : "text"}
          style={{ maxWidth: "500px", textAlign: "left" }}
        >
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "700",
              fontFamily: "'Playfair Display', serif",
              marginBottom: "0.5rem",
              lineHeight: "1.2",
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
              fontFamily: "'Inter', sans-serif",
              marginBottom: "2rem",
            }}
          >
            IT student at President University, passionate about building
            digital experiences and continuously learning in the field of
            technology.
          </p>

          <h2
            style={{
              fontSize: "2.5rem",
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

      <style jsx>{`
        /* POSTER WRAPPER */
        .wanted-container {
          width: 450px;
          height: 600px;
        }

        /* default */
        .poster {
          opacity: 0;
          transform: rotate(-720deg) scale(0.3) translateY(-100px);
          filter: blur(8px);
        }

        /* ANIMASI BARU — SUPER SMOOTH */
        .poster.animate {
          animation: posterDrop 1.2s ease-out forwards;
        }

        @keyframes posterDrop {
          0% {
            opacity: 0;
            transform: rotate(-720deg) scale(0.3) translateY(-120px);
            filter: blur(10px);
          }
          40% {
            opacity: 1;
            transform: rotate(-360deg) scale(0.7) translateY(10px);
            filter: blur(4px);
          }
          100% {
            transform: rotate(0deg) scale(1) translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }

        /* TEKS ANIMASI */
        .text {
          opacity: 0;
          transform: translateY(20px);
        }

        .text.show {
          animation: textFade 0.9s ease forwards;
          animation-delay: 1.25s; /* setelah poster selesai */
        }

        @keyframes textFade {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </>
  );
}
