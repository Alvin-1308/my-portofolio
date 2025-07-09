import { useState, useEffect } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaText, setCaptchaText] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    setCaptchaText(generateCaptcha());
  }, []);

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let captcha = "";
    for (let i = 0; i < 5; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  };

  const handleRefresh = () => {
    if (isRotating) return;

    setCaptchaText(generateCaptcha());
    setCaptchaInput("");
    setIsRotating(true);

    setTimeout(() => {
      setIsRotating(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (captchaInput !== captchaText) {
      alert("Captcha incorrect. Please try again.");
      setCaptchaText(generateCaptcha());
      setCaptchaInput("");
      return;
    }

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
          setCaptchaText(generateCaptcha());
          setCaptchaInput("");
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          alert("Oops! There was a problem submitting your form.");
        }
      })
      .catch(() => {
        alert("Oops! There was a problem submitting your form.");
      })
      .finally(() => {
        setTimeout(() => {
         setLoading(false);
     }, 500); 
});
  };

  return (
    <>
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

      <section
        style={{
          padding: "4rem 1rem",
          maxWidth: "600px",
          margin: "0 auto",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "1rem", textAlign: "center" }}>✉️</div>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginBottom: "1rem", textAlign: "center" }}>
          Let's get in touch
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "2rem", textAlign: "center" }}>
          Feel free to send me a message for collaboration, project inquiries, or just to say hello!
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {submitted && <div className="notif-success">✅ Your message has been sent!</div>}

          <input type="text" name="fullName" placeholder="Full Name" required style={inputStyle} />
          <input type="email" name="email" placeholder="Email Address" required style={inputStyle} />
          <input type="text" name="subject" placeholder="Subject" required style={inputStyle} />
          <textarea name="message" placeholder="Your Message" required rows="6" style={{ ...inputStyle, resize: "vertical" }}></textarea>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <div
              style={{
                background: "repeating-linear-gradient(45deg, #eee, #eee 10px, #ddd 10px, #ddd 20px)",
                padding: "0.8rem 1.2rem",
                fontSize: "1.5rem",
                fontWeight: "bold",
                letterSpacing: "4px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                userSelect: "none",
              }}
            >
              {captchaText}
            </div>

            <button
              type="button"
              onClick={handleRefresh}
              disabled={isRotating}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: isRotating ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                padding: "0.3rem",
              }}
              className={isRotating ? "refresh-btn rotating" : "refresh-btn"}
              title="Refresh Captcha"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.13-3.36L23 10"></path>
                <path d="M20.49 15a9 9 0 0 1-14.13 3.36L1 14"></path>
              </svg>
            </button>
          </div>

          <input
            type="text"
            placeholder="Enter the text above"
            required
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            style={inputStyle}
          />

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
                <span>Sending...</span>
                <span className="loader" />
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

        .refresh-btn svg {
          transition: transform 0.5s ease;
        }

        .refresh-btn.rotating svg {
          transform: rotate(360deg);
        }

        @media (max-width: 768px) {
          section h1 {
            font-size: 3rem;
          }
        }
      `}</style>
    </>
  );
}

const inputStyle = {
  padding: "1rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  width: "100%",
};
