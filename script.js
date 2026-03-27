const slides = document.querySelectorAll(".hero-slide");
let index = 0;

function changeSlide() {
  if (!slides.length) return;

  slides.forEach((s) => s.classList.remove("active"));
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  slides[index].classList.add("active");
}

if (slides.length > 1) {
  setInterval(changeSlide, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-links");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const opened = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", opened ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const svgEl = document.getElementById("waveSvg");
  const pathEl = document.getElementById("wavePath");
  const nodesEl = document.getElementById("nodes");
  const sceneEl = document.getElementById("scene");

  if (!svgEl || !pathEl || !nodesEl || !sceneEl) return;

  const cats = [
    { name: "Robinetterie", img: "./produit_image/Robinetterie/Icone Vanne - Dégradé.png", href: "./produit.html?cat=robinetterie" },
    { name: "Équipement", img: "./produit_image/Equipements de robinetterie/Icone Clapets - Dégradé.png", href: "./produit.html?cat=equipements" },
    { name: "Raccordements", img: "./produit_image/Raccordements/Icone coude-2.png", href: "./produit.html?cat=raccordements" },
    { name: "Branchements", img: "./produit_image/Branchements/vanneoca.jpeg", href: "./produit.html?cat=branchements" },
    { name: "Tuyauterie", img: "produit_image/Branchements/tyauterie.jpeg", href: "./produit.html?cat=tuyauterie" },
    { name: "Voiries", img: "./produit_image/Voiries/icone voiries-2.png", href: "./produit.html?cat=voiries" }
  ];

  const TOTAL = cats.length;
  const AMP = 40;
  let nodes = [];
  let revealTimers = [];
  let hasAnimated = false;

  function buildPath(sw, sh) {
    let d = `M0 ${sh / 2}`;
    for (let i = 0; i <= 100; i++) {
      const x = (i / 100) * sw;
      const y = sh / 2 + Math.sin((i / 100) * Math.PI * 2) * AMP;
      d += ` L${x} ${y}`;
    }
    return d;
  }

  function resetWaveAnimation() {
    const len = pathEl.getTotalLength ? pathEl.getTotalLength() : 3000;
    pathEl.style.strokeDasharray = len;
    pathEl.style.strokeDashoffset = len;
    pathEl.style.animation = "none";
    pathEl.offsetHeight;
    pathEl.style.animation = "drawWave 1.8s cubic-bezier(.4,0,.2,1) .3s forwards";
  }

  function createNodes() {
    nodesEl.innerHTML = "";
    nodes = [];
    const len = pathEl.getTotalLength();

    cats.forEach((cat, i) => {
      const t = (2 * i + 1) / (2 * TOTAL);
      const point = pathEl.getPointAtLength(t * len);

      const node = document.createElement("div");
      node.className = "node bottom is-hidden";
      node.style.position = "absolute";
      node.style.left = `${point.x}px`;
      node.style.top = `${point.y}px`;
      node.innerHTML = `
        <a class="node-circle" href="${cat.href}">
          <img src="${cat.img}" alt="${cat.name}" width="60" height="60">
        </a>
        <div class="node-label">
          <div class="node-line"></div>
          <div class="node-name">${cat.name}</div>
        </div>
      `;

      nodesEl.appendChild(node);
      nodes.push({ el: node, t });
    });
  }

  function renderPath() {
    const sw = sceneEl.offsetWidth || window.innerWidth;
    const sh = sceneEl.offsetHeight || 380;

    svgEl.setAttribute("viewBox", `0 0 ${sw} ${sh}`);
    pathEl.setAttribute("d", buildPath(sw, sh));
  }

  function positionNodes() {
    const len = pathEl.getTotalLength();
    nodes.forEach((nodeObj) => {
      const point = pathEl.getPointAtLength(nodeObj.t * len);
      nodeObj.el.style.left = `${point.x}px`;
      nodeObj.el.style.top = `${point.y}px`;
    });
  }

  function clearRevealTimers() {
    revealTimers.forEach((timer) => clearTimeout(timer));
    revealTimers = [];
  }

  function hideNodes() {
    clearRevealTimers();
    nodes.forEach((nodeObj) => {
      nodeObj.el.classList.remove("is-visible");
      nodeObj.el.classList.add("is-hidden");
    });
    hasAnimated = false;
  }

  function revealNodes() {
    clearRevealTimers();
    resetWaveAnimation();

    nodes.forEach((nodeObj, i) => {
      const timer = window.setTimeout(() => {
        nodeObj.el.classList.remove("is-hidden");
        nodeObj.el.classList.add("is-visible");
      }, 220 + i * 180);
      revealTimers.push(timer);
    });

    hasAnimated = true;
  }

  renderPath();
  createNodes();
  positionNodes();

  window.addEventListener("resize", () => {
    renderPath();
    positionNodes();
  });

  const sceneObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        revealNodes();
      } else if (!entry.isIntersecting) {
        hideNodes();
      }
    });
  }, { threshold: 0.35 });

  sceneObserver.observe(sceneEl);
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const section = document.querySelector(".counters-section");
  const statLabels = document.querySelectorAll(".stat-label");

  if (statLabels.length >= 3) {
    statLabels[0].textContent = "Projets réalises par an";
    statLabels[1].textContent = "Clients Mecafric Water";
    statLabels[2].textContent = "Produits références";
  }

  if (!counters.length || !section) return;

  let animationFrame;
  let startTime;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function getCounterDuration(target) {
    return Math.min(32000, 16000 + Math.log10(target + 1) * 7000);
  }

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;

    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const duration = getCounterDuration(target);
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      counter.innerText = Math.floor(easedProgress * target);
    });

    const hasActiveCounter = Array.from(counters).some((counter) => {
      const target = +counter.getAttribute("data-target");
      return (timestamp - startTime) / getCounterDuration(target) < 1;
    });

    if (hasActiveCounter) {
      animationFrame = requestAnimationFrame(animate);
    }
  }

  function startAnimation() {
    cancelAnimationFrame(animationFrame);
    startTime = null;
    animationFrame = requestAnimationFrame(animate);
  }

  function resetCounters() {
    counters.forEach((counter) => {
      counter.innerText = 0;
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startAnimation();
      } else {
        resetCounters();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  const servicesSection = document.querySelector(".services-section");
  const serviceCards = servicesSection?.querySelectorAll(".service-card");
  if (!servicesSection || !serviceCards?.length || servicesSection.dataset.servicesStatic === "true") return;

  let currentIndex = 1;
  let sliderTimer = null;
  let hasStarted = false;

  function applyServicesState(activeIndex) {
    serviceCards.forEach((card, index) => {
      card.classList.remove("is-front", "is-left", "is-right");

      if (index === activeIndex) {
        card.classList.add("is-front");
      } else if (index === (activeIndex + serviceCards.length - 1) % serviceCards.length) {
        card.classList.add("is-left");
      } else {
        card.classList.add("is-right");
      }
    });
  }

  function startServicesSlider() {
    if (hasStarted) return;
    hasStarted = true;
    servicesSection.classList.add("is-active");
    applyServicesState(currentIndex);

    sliderTimer = window.setInterval(() => {
      currentIndex = (currentIndex + 1) % serviceCards.length;
      applyServicesState(currentIndex);

      if (currentIndex === 1) {
        window.clearInterval(sliderTimer);
      }
    }, 2200);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startServicesSlider();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(servicesSection);
});

document.addEventListener("DOMContentLoaded", () => {
  const servicesSection = document.querySelector('.services-section[data-services-static="true"]');
  const cards = servicesSection?.querySelectorAll(".service-card");
  if (!servicesSection || !cards?.length) return;

  function applySpotlight(index) {
    cards.forEach((card, cardIndex) => {
      card.classList.toggle("is-spotlight", cardIndex === index);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        servicesSection.classList.add("is-revealed");
        applySpotlight(1);
      }
    });
  }, { threshold: 0.25 });

  observer.observe(servicesSection);
});
