import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      title: "Software & Tools",
      description:
        "Experienced using Visual Studio Code for coding, Git for version control, Figma for UI design, and other productivity tools to enhance workflow and collaboration.",
      image: "/images/skill1.jpg",
    },
    {
      title: "Design",
      description:
        "Skilled in creating visual content using Canva and basic graphic design principles to deliver impactful and attractive designs quickly and effectively.",
      image: "/images/skill2.jpg",
    },
    {
      title: "3D Modeling",
      description:
        "Basic proficiency in Blender, able to create low-poly models and simple 3D scenes as part of creative explorations and personal projects.",
      image: "/images/skill3.png",
    },
    {
      title: "Web Development",
      description:
        "Proficient in HTML, CSS, JavaScript, React, and Next.js to build responsive, interactive, and visually appealing websites with modern best practices.",
      image: "/images/skill4.jpg",
    },
  ];

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
            SKILLS
          </h1>
        </div>
      </section>

      {/* Loop skills */}
      {skills.map((skill, index) => (
        <section
          key={index}
          style={{
            display: "flex",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            alignItems: "center",
            justifyContent: "center",
            padding: "4rem 2rem",
            flexWrap: "wrap",
            maxWidth: "1400px",
            margin: "0 auto",
            gap: "2rem",
          }}
        >
          {/* Image */}
          <div
            className="skill-image-container"
            style={{
              flex: "0 0 400px",
              width: "400px",
              height: "300px",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
          >
            <Image
              src={skill.image}
              alt={skill.title}
              width={400}
              height={300}
              style={{ objectFit: "cover" }}
              className="skill-image"
            />
          </div>

          {/* Content */}
          <div
            style={{
              flex: 1,
              minWidth: "250px",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                marginBottom: "1rem",
              }}
            >
              {skill.title}
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                textAlign: "justify",
              }}
            >
              {skill.description}
            </p>
          </div>
        </section>
      ))}

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
          section:nth-of-type(n + 2) {
            flex-direction: column !important;
          }
        }

        .skill-image-container {
          transition: transform 0.5s ease;
        }

        .skill-image-container:hover {
          transform: scale(1.05);
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
