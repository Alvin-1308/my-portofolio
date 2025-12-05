import Head from "next/head";

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience — My Portfolio</title>
        <meta name="description" content="Work experience and internship" />
      </Head>

      <section className="exp-section">

        <div className="container">
          <h1 className="title">Experience</h1>

          {/* ===== card 1 ===== */}
          <div className="exp-box">
            <div className="exp-img-wrapper">
              <img
                src="/images/experience/jsc.webp" 
                alt="JSC Internship"
                className="exp-img"
              />
            </div>
            <div className="exp-text">
              <h2>Cybersecurity Internship — JSC</h2>
              <span className="exp-year">2025</span>
              <p>
                Working with internal ticketing system using OS Ticket, documenting
                incidents, handling IT issues, and learning corporate security posture.
              </p>
            </div>
          </div>

          {/* ===== card 2 ===== */}
          <div className="exp-box">
            <div className="exp-img-wrapper">
              <img
                src="/images/experience/project.webp"
                alt="Personal Projects"
                className="exp-img"
              />
            </div>
            <div className="exp-text">
              <h2>Personal Projects</h2>
              <span className="exp-year">2024</span>
              <p>
                Built a retro portfolio website, full Vercel deployment, Docker basics,
                and Formspree integration for contact form handling.
              </p>
            </div>
          </div>

        </div>

      </section>

      <style jsx>{`
        /* ===== background sama page lain ===== */
        .exp-section {
          min-height: 100vh;
          padding: 120px 0;
          background: url("/textures/bg-dark.webp");
          background-size: cover;
          background-repeat: repeat;
          color: #fff;
        }

        .container {
          width: 85%;
          max-width: 1100px;
          margin: auto;
        }

        .title {
          font-size: 3rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 60px;
          letter-spacing: 2px;
        }

        /* ===== EXPERIENCE CARD ===== */
        .exp-box {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 30px;
          background: rgba(20, 20, 20, 0.85);
          border: 1px solid #333;
          border-radius: 18px;
          padding: 30px;
          margin-bottom: 50px;
        }

        .exp-img-wrapper {
          width: 100%;
          height: 220px;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid #444;
        }

        .exp-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .exp-text h2 {
          font-size: 1.6rem;
          margin-bottom: 8px;
        }

        .exp-year {
          color: #ff4d00;
          font-weight: 700;
          margin-bottom: 14px;
          display: inline-block;
        }

        .exp-text p {
          opacity: 0.85;
          line-height: 1.6;
        }

        @media(max-width: 768px) {
          .exp-box {
            grid-template-columns: 1fr;
          }
          .exp-img-wrapper {
            height: 180px;
          }
        }
      `}</style>
    </>
  );
}
