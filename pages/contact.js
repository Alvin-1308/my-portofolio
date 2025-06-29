export default function Contact() {
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
      <div style={{ maxWidth: "600px" }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}>
          Contact
        </h1>
        <p style={{ fontSize: "1.5rem" }}>
          You can reach me at <br />
          <a href="mailto:pratamaalvinahlafi@gmail.com" style={{ textDecoration: "underline" }}>
            pratamaalvinahlafi@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}
