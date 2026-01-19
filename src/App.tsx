// Import our custom CSS
import "./scss/styles.scss";

import { useEffect, useState } from "react";

import About from "./components/About";
import { Gallery } from "./components/Gallery";
import { Presentations } from "./components/Presentations";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sectionIds = ["about", "gallery"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length === 0) {
          return;
        }

        const mostVisible = visibleEntries.reduce((best, current) =>
          current.intersectionRatio > best.intersectionRatio ? current : best
        );

        setActiveSection(mostVisible.target.id);
      },
      {
        root: null,
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0.15, 0.35, 0.55, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-shell">
      <nav className="side-nav">
        <a
          className={`side-nav__link ${activeSection === "about" ? "is-active" : ""
            }`}
          href="#about"
        >
          About
        </a>
        <a
          className={`side-nav__link ${activeSection === "gallery" ? "is-active" : ""
            }`}
          href="#gallery"
        >
          Gallery
        </a>
        <a className="side-nav__link" href="#talks">
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
