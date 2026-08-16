import { siteData } from "./content.js?v=20260815e";

const app = document.querySelector("#app");
const page = document.body.dataset.page;
const base = document.body.dataset.base || "";

const isExternal = (href) => /^(https?:|mailto:|tel:|#)/.test(href);
const resolveHref = (href) => (isExternal(href) ? href : `${base}${href}`);

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const deviceFrame = (item, className = "") => `
  <div class="device-frame ${className}">
    ${
      item.type === "video"
        ? `<video src="${resolveHref(item.src)}" autoplay muted loop playsinline webkit-playsinline preload="auto" disablepictureinpicture disableremoteplayback></video>`
        : `<img src="${resolveHref(item.src)}" alt="">`
    }
  </div>
`;

const navMarkup = ({ overlay = false } = {}) => {
  const current = page === "home" ? "" : `${page}/`;
  return `
    <header class="site-header ${overlay ? "site-header--overlay" : ""} reveal" style="--delay:30ms">
      <a class="brand-mobile" href="${resolveHref("")}">${siteData.title}</a>
      <nav class="top-nav" aria-label="Primary">
        ${siteData.nav
          .map(
            (item) => `
              <a href="${resolveHref(item.href)}" ${current === item.href ? 'aria-current="page"' : ""}>
                ${item.label.toUpperCase()}
              </a>
            `
          )
          .join("")}
      </nav>
    </header>
  `;
};

const footerMarkup = () => `
  <footer class="footer-cta reveal" style="--delay:80ms">
    <h2>${siteData.footer.headline}</h2>
    <div class="footer-grid">
      ${siteData.footer.columns
        .map(
          (column) => `
            <div class="footer-column">
              <div class="footer-title">${column.title}</div>
              ${column.links
                .map(
                  (link) => `
                    <a href="${resolveHref(link.href)}"${isExternal(link.href) ? ' target="_blank" rel="noreferrer"' : ""}>
                      ${link.label}
                    </a>
                  `
                )
                .join("")}
            </div>
          `
        )
        .join("")}
    </div>
  </footer>
`;

const projectVisual = (project) => {
  if (project.variant === "landscape-overlay") {
    const overlayMarkup = project.overlayImage
      ? `
          <div class="phone-stage phone-stage--image ${project.overlayStageClass || ""}">
            <img class="phone-stage__image" src="${project.overlayImage}" alt="">
          </div>
        `
      : `
          <div class="phone-stage">
            ${deviceFrame({ type: "video", src: project.video }, "device-frame--compact")}
          </div>
        `;

    return `
      <div class="project-visual visual-landscape">
        <div class="project-visual__core">
          <img src="${project.image}" alt="${escapeHtml(project.title)}">
          ${overlayMarkup}
        </div>
        ${
          project.sideVideo
            ? `<div class="project-reel"><video src="${project.sideVideo}" autoplay muted loop playsinline></video></div>`
            : ""
        }
      </div>
    `;
  }

  if (project.variant === "landscape-image") {
    return `
      <div class="project-visual visual-landscape">
        <div class="project-visual__core">
          <img src="${project.image}" alt="${escapeHtml(project.title)}">
        </div>
      </div>
    `;
  }

  if (project.variant === "floating-phone") {
    return `
      <div class="project-visual visual-float">
        <div class="phone-stage">
          ${deviceFrame({ type: "video", src: project.video }, "device-frame--compact")}
        </div>
      </div>
    `;
  }

  return `
    <div class="project-visual triptych">
      ${project.phones.map((phone) => deviceFrame({ type: "image", src: phone }, "device-frame--compact")).join("")}
    </div>
  `;
};

const renderHome = () => `
  <main class="page page--home shell">
    ${navMarkup()}
    <section class="hero hero--home reveal" style="--delay:70ms">
      <h1>${siteData.home.title}</h1>
    </section>
    <section class="page-section stack-lg project-stack">
      ${siteData.home.projects
        .map(
          (project, index) => `
            <article
              class="project-card project-card--stack"
              style="--stack-index:${index}; --stack-top:${80 + index * 8}px; --stack-inset:${(siteData.home.projects.length - index - 1) * 16}px"
            >
              <a class="project-link" href="${resolveHref(project.href)}">
                <span class="project-action" aria-hidden="true">&#8599;</span>
                ${projectVisual(project)}
                <div class="project-meta">
                  <div class="project-title">${project.title}</div>
                  <div class="project-kicker">${project.kicker}</div>
                </div>
              </a>
            </article>
          `
        )
        .join("")}
    </section>
    ${footerMarkup()}
  </main>
`;

const statMarkup = (stat) => `
  <article class="about-badge">
    <span>${stat.label}</span>
    <div class="about-badge__value">${stat.value}</div>
  </article>
`;

const journeyMarkup = (item) => `
  <article class="journey-card">
    <h4>${item.title}</h4>
    <p>${item.body}</p>
  </article>
`;

const renderAbout = () => `
  <main class="page page--about shell">
    ${navMarkup()}
    <section class="about-stage">
      <div class="about-left reveal" style="--delay:70ms">
        <article class="about-summary-card">
          <div class="section-label">Quick Snapshot</div>
          <p>${siteData.about.summary}</p>
        </article>
        <div class="about-badges">
          ${siteData.about.stats.map(statMarkup).join("")}
        </div>
        <div class="journey-grid about-journey">
          ${siteData.about.journey.map(journeyMarkup).join("")}
        </div>
      </div>
      <div class="about-right reveal" style="--delay:110ms">
        <h1>${siteData.about.title}</h1>
        <p class="about-intro">${siteData.about.lead}</p>
        <div class="about-copy">
          ${siteData.about.paragraphs.map((paragraph) => `<p class="about-body">${paragraph}</p>`).join("")}
        </div>
        <div class="social-row">
          ${siteData.about.socials
            .map(
              (social) =>
                `<a href="${resolveHref(social.href)}"${isExternal(social.href) ? ' target="_blank" rel="noreferrer"' : ""}>${social.label}</a>`
            )
            .join("")}
        </div>
      </div>
    </section>
    ${footerMarkup()}
  </main>
`;

const mediaCard = (item) => `
  <div class="media-card ${item.phone ? "media-card--phone" : ""} ${item.span || ""}"${item.ratio ? ` style="aspect-ratio:${item.ratio}"` : ""}>
    ${
      item.type === "video"
        ? `<video src="${resolveHref(item.src)}" autoplay muted loop playsinline webkit-playsinline preload="auto" disablepictureinpicture disableremoteplayback></video>`
        : `<img src="${resolveHref(item.src)}" alt="">`
    }
  </div>
`;

const insightTile = (item) => `
  <article class="insight-tile">
    <div class="insight-tile__media">
      <img src="${resolveHref(item.image)}" alt="">
    </div>
    <p class="insight-tile__body">${item.body}</p>
  </article>
`;

const solutionStepMarkup = (item) => `
  <article class="solution-step">
    <div class="solution-step__text">
      <h4 class="solution-step__title">${item.title}</h4>
      <p class="solution-step__body">${item.body}</p>
    </div>
    <div class="solution-step__stage">
      ${deviceFrame({ type: "video", src: item.video }, "device-frame--solution")}
    </div>
  </article>
`;

const solutionSequenceMarkup = (sequence) => `
  <article class="solution-sequence">
    <div class="solution-step__text">
      <h4 class="solution-step__title">${sequence.title}</h4>
      <p class="solution-step__body">${sequence.body}</p>
    </div>
    <div class="solution-sequence__strip">
      ${sequence.screens
        .map(
          (screen) => `
            <figure class="solution-sequence__item">
              ${deviceFrame({ type: "video", src: screen.video }, "device-frame--solution")}
              <figcaption class="solution-sequence__label">${screen.label}</figcaption>
            </figure>
          `
        )
        .join("")}
    </div>
  </article>
`;

const sideNavMarkup = (entry) => `
  <div class="case-sidebar__group">
    <a class="back-link" href="${resolveHref(entry.backHref)}">
      <span class="back-link__arrow" aria-hidden="true">←</span>
      <span>Back</span>
    </a>
    <h1 class="case-sidebar__title case-sidebar__title--${entry.titleFont}">${entry.title}</h1>
    <nav class="case-nav case-nav--stack" aria-label="Case study sections">
      ${entry.toc.map((item) => `<a href="#${item.id}">${item.label}</a>`).join("")}
    </nav>
  </div>
`;

const heroCropMarkup = (entry) =>
  entry.heroCrops
    .map(
      (crop) => `
        <div
          class="case-crop"
          style="
            --crop-image:url('${resolveHref(entry.heroScreenshot)}');
            --crop-x:${crop.x}px;
            --crop-y:${crop.y}px;
            --crop-w:${crop.width}px;
            --crop-h:${crop.height}px;
          "
        ></div>
      `
    )
    .join("");

const caseSplash = (entry) => `
  <section class="case-splash reveal" style="--delay:50ms; --hero-bg:url('${entry.heroBackground}'); --hero-overlay:${entry.heroOverlay}">
    ${navMarkup({ overlay: true })}
    <div class="case-splash__surface">
      ${heroCropMarkup(entry)}
    </div>
  </section>
`;

const metaValueMarkup = (value) =>
  Array.isArray(value)
    ? `<div class="meta-lines">${value.map((line) => `<div>${line}</div>`).join("")}</div>`
    : `<div>${value}</div>`;

const sectionMarkup = (section) => `
  <section id="${section.id}" class="detail-section ${section.insights ? "detail-section--insights" : ""} reveal">
    <div class="detail-rail" aria-hidden="true"></div>
    <div class="detail-text ${section.panel ? "detail-text--panel" : ""}">
      ${
        section.panel
          ? `
            <div class="detail-panel">
              <div class="section-label">${section.kicker}</div>
              <h3>${section.heading}</h3>
              ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
            </div>
          `
          : `
            <div class="section-label">${section.kicker}</div>
            <h3>${section.heading}</h3>
            ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
          `
      }
      ${
        section.insights
          ? `
            <div class="insight-strip">
              ${section.insights.map(insightTile).join("")}
            </div>
          `
          : ""
      }
      ${
        section.quotes
          ? `
            <div class="insight-grid">
              ${section.quotes
                .map(
                  (quote) => `
                    <article class="quote-card">
                      <h4>${quote.title}</h4>
                      <p>${quote.body}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          `
          : ""
      }
      ${
        section.journey
          ? `
            <div class="journey-grid">
              ${section.journey
                .map(
                  (item) => `
                    <article class="journey-card">
                      <h4>${item.title}</h4>
                      <p>${item.body}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          `
          : ""
      }
      ${
        section.styleChips
          ? `
            <div class="style-grid">
              ${section.styleChips
                .map(
                  (item) => `
                    <article class="style-chip">
                      <h4>${item.title}</h4>
                      <p>${item.body}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          `
          : ""
      }
      ${
        section.solutionSteps
          ? `
            <div class="solution-flow">
              ${section.solutionSteps.map(solutionStepMarkup).join("")}
            </div>
          `
          : ""
      }
      ${
        section.solutionSequence
          ? solutionSequenceMarkup(section.solutionSequence)
          : ""
      }
      ${
        section.solutions
          ? `
            <div class="solution-grid">
              ${section.solutions
                .map(
                  (item) => `
                    <article class="solution-card">
                      <h4>${item.title}</h4>
                      <p>${item.body}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          `
          : ""
      }
      ${
        section.takeaways
          ? `
            <div class="takeaway-grid">
              ${section.takeaways
                .map(
                  (item) => `
                    <article class="takeaway-card">
                      <h4>${item.title}</h4>
                      <p>${item.body}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          `
          : ""
      }
      ${
        section.media
          ? `
            <div class="media-grid">
              ${section.media.map(mediaCard).join("")}
            </div>
          `
          : ""
      }
    </div>
  </section>
`;

const renderCaseStudy = (entry) => `
  <main class="page page--case page--case-${entry.slug} shell">
    ${caseSplash(entry)}
    <div class="case-wrap">
      <section id="overview" class="case-overview reveal" style="--delay:80ms">
        <aside class="case-sidebar">
          ${sideNavMarkup(entry)}
        </aside>
        <div class="case-main">
          <div class="section-label">TLDR;</div>
          <h2>Overview</h2>
          <p class="case-summary">${entry.overview.summary}</p>
          <div class="meta-grid">
            ${entry.overview.meta
              .map(
                (item) => `
                  <div class="meta-item">
                    <div class="meta-term">${item.term}</div>
                    <div class="meta-value">${metaValueMarkup(item.value)}</div>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      </section>
      ${entry.sections.map(sectionMarkup).join("")}
      ${
        entry.related
          ? `
            <section class="detail-section reveal">
              <div class="detail-rail">
                <div class="sticky-kicker">Next Project</div>
              </div>
              <div class="detail-text">
                <a class="pill-link" href="${resolveHref(entry.related.href)}">${entry.related.label}</a>
              </div>
            </section>
          `
          : ""
      }
    </div>
    ${footerMarkup()}
  </main>
`;

const renderers = {
  home: renderHome,
  "about-frommenu": renderAbout,
  "untitledlyrics-fromhome": () => renderCaseStudy(siteData.cases.untitled),
  "stitch-fromhome": () => renderCaseStudy(siteData.cases.stitch),
  "play-case-study": () => renderCaseStudy(siteData.cases.play)
};

app.innerHTML = (renderers[page] || renderHome)();
document.title = siteData.title;

const primeAutoplay = (video) => {
  video.muted = true;
  video.defaultMuted = true;
  video.loop = true;
  video.autoplay = true;
  video.playsInline = true;
  video.setAttribute("muted", "");
  video.setAttribute("autoplay", "");
  video.setAttribute("loop", "");
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");

  const attemptPlay = () => {
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  };

  if (video.readyState >= 2) {
    attemptPlay();
  } else {
    video.addEventListener("loadeddata", attemptPlay, { once: true });
  }
};

document.querySelectorAll("video").forEach(primeAutoplay);

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const projectStack = document.querySelector(".project-stack");
if (projectStack) {
  let projectStackScrollTimer;

  const suspendProjectHover = () => {
    if (projectStack.matches(":hover")) {
      projectStack.classList.add("is-hover-suspended");
      window.clearTimeout(projectStackScrollTimer);
      projectStackScrollTimer = window.setTimeout(() => {
        projectStack.classList.remove("is-hover-suspended");
      }, 120);
    }
  };

  window.addEventListener("wheel", suspendProjectHover, { passive: true });
  window.addEventListener("scroll", suspendProjectHover, { passive: true });
  projectStack.addEventListener("pointerleave", () => {
    projectStack.classList.remove("is-hover-suspended");
  });
}

const sectionLinks = Array.from(document.querySelectorAll(".case-nav a"));
if (sectionLinks.length) {
  const sectionMap = sectionLinks
    .map((link) => {
      const target = document.querySelector(link.getAttribute("href"));
      return target ? { link, target } : null;
    })
    .filter(Boolean);

  const updateActiveLink = () => {
    let active = sectionMap[0];
    for (const item of sectionMap) {
      const rect = item.target.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.22) {
        active = item;
      }
    }
    sectionMap.forEach((item) => item.link.classList.toggle("is-active", item === active));
  };

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink, { passive: true });
}
