import React, { useState } from "react"
import "./App.css"
import { NavBar } from "./components/ui/tubelight-navbar"
import { BackgroundPaths } from "./components/ui/background-paths"
import { Home, User, Briefcase, FileText } from "lucide-react"

type ProjectCategory = "fullstack"

type Project = {
  title: string
  category: ProjectCategory
  description: string
  color: string
  tech: string[]
  github: string | null
  demo: string | null
}

const projects: Project[] = [
  {
    title: "Doctor Appointment System",
    category: "fullstack",
    description:
      "Comprehensive healthcare appointment management platform with patient records, doctor scheduling, and real-time booking capabilities. Built with modern web technologies.",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    tech: ["ASP.NET Core", "Angular", "SQL Server", "Entity Framework", "Bootstrap"],
    github: "https://github.com/alexandra-valkova/DoctorAppointment",
    demo: null,
  },
  {
    title: "Reservation System",
    category: "fullstack",
    description:
      "Full-stack reservation management system with ASP.NET Core backend and Angular frontend. Features real-time availability checking and booking confirmations.",
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    tech: ["ASP.NET Core", "Angular", "SQL Server", "RESTful API", "JWT"],
    github: "https://github.com/tamasandacian/ASPNET-Core-Angular-ReservationSystem",
    demo: null,
  },
  {
    title: "Appointment Scheduling Platform",
    category: "fullstack",
    description:
      "Robust appointment scheduling solution with role-based access control, automated notifications, and comprehensive calendar management features.",
    color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    tech: ["ASP.NET Core", "Angular", "SQL Server", "Entity Framework", "RBAC"],
    github: "https://github.com/smedavarapu1/Appointment-Scheduling",
    demo: null,
  },
]

const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "All Projects",
  fullstack: "Full Stack Application",
}

const filters: Array<{ key: "all" | ProjectCategory; label: string }> = [
  { key: "all", label: categoryLabels.all },
  { key: "fullstack", label: categoryLabels.fullstack },
]

