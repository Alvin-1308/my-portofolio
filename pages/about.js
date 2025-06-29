export default function About() {
  return (
    <main style={{
      minHeight: "100vh",
      padding: "8rem 2rem",
      backgroundColor: "#e7e0d4",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: "800px" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "2rem" }}>
          About Me
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
          Hi, I'm <strong>Pratama Alvin Ahlafi</strong> — a passionate Creative Developer & Designer.
          I love crafting interactive and visually stunning experiences on the web. My mission is to
          bring ideas to life through elegant design and smooth interactions.
        </p>
      </div>
    </main>
  );
}
