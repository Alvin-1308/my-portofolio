import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/mpwrepdq", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          alert("Oops! There was a problem submitting your form.");
        }
      })
      .catch(() => {
        alert("Oops! There was a problem submitting your form.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

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

      {/* Section form */}
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

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            textAlign: "left",
            position: "relative",
          }}
        >
          {submitted && (
            <div className="notif-success">✅ Your message has been sent!</div>
          )}

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
            disabled={loading}
            style={{
              backgroundColor: loading ? "#555" : "#222",
              color: "#fff",
              padding: "1rem",
              borderRadius: "5px",
              border: "none",
              fontSize: "1.2rem",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background-color 0.3s",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
            onMouseOver={(e) => {
              if (!loading) e.target.style.backgroundColor = "#444";
            }}
            onMouseOut={(e) => {
              if (!loading) e.target.style.backgroundColor = "#222";
            }}
          >
            {loading ? (
              <>
                Sending...
                <span className="loader"></span>
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </section>

      <style jsx>{`
        .notif-success {
          background-color: green;
          color: white;
          padding: 0.8rem;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: bold;
          text-align: center;
          animation: fadeInScale 0.5s ease forwards;
        }

        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .loader {
          width: 16px;
          height: 16px;
          border: 3px solid #fff;
          border-top: 3px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
