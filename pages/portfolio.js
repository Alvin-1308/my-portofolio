import Link from "next/link";

const projects = [
  { id: 1, title: "Project One", image: "/images/project1.jpg" },
  { id: 2, title: "Project Two", image: "/images/project2.jpg" },
  { id: 3, title: "Project Three", image: "/images/project3.jpg" },
];

export default function Portfolio() {
  return (
    <main style={{
      minHeight: "100vh",
      padding: "8rem 2rem",
      backgroundColor: "#e7e0d4",
    }}>
      <h1 style={{
        textAlign: "center",
        fontSize: "3rem",
        fontWeight: "bold",
        marginBottom: "3rem",
      }}>
        Portfolio
      </h1>
      <div style={{
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        {projects.map((project) => (
          <Link key={project.id} href={`/work/${project.id}`} legacyBehavior>
            <a style={{
              display: "block",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <h2 style={{
                textAlign: "center",
                fontSize: "1.5rem",
                margin: "1rem 0",
              }}>
                {project.title}
              </h2>
            </a>
          </Link>
        ))}
      </div>
    </main>
  );
}
