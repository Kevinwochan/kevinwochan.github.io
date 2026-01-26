// Import our custom CSS
import "./scss/styles.scss";

import { useEffect, useState } from "react";

import About from "./components/About";
import { Gallery } from "./components/Gallery";
import { Presentations } from "./components/Presentations";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const stored = localStorage.getItem("theme");
    return stored === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const sectionIds = ["about", "gallery", "talks"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const navClass = (id: string) =>
    `side-nav__link${activeSection === id ? " is-active" : ""}`;

  return (
    <div className="app-shell">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <i className={`bi ${theme === "dark" ? "bi-sun" : "bi-moon"}`} />
      </button>
      <nav className="side-nav">
        <a className={navClass("about")} href="#about">
          About
        </a>
        <a className={navClass("gallery")} href="#gallery">
          Gallery
        </a>
        <a className={navClass("talks")} href="#talks">
          Talks
        </a>
      </nav>
      <main className="app-content">
        <About />
        <Gallery />
        <Presentations />
      </main>
    </div>
  );
}

export default App;
