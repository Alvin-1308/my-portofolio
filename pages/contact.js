export default function Contact() {
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
            CONTACT
          </h1>
        </div>
      </section>

      {/* Section konten */}
      <section
        style={{
          padding: "5rem 2rem",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        <div
          style={{
            fontSize: "4rem",
            marginBottom: "1rem",
          }}
        >
          ✉️
        </div>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          Let's get in touch
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "2rem",
          }}
        >
          Feel free to reach me via email for collaboration, project inquiries,
          or just to say hello!
        </p>
        <a
          href="mailto:pratama.ahlafi@student.president.ac.id"
          style={{
            fontSize: "1.5rem",
            color: "#fff",
            backgroundColor: "#222",
            padding: "0.7rem 1.5rem",
            textDecoration: "none",
            borderRadius: "5px",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#444")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#222")}
        >
          pratama.ahlafi@student.president.ac.id
        </a>
      </section>
    </>
  );
}
