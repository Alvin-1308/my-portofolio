export default function Skill() {
  return (
    <main style={{
      minHeight: "100vh",
      padding: "8rem 2rem",
      backgroundColor: "#e7e0d4",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div style={{ maxWidth: "1000px", width: "100%" }}>
        <h1 style={{
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "3rem",
        }}>
          Skills
        </h1>
        <div style={{
          display: "grid",
          gap: "3rem",
          gridTemplateColumns: "1fr 1fr",
        }}>
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "1rem" }}>
              Frontend
            </h2>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", lineHeight: "1.8" }}>
              <li>HTML & CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>React & Next.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "1rem" }}>
              Backend & Tools
            </h2>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", lineHeight: "1.8" }}>
              <li>Node.js</li>
              <li>Express</li>
              <li>Git & GitHub</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
