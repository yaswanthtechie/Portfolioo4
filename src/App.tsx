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
    title: "Project Alpha",
    category: "fullstack",
    description: "A placeholder project for demonstration purposes.",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    tech: ["React", "Node.js", "Postgres"],
    github: "https://github.com/example/project-alpha",
    demo: null,
  },
  {
    title: "Project Beta",
    category: "fullstack",
    description: "Sample project showcasing dummy data and features.",
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    tech: ["Angular", "Express", "MongoDB"],
    github: "https://github.com/example/project-beta",
    demo: null,
  },
  {
    title: "Project Gamma",
    category: "fullstack",
    description: "Demo application used as project placeholder.",
    color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    tech: ["Vue", "Django", "SQLite"],
    github: "https://github.com/example/project-gamma",
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
            <h3>Category A</h3>
            <div className="skills-cloud">
              <span className="skill-tag">Skill A1</span>
              <span className="skill-tag">Skill A2</span>
              <span className="skill-tag">Skill A3</span>
              <span className="skill-tag">Skill A4</span>
              <span className="skill-tag">Skill A5</span>
              <span className="skill-tag">Skill A6</span>
            </div>
          </div>

          <div className="process-item">
            <h3>Category B</h3>
            <div className="skills-cloud">
              <span className="skill-tag">Skill B1</span>
              <span className="skill-tag">Skill B2</span>
              <span className="skill-tag">Skill B3</span>
              <span className="skill-tag">Skill B4</span>
              <span className="skill-tag">Skill B5</span>
              <span className="skill-tag">Skill B6</span>
            </div>
          </div>

          <div className="process-item">
            <h3>Category C</h3>
            <div className="skills-cloud">
              <span className="skill-tag">Skill C1</span>
              <span className="skill-tag">Skill C2</span>
              <span className="skill-tag">Skill C3</span>
              <span className="skill-tag">Skill C4</span>
              <span className="skill-tag">Skill C5</span>
              <span className="skill-tag">Skill C6</span>
            </div>
          </div>

          <div className="process-item">
            <h3>Category D</h3>
            <div className="skills-cloud">
              <span className="skill-tag">Skill D1</span>
              <span className="skill-tag">Skill D2</span>
              <span className="skill-tag">Skill D3</span>
              <span className="skill-tag">Skill D4</span>
              <span className="skill-tag">Skill D5</span>
              <span className="skill-tag">Skill D6</span>
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
            <strong>John Doe</strong> is a placeholder developer used for demo and layout purposes. This profile provides mock information to demonstrate the design and structure of the site.
          </p>
          <p className="about-tagline">
            Full Stack Developer | Example Profile
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-content">
          <div>
            <div className="logo" style={{ marginBottom: "1rem" }}>
              ACME Corp
            </div>
            <p style={{ opacity: 0.5, fontSize: "0.85rem" }}>
              © 2025 • All rights reserved
            </p>
            <p style={{ opacity: 0.7, fontSize: "0.9rem", marginTop: "1rem" }}>
              example@example.com
            </p>
            <p style={{ opacity: 0.7, fontSize: "0.9rem", marginTop: "0.5rem" }}>
              +1 (555) 123-4567
            </p>
            <p style={{ opacity: 0.5, fontSize: "0.85rem", marginTop: "0.5rem" }}>
              Anywhere, Earth
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Connect</h4>
              <a
                href="https://github.com/example"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/example"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:example@example.com">Email</a>
            </div>

            <div className="footer-column">
              <h4>Expertise</h4>
              <a href="#work">
                Projects
              </a>
              <a href="#about">
                About
              </a>
              <a
                href="https://example.com/resume.pdf"
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
                href="https://maps.google.com/?q=Anywhere"
                target="_blank"
                rel="noreferrer"
              >
                Anywhere
              </a>
              <a href="mailto:example@example.com?subject=Remote%20Opportunity">
                Open to Remote
              </a>
              <a href="mailto:example@example.com?subject=Project%20Inquiry">
                Available for Work
              </a>
            </div>
          </div>

          <div className="contact-buttons">
            <a
              href="mailto:example@example.com"
              className="btn btn-primary"
            >
              Send a Message
            </a>
            <a href="tel:+15551234567" className="btn">
              Call
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
