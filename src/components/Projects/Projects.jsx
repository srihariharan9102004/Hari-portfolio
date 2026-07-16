import "./Projects.css";
import { useState, useRef, useEffect, useCallback, useLayoutEffect } from "react";

/* ============================================================
   PROJECT DATA
   ============================================================ */

const projects = [
  {
    id: 1,
    type: "major",
    title: "Map-Based Location Reminder Application",
    description:
      "A GPS reminder application built with React, Leaflet, Nominatim and browser geolocation APIs, with real-time alerts. (Initial login may take ~20 seconds due to free-tier hosting.)",
    image: "/projectbgimg/location.png",
    video: "/projectbgimg/reminder.mp4",
    technologies: ["React","REST APIs", "Java", "Leaflet", "MySQL"],
    github: "https://github.com/srihariharan9102004/REMEMBER-location-app.git",
    liveLink: "https://remember-location-app.vercel.app/",
  },
  {
    id: 2,
    type: "major",
    title: "Hybrid Convolutional Model for Multimodal Deepfake Detection",
    description:
      "An AI-powered system that detects deepfake images, audio and video using deep learning models tuned for multimodal accuracy.",
    image: "/projectbgimg/deepfake.png",
    video: "/projectbgimg/deepfake.mp4",
    technologies: ["Python", "CNN", "GNN","VGG19", "Deep Learning", "AI"],
    github: "https://github.com/yourusername/deepfake-project",
    liveLink: null, // add the deployed URL here once it's hosted
  },
  
    {
    id: 4,
    type: "major",
    title: "Portfolio Website",
    description: "It is a collection of my work, ideas, and growth as a developer. Discover real-world projects, AI innovations, technical expertise, and experiences presented through a modern, interactive, and user-focused design.",
    video: "/projectbgimg/portfolio.mp4",
    technologies: ["React.js", "HTML 5", "CSS 3","JavaScript"],
    github: "https://github.com/srihariharan9102004/Hari-portfolio.git",
    liveLink: "https://hari-portfolio-e487.vercel.app/",
  },
  {
    id: 3,
    type: "major",
    title: "Voice-Text Assistive System",
    description:
      "Developed an Android application enabling real-time speech-to-text and text-to-speech communication. Integrated Google Speech Recognition and Text-to-Speech APIs for seamless user interaction.",
    image: "/projectbgimg/sih.png",
    video: "/projectbgimg/sihvideo.mp4",
    technologies: ["React", "Java", "Speech API","MySQL"],
    github: "https://github.com/yourusername/sih-project",
    liveLink: null,
  },


{
  id: 5,
  type: "mini",
  title: "AI FAQ Chatbot",
  description:
    "An NLP-based chatbot that answers frequently asked questions using intent recognition and context-aware responses.",
  image: "/mini-project/AI-chatbot.png",
  technologies: ["Python", "NLP", "Flask", "HTML", "CSS", "JavaScript"],
  github: "https://github.com/srihariharan9102004/AI-FAQChatbot.git",
  liveLink: null,
},
{
  id: 6,
  type: "mini",
  title: "AI Object Detection System",
  description:
    "A real-time object detection application using YOLO and OpenCV to identify multiple objects from images and videos.",
  image: "/mini-project/objdetection.jpg",
  technologies: ["Python", "YOLO", "OpenCV", "Deep Learning"],
  github: "https://github.com/srihariharan9102004/AI-Object-Detection-System.git",
  liveLink: null,
},
{
  id: 7,
  type: "mini",
  title: "AI Language Translator",
  description:
    "An AI-powered language translation application that translates text between multiple languages using machine learning APIs.",
  image: "/mini-project/langtranslator.png",
  technologies: ["Python", "Google Translate API", "NLP", "Flask"],
  github: "https://github.com/srihariharan9102004/LanguageTranslator.git",
  liveLink: null,
},
{
  id: 8,
  type: "mini",
  title: "AI Music Generator",
  description:
    "An AI application that generates unique melodies and background music using deep learning models trained on musical patterns.",
  image: "/mini-project/musicgen.png",
  technologies: ["Python", "TensorFlow", "LSTM", "Deep Learning"],
  github: "https://github.com/srihariharan9102004/AI-Music-Generation.git",
  liveLink: null,
},
  {
    id: 9,
    type: "mini",
    title: "Next IAS Website",
    description: "A responsive educational website built during an internship.",
    image: "/mini-project/nextias.png",
    technologies: ["React", "Bootstrap", "Java"],
    github: "https://github.com/srihariharan9102004/next-ias.git",
    liveLink: null,
  },



];

