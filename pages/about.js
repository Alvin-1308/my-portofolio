export default function About() {
  return (
    <>
      {/* Section judul besar */}
      <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "2rem 1rem",
          paddingTop: "120px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            padding: "0 2rem",
            backgroundColor: "#222",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "6rem",
              fontWeight: "700",
              fontFamily: "'Playfair Display', serif",
              margin: 0,
            }}
          >
            ABOUT ME
          </h1>
        </div>
      </section>

      {/* Section konten */}
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "4rem 2rem",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "2rem",
        }}
      >
        {/* Foto */}
        <div
          style={{
            width: "270px",
            height: "300px",
            backgroundColor: "#ccc",
            borderRadius: "10px",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <img
            src="/images/profile.jpg"
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Deskripsi */}
        <div
          style={{
            flex: 1,
            minWidth: "250px",
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
            lineHeight: "1.7",
          }}
        >
          <p>
            Hello! I'm Pratama Alvin Ahlafi, an IT student at President University with a passion for creating interactive and visually captivating digital experiences. I enjoy exploring the intersection of design and technology, and I love to continuously learn and improve my skills in web development, UI/UX, and creative coding.
          </p>
          <br />
          <p>My main concentration is in Cyber Security, where I focus on building secure and reliable systems to protect users and data. However, my interests don’t stop there — I also have a strong foundation in design, web development, and 3D modeling. These diverse skills allow me to approach every project from both a creative and technical perspective, delivering solutions that are not only secure but also visually engaging and user-friendly.</p>
          <p>
           My goal is to create impactful and elegant digital experiences that combine security, functionality, and aesthetics. Let’s build something amazing together!
          </p>
        </div>
      </section>

      {/* Section motivational words */}
      <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "2rem 1rem",
          marginTop: "4rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            padding: "0 2rem",
            backgroundColor: "#222",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "700",
              fontFamily: "'Playfair Display', serif",
              margin: 0,
            }}
          >
            MOTIVATIONAL WORDS
          </h1>
        </div>
      </section>

      <section
        style={{
          maxWidth: "800px",
          margin: "2rem auto",
          padding: "0 2rem",
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.3rem",
          lineHeight: "1.8",
          textAlign: "center",
        }}
      >
        <p>
          "Money is just a reward, but passion and hard work are the true investments that always pay the highest interest."
        </p>
      </section>

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
          section h1 {
            font-size: 3rem;
          }
          section:nth-of-type(2) {
            flex-direction: column;
            align-items: center;
          }
          section:nth-of-type(2) div {
            width: 100% !important;
          }
        }
      `}</style>
    </>
  );
}
