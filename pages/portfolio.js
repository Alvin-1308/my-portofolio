import { useState, useRef, useEffect } from "react";

export default function Portfolio() {
  const [openProjects, setOpenProjects] = useState([]);
  const containerRef = useRef(null);

  const projects = [
    {
      id: 5,
      title: "Project 1",
      detailTitle: "Flappy Bird Clone Game.",
      detailDesc:
        "In this project, I built a simple Flappy Bird clone using HTML, CSS, and JavaScript. Players control a bird to avoid pipes and score points. This project helped me practice game logic, animation, and interactive web development.",
      image: "/images/project1.png",
      year: 2024,
    },
    {
      id: 6,
      title: "Project 2",
      detailTitle: "Home sales App.",
      detailDesc:
        "In this project, I developed a home sales management application using Java with Apache NetBeans and a database. The app helps manage customer data, calculate prices, installment plans, and generate detailed home purchase information. This project improved my skills in Java GUI, database integration, and application logic.",
      image: "/images/project2.png",
      year: 2024,
    },
    {
      id: 1,
      title: "Project 3",
      detailTitle: "3D Blender Project.",
      detailDesc:
        "In this project, I created several basic 3D models, including low-poly animals and simple objects like airplanes with detailed elements. This project helped me strengthen my fundamental 3D modeling skills and explore creative forms in a minimalistic style.",
      image: "/images/project3.png",
      year: 2024,
    },
    {
      id: 2,
      title: "Project 4",
      detailTitle: "Malware Attack game.",
      detailDesc:
        "In this project, we created an educational game called Malware Attack to simulate how malware and viruses attack computer systems. The idea behind this game is to help players understand different types of cyber threats in a fun and interactive way. Through this project, we wanted to combine my interest in cybersecurity and game development, making it easier for people to learn about digital security while playing.",
      image: "/images/project4.png",
      year: 2025,
    },
    {
      id: 3,
      title: "Project 5",
      detailTitle: "Cinema App Mobile.",
      detailDesc:
        "In this project, I designed a mobile cinema app that allows users to easily book tickets, select seats, and explore movies — providing a seamless experience similar to popular cinema applications.",
      image: "/images/project5.jpg",
      year: 2025,
    },
    {
      id: 4,
      title: "Project 6",
      detailTitle: "Library Management System.",
      detailDesc:
        "In this project, we created a Library Management System web app that lets users browse book collections and request to borrow them easily. As an admin, I can add and manage books and track borrowing history. This project helped me improve my skills in web development and designing user-friendly interfaces.",
      image: "/images/project6.png",
      year: 2025,
    },  
  ];

  const toggleProject = (id) => {
    if (openProjects.includes(id)) {
      setOpenProjects(openProjects.filter((pid) => pid !== id));
    } else {
      setOpenProjects([...openProjects, id]);
    }
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        flexDirection: "row",
        overflowX: "auto",
        overflowY: "hidden",
        height: "100vh",
      }}
    >
      {/* Intro card */}
      <div
        style={{
          flex: "0 0 300px",
          padding: "2rem",
          borderRight: "1px solid #222",
          backgroundColor: "#e6ddc4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingTop: "5rem",
        }}
      >
        <h1
          style={{
            backgroundColor: "#111",
            color: "#fff",
            display: "inline-block",
            padding: "0.3rem 1rem",
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.5rem",
          }}
        >
          PORTFOLIO
        </h1>
        <p
          style={{
            marginTop: "1rem",
            fontFamily: "'Playfair Display', serif",
            lineHeight: "1.5",
          }}
        >
          This portfolio showcases my various projects during my time at President University, covering different areas of design, web development, and creative work.
        </p>
        <p
          style={{
            marginTop: "2rem",
            fontFamily: "'Playfair Display', serif",
            fontSize: "1rem",
            opacity: 0.8,
          }}
        >
          Click on each project to learn more ➔
        </p>
      </div>

      {/* Project cards */}
      {projects.map((project) => {
        const isOpen = openProjects.includes(project.id);

        return (
          <div
            key={project.id}
            onClick={() => toggleProject(project.id)}
            style={{
              flex: isOpen ? "0 0 600px" : "0 0 150px",
              padding: "1rem",
              borderRight: "1px solid #222",
              backgroundColor: "#e6ddc4",
              transition: "all 0.5s ease",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                fontFamily: "'Playfair Display', serif",
                margin: "0",
                fontSize: "1.3rem",
                transition: "opacity 0.3s",
                opacity: isOpen ? 0 : 1,
              }}
            >
              {project.title}
            </h2>
            <p style={{ fontSize: "0.8rem", marginTop: "1rem", transition: "opacity 0.3s", opacity: isOpen ? 0 : 1 }}>
              {project.year}
            </p>

            {isOpen && (
              <div
                style={{
                  opacity: 1,
                  transition: "opacity 0.5s",
                  textAlign: "center",
                  fontFamily: "'Playfair Display', serif",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <h3 style={{ fontSize: "1.5rem" }}>{project.detailTitle}</h3>
                <p
                  style={{
                    marginTop: "1rem",
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    maxWidth: "500px",
                    margin: "1rem auto",
                  }}
                >
                  {project.detailDesc}
                </p>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    marginTop: "1rem",
                    borderRadius: "8px",
                  }}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleProject(project.id);
                  }}
                  style={{
                    marginTop: "1rem",
                    padding: "0.5rem 1rem",
                    backgroundColor: "#111",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
