import Head from "next/head";

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience — My Portfolio</title>
        <meta name="description" content="Internship and work experience" />
      </Head>

      <section className="experience-page">
        <div className="container">
          <h1 className="title">Experience</h1>

          <div className="timeline">

            <div className="timeline-item" data-aos="fade-right">
              <div className="timeline-date">2025</div>
              <div className="timeline-content">
                <img
                  src="https://source.unsplash.com/600x400/?cybersecurity,office"
                  alt="Experience"
                  className="exp-img"
                />
                <h2>Cybersecurity Internship – JSC</h2>
                <p>
                  Working on internal ticketing system using OS Ticket, improving
                  documentation, learning security posture in a corporate IT environment,
                  handling user issues, and collaborating with IT teams.
                </p>
              </div>
            </div>

            <div className="timeline-item" data-aos="fade-left">
              <div className="timeline-date">2024</div>
              <div className="timeline-content">
                <img
                  src="https://source.unsplash.com/600x400/?computer,laptop"
                  alt="Experience"
                  className="exp-img"
                />
                <h2>Personal Projects</h2>
                <p>
                  Building a retro-style portfolio, creating web applications using Next.js,
                  Docker basics, Git workflow, Formspree integration, and UI animations.
                </p>
              </div>
            </div>

          </div>
        </div>

      </section>

      <style jsx>{`
        .experience-page {
          padding: 120px 0;
          background: #111;
          color: #fff;
        }

        .container {
          width: 85%;
          max-width: 1200px;
          margin: auto;
        }

        .title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 40px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .timeline {
          position: relative;
          margin-left: 20px;
          border-left: 2px solid #ff4d00;
          padding-left: 40px;
        }

        .timeline-item {
          margin-bottom: 60px;
          position: relative;
        }

        .timeline-date {
          font-size: 1rem;
          font-weight: bold;
          color: #ff4d00;
          margin-bottom: 10px;
        }

        .timeline-content {
          background: #1a1a1a;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #333;
        }

        .exp-img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          margin-bottom: 15px;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        p {
          line-height: 1.6;
          opacity: 0.9;
        }
      `}</style>
    </>
  );
}