const majorProjects = projects.filter((p) => p.type === "major");
const miniProjects = projects.filter((p) => p.type === "mini");

/* ============================================================
   CAROUSEL SIZING ENGINE

   The core idea: instead of guessing a CSS width ratio per
   breakpoint, we measure the rail's real pixel width and derive
   the card width from an equation that GUARANTEES exactly
   `visibleCount` full cards plus a fixed-fraction peek of the
   next one, no matter what width the rail actually renders at.

   containerWidth = visibleCount * cardWidth
                   + visibleCount * gap        (one gap after each
                                                 full card, incl.
                                                 the gap leading
                                                 into the peek card)
                   + PEEK_FRACTION * cardWidth  (the sliver of the
                                                 next card)

   Solving for cardWidth:
   cardWidth = (containerWidth - visibleCount * gap)
               / (visibleCount + PEEK_FRACTION)
   ============================================================ */

const PEEK_FRACTION = 0.3; // next card always shows ~30% of its width

// True when the device has real hover (mouse/trackpad), false on touch-only
// devices. Used only to decide what tapping a project's video does — it
// does not affect layout/sizing.
function useHoverCapable() {
  const [canHover, setCanHover] = useState(
    () => typeof window === "undefined" || window.matchMedia("(hover: hover)").matches
  );

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover)");
    const update = () => setCanHover(mql.matches);
    update();
    mql.addEventListener ? mql.addEventListener("change", update) : mql.addListener(update);
    return () => {
      mql.removeEventListener ? mql.removeEventListener("change", update) : mql.removeListener(update);
    };
  }, []);

  return canHover;
}

// How many full cards to show, per rail type, at a given viewport width.
// Three tiers, each still following the same "N full + peek" pattern:
//   Desktop (>=1024px): major = 3 full + peek of #4, mini = 4 full + peek of #5
//   Tablet  (768-1023px): major = 2 full + peek of #3, mini = 3 full + peek of #4
//   Mobile  (<768px):    major = 1 full + peek of #2, mini = 2 full + peek of #3
// Phones get fewer, bigger cards on purpose — cramming 2-3 cards into a
// narrow, margin-squeezed phone screen makes text and buttons illegible.
function getVisibleCount(variant, width) {
  if (variant === "major") {
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
  }
  // mini
  if (width >= 1024) return 4;
  if (width >= 768) return 3;
  return 2;
}

/* ============================================================
   CHEVRON ICON
   ============================================================ */

function ChevronIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        d={direction === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ============================================================
   PROJECT CARD
   ============================================================ */

function ProjectCard({ project, variant, width, onOpen }) {
  const videoRef = useRef(null);
  const isMajor = variant === "major";
  const Heading = isMajor ? "h3" : "h4";

  // Devices with real hover (mouse/trackpad) keep the existing behavior:
  // hover plays the preview, clicking opens the details modal. Touch
  // devices have no hover at all, so on them tapping the video should
  // just play it in place — not open the modal.
  const canHover = useHoverCapable();

  const handleEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  };

  const handleLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  const handleMediaClick = () => {
    if (project.video && !canHover) {
      const v = videoRef.current;
      if (!v) return;
      if (v.paused) {
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      } else {
        v.pause();
      }
      return;
    }
    onOpen(project);
  };

  return (
    <div
      className={`pj-card ${isMajor ? "pj-card--major" : "pj-card--mini"}`}
      style={{ width, minWidth: width || undefined }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="pj-card-media" onClick={handleMediaClick}>
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            poster={project.image}
            muted
            loop
            playsInline
            preload="auto"
            draggable={false}
          />
        ) : (
          <img src={project.image} alt={project.title} loading="lazy" draggable={false} />
        )}
      </div>

      <div className="pj-card-body">
        <Heading className="pj-card-title">{project.title}</Heading>
        <p className="pj-card-desc">{project.description}</p>

        <div className="pj-tech-row">
          {project.technologies.map((tech) => (
            <span key={tech} className="pj-tech-chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="pj-card-actions">
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pj-btn pj-btn--primary"
            >
              Live Demo
            </a>
          ) : (
            <button
              type="button"
              className="pj-btn pj-btn--primary pj-btn--disabled"
              disabled
              aria-disabled="true"
              title="No live link added for this project yet"
            >
              Not Hosted
            </button>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pj-btn pj-btn--secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   CAROUSEL RAIL
   One arrow click = exactly one card, always. Sizing is derived
   live from the formula above, so the peek is always correct.
   ============================================================ */

function ProjectRail({ title, description, items, variant, onOpen }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, lastX: 0, startTranslate: 0, dragged: false });

  const [index, setIndex] = useState(0);
  const [layout, setLayout] = useState({
    cardWidth: 0,
    gap: 24,
    visibleCount: variant === "major" ? 3 : 4,
    ready: false,
  });

  const recompute = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const width = window.innerWidth;
    const visibleCount = getVisibleCount(variant, width);

    const trackStyles = window.getComputedStyle(track);
    const gap = parseFloat(trackStyles.columnGap || trackStyles.gap) || 0;

    const containerWidth = viewport.clientWidth;
    if (!containerWidth) return;

    const cardWidth = Math.max(
      (containerWidth - visibleCount * gap) / (visibleCount + PEEK_FRACTION),
      0
    );

    setLayout({ cardWidth, gap, visibleCount, ready: true });

    const maxIndex = Math.max(items.length - visibleCount, 0);
    setIndex((current) => Math.min(current, maxIndex));
  }, [variant, items.length]);

  useLayoutEffect(() => {
    recompute();

    const viewport = viewportRef.current;
    const ro = new ResizeObserver(recompute);
    if (viewport) ro.observe(viewport);
    window.addEventListener("resize", recompute);

    // Safety re-checks in case fonts/images shift layout right after mount.
    const retry1 = setTimeout(recompute, 250);
    const retry2 = setTimeout(recompute, 900);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recompute);
      clearTimeout(retry1);
      clearTimeout(retry2);
    };
  }, [recompute]);

  const maxIndex = Math.max(items.length - layout.visibleCount, 0);
  const atStart = index <= 0;
  const atEnd = index >= maxIndex;

  const step = layout.cardWidth + layout.gap;

  // Clamp to the real scrollable distance so the very last step always
  // lands flush against the right edge, even after rounding.
  const rawTranslate = index * step;
  const trackEl = trackRef.current;
  const viewportEl = viewportRef.current;
  const maxScroll =
    trackEl && viewportEl ? Math.max(trackEl.scrollWidth - viewportEl.clientWidth, 0) : rawTranslate;
  const translate = atEnd ? maxScroll : Math.min(rawTranslate, maxScroll);

  const go = (direction) => {
    setIndex((current) => {
      const next = current + direction;
      if (next < 0) return 0;
      if (next > maxIndex) return maxIndex;
      return next;
    });
  };

  /* ---------------- drag / swipe (moves exactly one card too) ---------------- */

  const beginDrag = (e) => {
    if (!e.isPrimary || !trackRef.current) return;
    // Don't hijack presses that start on a link/button (GitHub, Live Demo,
    // etc). Without this, a few pixels of natural pointer jitter between
    // press and release could get misread as a drag, and the capturing
    // click-swallow logic below would silently cancel the link's navigation.
    if (e.target.closest && e.target.closest("a, button")) return;
    dragRef.current = { active: true, startX: e.clientX, lastX: e.clientX, startTranslate: translate, dragged: false };
    trackRef.current.style.transition = "none";
    viewportRef.current?.setPointerCapture?.(e.pointerId);
  };

  const moveDrag = (e) => {
    const d = dragRef.current;
    if (!d.active || !trackRef.current) return;
    d.lastX = e.clientX;
    const delta = e.clientX - d.startX;
    if (Math.abs(delta) > 8) d.dragged = true;
    const proposed = Math.min(Math.max(d.startTranslate - delta, 0), maxScroll);
    trackRef.current.style.transform = `translate3d(-${proposed}px, 0, 0)`;
  };

  const endDrag = (e) => {
    const d = dragRef.current;
    if (!d.active) return;
    d.active = false;
    const track = trackRef.current;
    const delta = d.lastX - d.startX;
    const threshold = Math.max(step * 0.2, 40);

    if (track) track.style.transition = "";
    viewportRef.current?.releasePointerCapture?.(e.pointerId);

    if (delta <= -threshold && !atEnd) {
      go(1);
    } else if (delta >= threshold && !atStart) {
      go(-1);
    } else if (track) {
      track.style.transform = `translate3d(-${translate}px, 0, 0)`;
    }
  };

  const swallowClickAfterDrag = (e) => {
    if (dragRef.current.dragged) {
      e.preventDefault();
      e.stopPropagation();
      dragRef.current.dragged = false;
    }
  };

  return (
    <div className={`pj-rail pj-rail--${variant}`}>
      <div className="pj-rail-header">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="pj-rail-controls">
          <button
            type="button"
            className={`pj-arrow ${atStart ? "pj-arrow--hidden" : ""}`}
            onClick={() => go(-1)}
            disabled={atStart}
            aria-label="Previous project"
            tabIndex={atStart ? -1 : 0}
          >
            <ChevronIcon direction="prev" />
          </button>

          <button
            type="button"
            className={`pj-arrow ${atEnd ? "pj-arrow--hidden" : ""}`}
            onClick={() => go(1)}
            disabled={atEnd}
            aria-label="Next project"
            tabIndex={atEnd ? -1 : 0}
          >
            <ChevronIcon direction="next" />
          </button>
        </div>
      </div>

      <div className="pj-rail-frame">
        <div className={`pj-fade pj-fade--left ${atStart ? "pj-fade--hidden" : ""}`} />

        <div
          ref={viewportRef}
          className="pj-viewport"
          onPointerDown={beginDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={swallowClickAfterDrag}
        >
          <div
            ref={trackRef}
            className="pj-track"
            style={{
              transform: `translate3d(-${translate}px, 0, 0)`,
              opacity: layout.ready ? 1 : 0,
            }}
          >
            {items.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant={variant}
                width={layout.cardWidth}
                onOpen={onOpen}
              />
            ))}
          </div>
        </div>

        <div className={`pj-fade pj-fade--right ${atEnd ? "pj-fade--hidden" : ""}`} />
      </div>
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeProject();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="pj-section section-block" id="Projects">
      <h2 className="pj-title">Projects</h2>

      <ProjectRail
        title="Major Projects"
        description="Featured projects showcasing AI, Full Stack and Software Development."
        items={majorProjects}
        variant="major"
        onOpen={openProject}
      />

      <ProjectRail
        title="Mini Projects"
        description="Small projects, internship work and practice applications."
        items={miniProjects}
        variant="mini"
        onOpen={openProject}
      />

      {selectedProject && (
        <div className="pj-modal-overlay" onClick={closeProject}>
          <div className="pj-modal" onClick={(e) => e.stopPropagation()}>
            <button className="pj-modal-close" onClick={closeProject} aria-label="Close">
              &#10005;
            </button>

            <div className="pj-modal-media">
              {selectedProject.video ? (
                <video src={selectedProject.video} controls autoPlay playsInline />
              ) : (
                <img src={selectedProject.image} alt={selectedProject.title} />
              )}
            </div>

            <div className="pj-modal-content">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>

              <h4>Technologies Used</h4>
              <div className="pj-tech-row">
                {selectedProject.technologies.map((tech) => (
                  <span className="pj-tech-chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pj-modal-buttons">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pj-btn pj-btn--primary"
                >
                  View GitHub
                </a>
                <button className="pj-btn pj-btn--secondary" onClick={closeProject}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;