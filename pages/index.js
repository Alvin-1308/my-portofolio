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
          gap: "3rem",
          flexWrap: "wrap",
          color: "#222222",
        }}
      >
        {/* Foto Profile */}
        <div
          style={{
            flex: "0 0 250px",
            width: "250px",
            height: "300px",
            borderRadius: "20px", // Ubah jadi kotak dengan rounded
            overflow: "hidden",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)", // Tambah shadow biar lebih keren
            transition: "transform 0.3s",
          }}
          className="profile-photo"
        >
          <Image
            src="/images/profile.jpg"
            alt="Profile Photo"
            width={250}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Keterangan */}
        <div
          style={{
            flex: "1",
            maxWidth: "500px",
            textAlign: "left",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              fontFamily: "'Playfair Display', serif",
              marginBottom: "0.5rem",
            }}
            className="responsive-title"
          >
            Pratama Alvin Ahlafi
          </h1>

          <p
            style={{
              fontSize: "1.3rem",
              fontFamily: "'Playfair Display', serif",
              marginBottom: "1.5rem",
            }}
            className="responsive-subtitle"
          >
            IT Student
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              fontFamily: "'Inter', sans-serif",
              marginBottom: "2rem",
            }}
            className="responsive-desc"
          >
            IT student at President University, passionate about building digital experiences and continuously learning in the field of technology.
          </p>

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
            className="website-title"
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

      <style jsx>{`
        @media (max-width: 768px) {
          main {
            flex-direction: column;
            text-align: center;
          }
          .responsive-title {
            font-size: 2rem;
          }
          .responsive-subtitle {
            font-size: 1.1rem;
          }
          .responsive-desc {
            font-size: 0.95rem;
          }
          .website-title {
            font-size: 2.2rem;
          }
          .profile-photo {
            width: 100% !important;
            height: auto !important;
          }
        }

        .website-title:hover {
          transform: scale(1.05);
          cursor: pointer;
          transition: transform 0.3s;
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
