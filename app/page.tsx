import Image from "next/image";
import SiteHeader from "./site-header";
import Skills from "./skills";
import "./section-background.css";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="portfolio about-container">
          <section id="about" className="about" aria-labelledby="about-heading">
            <div className="portrait-placeholder image-slot">
              <Image
                src="/images/portrait.jpg"
                alt="Vincent Angeles"
                width={1179}
                height={1374}
                unoptimized
                sizes="(max-width: 640px) 280px, 360px"
                className="portfolio-photo"
              />
            </div>

            <div className="about-text">
              <h2 id="about-heading">About me</h2>
              <p>
                I’m a Computer Science Undergrad and practicing programmer with IT professional experience. Interested in networking, cybersecurity 
                and software development. Some of my personal hobbies include game development, hiking, traveling, piano, reading and film.
                This is where I share my projects, what I’m learning, and the hobbies that keep me curious.
              </p>
            </div>
          </section>
        </div>

        <div className="work-background">
          <div className="portfolio work-container">
            <section id="projects" className="projects" aria-labelledby="projects-heading">
              <h2 id="projects-heading">Projects</h2>
              <div className="projects-grid">
                <article className="project">
                  <h3>Learning Desk</h3>
                  <div className="project-screenshot">
                    <Image
                      src="/images/learning-desk.png"
                      alt="Learning Desk dashboard showing learning tracks for Unity, Unreal Engine 5, piano, and Network+, with progress bars and next steps."
                      width={1121}
                      height={777}
                      sizes="(max-width: 640px) 100vw, (max-width: 1480px) 46vw, 660px"
                      className="project-screenshot-image"
                      unoptimized
                    />
                  </div>
                  <p className="project-description">
                    A little desktop app to keep my learning organized. It tracks
                    progress, weekly plans, and the next step for each hobby or
                    skill, with everything saved on my computer.
                  </p>
                  <p className="project-tools">
                    <strong>Tools used:</strong> C#, WPF/XAML, JSON, Visual Studio
                  </p>
                </article>

                <article className="project">
                  <h3>The Attic Computer</h3>
                  <div className="project-image-placeholder">
                    <Image
                      src="/images/Project2Image.png"
                      alt="Chat showing research about dogs in a retro terminal-like interface."
                      width={1121}
                      height={777}
                      sizes="(max-width: 640px) 100vw, (max-width: 1480px) 46vw, 660px"
                      className="project-screenshot-image"
                      unoptimized
                    />
                  </div>
                  <p className="project-description">Created a simple custom chatbot 
                    that uses a local LLM "QWEN" and an interface built using Visual Studio
                    HTML, CSS, JavaScript, and Python FastApi. 
                  </p>
                  <p className="project-tools">
                    <strong>Tools used:</strong> Place holder
                  </p>
                </article>
              </div>
            </section>
            <Skills />
          </div>
        </div>
      </main>
    </>
  );
}