function App() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all")
  const [isFiltering, setIsFiltering] = useState(false)

  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "About", url: "#about", icon: User },
    { name: "Projects", url: "#work", icon: Briefcase },
    { name: "Resume", url: "#contact", icon: FileText },
  ]

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  const handleFilterChange = (filter: "all" | ProjectCategory) => {
    setIsFiltering(true)
    setActiveFilter(filter)
    setTimeout(() => setIsFiltering(false), 300)
  }

  return (
    <div className="App">
      <NavBar items={navItems} />

      {/* Hero Section */}
      <section className="hero" id="home">
        <BackgroundPaths title="Crafting elegant digital products that feel as good as they work." />
      </section>

      {/* Process Section */}
      <section className="process-section" id="expertise">
        <div className="section-title">Technical Expertise</div>

        <div className="process-grid">
          <div className="process-item">
            <h3>Backend Development</h3>
            <div className="skills-cloud">
              <span className="skill-tag">ASP.NET Core</span>
              <span className="skill-tag">ASP.NET MVC</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">Entity Framework</span>
              <span className="skill-tag">RESTful APIs</span>
              <span className="skill-tag">Node.js</span>
            </div>
          </div>

          <div className="process-item">
            <h3>Frontend Development</h3>
            <div className="skills-cloud">
              <span className="skill-tag">Angular</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">Bootstrap</span>
            </div>
          </div>

          <div className="process-item">
            <h3>Database &amp; Cloud</h3>
            <div className="skills-cloud">
              <span className="skill-tag">SQL Server</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Azure</span>
            </div>
          </div>

          <div className="process-item">
            <h3>Tools &amp; Security</h3>
            <div className="skills-cloud">
              <span className="skill-tag">Visual Studio</span>
              <span className="skill-tag">Git &amp; GitHub</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">JWT Authentication</span>
              <span className="skill-tag">RBAC</span>
              <span className="skill-tag">OTP Verification</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-section">
        <div className="why-content">
          <div className="section-title">About My Work</div>
          <h2 className="why-title">Building solutions that matter.</h2>
          <p className="why-description">
            As a dedicated full-stack developer, I focus on creating secure, scalable,
            and user-centric applications. With hands-on experience in ASP.NET Core,
            Angular, and database optimization, I bring a problem-solving mindset to
            every project. My internship at Naresh IT strengthened my ability to
            collaborate with teams and deliver production-ready code.
          </p>
          <p className="emphasis-text">Quality code. Real impact. On-time delivery.</p>
        </div>
      </section>

      {/* Work Section with Dynamic Filtering */}
      <section className="work-section" id="work">
        <div className="section-title">Featured Projects</div>

        <div className="filter-controls">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              className={
                "filter-btn" +
                (activeFilter === key ? " active" : "") +
                (isFiltering ? " filtering" : "")
              }
              onClick={() => handleFilterChange(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div
          className={
            "work-grid" + (isFiltering ? " filtering" : "")
          }
          id="projectGrid"
        >
          {filteredProjects.length === 0 ? (
            <div className="no-projects">No projects in this category yet</div>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.title}
                className="work-item"
                data-category={project.category}
              >
                <div
                  style={{ background: project.color, height: "100%" }}
                ></div>
                <div className="work-overlay">
                  <div className="work-title">{project.title}</div>
                  <div className="work-category">
                    {categoryLabels[project.category]}
                  </div>
                  <div className="work-description">{project.description}</div>
                  <div className="work-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="work-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="work-link"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="work-link"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="view-more">
          <a
            href="mailto:deekshithanarisetty@gmail.com"
            className="btn btn-primary"
          >
            Let's Collaborate
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-content">
          <p className="about-text">
            <strong>Deekshitha NV</strong> is a Computer Science graduate from RGUKT
            Ongole with a passion for building robust full-stack applications. With
            expertise in ASP.NET Core, Angular, and modern web technologies, I
            specialize in creating secure, scalable solutions that deliver real value.
            My recent internship at Naresh IT provided hands-on experience in
            developing enterprise-grade applications, optimizing database performance,
            and implementing secure authentication systems.
          </p>
          <p className="about-tagline">
            Full Stack Developer | Problem Solver | Continuous Learner
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-content">
          <div>
            <div className="logo" style={{ marginBottom: "1rem" }}>
              DEEKSHITHA NV
            </div>
            <p style={{ opacity: 0.5, fontSize: "0.85rem" }}>
              © 2025 • All rights reserved
            </p>
            <p style={{ opacity: 0.7, fontSize: "0.9rem", marginTop: "1rem" }}>
              deekshithanarisetty@gmail.com
            </p>
            <p style={{ opacity: 0.7, fontSize: "0.9rem", marginTop: "0.5rem" }}>
              +91 6305455261
            </p>
            <p style={{ opacity: 0.5, fontSize: "0.85rem", marginTop: "0.5rem" }}>
              Ongole, Andhra Pradesh
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Connect</h4>
              <a
                href="https://github.com/NV-Deekshitha"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/deekshitha-nv"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:deekshithanarisetty@gmail.com">Email</a>
            </div>

            <div className="footer-column">
              <h4>Expertise</h4>
              <a href="#work">
                Projects
              </a>
              <a href="#about">
                About Me
              </a>
              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noreferrer"
                download
              >
                Download Resume
              </a>
            </div>

            <div className="footer-column">
              <h4>Location</h4>
              <a
                href="https://maps.google.com/?q=Ongole,+Andhra+Pradesh"
                target="_blank"
                rel="noreferrer"
              >
                Ongole, AP
              </a>
              <a href="mailto:deekshithanarisetty@gmail.com?subject=Remote%20Opportunity">
                Open to Remote
              </a>
              <a href="mailto:deekshithanarisetty@gmail.com?subject=Project%20Inquiry">
                Available for Work
              </a>
            </div>
          </div>

          <div className="contact-buttons">
            <a
              href="mailto:deekshithanarisetty@gmail.com"
              className="btn btn-primary"
            >
              Send a Message
            </a>
            <a href="tel:+916305455261" className="btn">
              Call Me
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
