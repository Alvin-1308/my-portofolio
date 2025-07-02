import { useRouter } from "next/router";

export default function WorkDetail() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main
      style={{
        backgroundColor: "#f4eee4",
        color: "#111",
        minHeight: "100vh",
        padding: "3rem 2rem",
        fontFamily: "serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Project {slug}
      </h1>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "1.2rem",
          lineHeight: "1.6",
        }}
      >
        <p>
          This is a detailed description page for project <strong>{slug}</strong>.  
          You can add images, process, tools, challenges, and anything else here to showcase the project in depth.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <img
            src={`/images/project${slug}.jpg`}
            alt={`Project ${slug}`}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      </div>
    </main>
  );
}
