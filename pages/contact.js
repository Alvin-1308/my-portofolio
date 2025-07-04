import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

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
          Feel free to send me a message for collaboration, project inquiries,
          or just to say hello!
        </p>

        {submitted ? (
          <p
            style={{
              fontSize: "1.2rem",
              color: "green",
              marginTop: "2rem",
            }}
          >
            ✅ Your message has been sent successfully!
          </p>
        ) : (
          <form
            action="https://formspree.io/f/mpwrepdq"
            method="POST"
            onSubmit={() => setSubmitted(true)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              textAlign: "left",
            }}
          >
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              style={{
                padding: "1rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              style={{
                padding: "1rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              style={{
                padding: "1rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="6"
              style={{
                padding: "1rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "1rem",
                resize: "vertical",
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                backgroundColor: "#222",
                color: "#fff",
                padding: "1rem",
                borderRadius: "5px",
                border: "none",
                fontSize: "1.2rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#444")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#222")}
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </>
  );
}
