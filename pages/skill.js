import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      title: "Software & Tools",
      description:
        "I use Visual Studio Code as my main code editor to build modern, scalable, and clean applications. Combined with various extensions and developer tools, I ensure my coding workflow is efficient and organized. I also utilize Git for version control, browser developer tools for debugging, and frameworks like React or Next.js to bring dynamic ideas to life.",
      image: "/images/skill1.jpg",
    },
    {
      title: "Design",
      description:
        "I leverage Canva to create visually appealing and user-friendly designs for social media content, presentations, and UI mockups. With a strong sense of composition and color harmony, I can turn ideas into engaging visuals that communicate messages clearly and effectively.",
      image: "/images/skill2.jpg",
    },
    {
      title: "3D Modeling",
      description:
        "I specialize in creating low poly 3D models using Blender, perfect for games, visual assets, and animated projects. My focus is on simplicity and style, transforming complex concepts into clean and eye-catching 3D artworks that are optimized for various platforms.",
      image: "/images/skill3.png",
    },
    {
      title: "Web Development",
      description:
        "I build responsive and interactive websites using modern web technologies like HTML, CSS, and JavaScript, ensuring a seamless user experience across devices. From landing pages to complex web applications, I focus on writing clean code, optimizing performance, and delivering visually pleasing and functional digital products.",
      image: "/images/skill4.jpg",
    },
    {
      title: "Document Creation (Microsoft Word)",
      description:
        "I am proficient in using Microsoft Word to create well-structured documents, reports, proposals, and professional presentations. With attention to detail in formatting and layout, I ensure every document is clear, polished, and visually appealing.",
      image: "/images/skill5.png",
    },
    {
      title: "Kali Linux",
      description:
        "I use Kali Linux for penetration testing and exploring cybersecurity tools. It helps me understand system vulnerabilities, simulate attacks, and strengthen security measures. Through working with Kali Linux, I improved my skills in ethical hacking, network analysis, and overall security awareness.",
      image: "/images/skill6.png",
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
            maxWidth: "1300px",
            margin: "0 auto",
            gap: "2rem",
          }}
        >
          {/* Image */}
          <div
            className="skill-image-container"
            style={{
              flex: "0 0 auto",
              width: "300px",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
          >
            <Image
              src={skill.image}
              alt={skill.title}
              width={400}
              height={250}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
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
          .skill-image-container {
            width: 100% !important;
          }
          .skill-image-container img {
            width: 100% !important;
            height: auto !important;
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
