import { siteData } from "./content.js?v=20260810k";

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
        ? `<video src="${item.src}" autoplay muted loop playsinline></video>`
        : `<img src="${item.src}" alt="">`
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
    return `
      <div class="project-visual visual-landscape">
        <div class="project-visual__core">
          <img src="${project.image}" alt="${escapeHtml(project.title)}">
          <div class="phone-stage">
            ${deviceFrame({ type: "video", src: project.video }, "device-frame--compact")}
          </div>
        </div>
        ${
          project.sideVideo
            ? `<div class="project-reel"><video src="${project.sideVideo}" autoplay muted loop playsinline></video></div>`
            : ""
        }
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
    <section class="page-section stack-lg">
      ${siteData.home.projects
        .map(
          (project, index) => `
            <article class="project-card reveal" style="--delay:${100 + index * 55}ms">
              <a class="project-link" href="${resolveHref(project.href)}">
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

const renderMotion = () => `
  <main class="page page--motion shell">
    ${navMarkup()}
    <section class="motion-hero reveal" style="--delay:70ms">
      <h1>${siteData.motion.title}</h1>
      <p>${siteData.motion.description}</p>
    </section>
    <section class="motion-canvas reveal" style="--delay:110ms; --canvas-tone:${siteData.motion.canvasTone}; --frame-tone:${siteData.motion.frameTone}">
      <div class="motion-window motion-window--primary">
        <video src="${siteData.motion.videos[0]}" autoplay muted loop playsinline></video>
      </div>
      <div class="motion-window-row">
        <div class="motion-window motion-window--secondary">
          <video src="${siteData.motion.videos[1]}" autoplay muted loop playsinline></video>
        </div>
        <div class="motion-window motion-window--tertiary">
          <video src="${siteData.motion.videos[2]}" autoplay muted loop playsinline></video>
        </div>
      </div>
    </section>
    ${footerMarkup()}
  </main>
`;

const badgeMarkup = (badge) => `
  <div class="about-badge">
    <div class="about-badge__emblem ${badge.className}">
      <img src="${badge.image}" alt="">
    </div>
    <span>${badge.label}</span>
  </div>
`;

const renderAbout = () => `
  <main class="page page--about shell">
    ${navMarkup()}
    <section class="about-stage">
      <div class="about-left reveal" style="--delay:70ms">
        <div class="about-badges">
          ${siteData.about.badges.map(badgeMarkup).join("")}
        </div>
        <figure class="about-photo-card">
          <img src="${siteData.about.heroPhoto}" alt="Amy La in San Francisco">
        </figure>
      </div>
      <div class="about-right reveal" style="--delay:110ms">
        <h1>${siteData.about.title}</h1>
        <p class="about-intro">${siteData.about.paragraphs[0]}</p>
        <h2>${siteData.about.lead}</h2>
        <p class="about-body">${siteData.about.paragraphs[1]}</p>
        <div class="social-row">
          ${siteData.about.socials
            .map((social) => `<a href="${social.href}" target="_blank" rel="noreferrer">${social.label}</a>`)
            .join("")}
        </div>
        <div class="about-gallery">
          ${siteData.about.gallery.map((photo) => `<img src="${photo}" alt="">`).join("")}
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
        ? `<video src="${item.src}" autoplay muted loop playsinline></video>`
        : `<img src="${item.src}" alt="">`
    }
  </div>
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
  <section id="${section.id}" class="detail-section reveal">
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
  motion: renderMotion,
  "about-frommenu": renderAbout,
  "untitledlyrics-fromhome": () => renderCaseStudy(siteData.cases.untitled),
  "stitch-fromhome": () => renderCaseStudy(siteData.cases.stitch),
  "play-case-study": () => renderCaseStudy(siteData.cases.play)
};

app.innerHTML = (renderers[page] || renderHome)();
document.title = siteData.title;

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
