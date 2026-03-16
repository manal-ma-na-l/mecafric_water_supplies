 
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');

  // Fonction pour vérifier si un élément est visible à l'écran
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  // Fonction pour animer un compteur


  // On vérifie au scroll si les compteurs sont visibles
  function checkCounters() {
    counters.forEach(counter => {
      if (!counter.dataset.animated && isInViewport(counter)) {
        counter.dataset.animated = true; // marque comme animé
        animateCounter(counter);
      }
    });
  }

  window.addEventListener('scroll', checkCounters);
  checkCounters(); // vérifie aussi au chargement
});
const counters = document.querySelectorAll('.counter');

const observer1 = new IntersectionObserver((entries)=>{

entries.forEach(entry => {

if(entry.isIntersecting){

const counter = entry.target;
const target = +counter.getAttribute('data-target');

let count = 0;

const update = () => {

if(count < target){
count += target / 100;
counter.innerText = Math.ceil(count);
setTimeout(update,70);
}

};

update();

}

});

},{threshold:0.8});

counters.forEach(counter=>{
observer1.observe(counter);
});
// Animation au scroll
const observerequipe = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, entry.target.dataset.delay);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card-employe').forEach((card, i) => {
  card.dataset.delay = i % 3 * 150; // délai décalé par colonne
  observerequipe.observe(card);
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.4 // déclenche quand 30% visible
});

document.querySelectorAll('.img-left, .img-right')
  .forEach(img => observer.observe(img));
// Protection : le carousel n'existe que sur index1.html
if (document.getElementById('carousel')) {

    const slides = [
        {
            image: "./visuel/slide01.webp",
            slogan: "Précision industrielle"
        },
        {
            image: "./visuel/slide02.jpg",
            slogan: "Maîtrise de l’eau"
        },
        {
            image: "./visuel/slide03.jpg",
            slogan: "Custom solutions"
        }
    ];

    // Blob SVG morph paths pour chaque slide
    const blobConfigs = [
        {
            dur: "6s", begin: "0s",
            gradColors: ["rgba(100,200,255,0.22)", "rgba(30,100,200,0.06)"],
            gradDir: { x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
            strokeColor: "rgba(100,200,255,0.75)",
            paths: [
                "M250,60 C330,30 420,80 440,160 C460,240 430,340 360,390 C290,440 180,440 120,380 C60,320 50,220 80,150 C110,80 170,90 250,60 Z",
                "M250,50 C340,20 430,90 445,170 C460,250 420,350 345,395 C270,440 165,435 105,370 C45,305 55,200 90,140 C125,80 160,80 250,50 Z",
                "M250,65 C320,25 415,85 442,168 C469,251 432,345 358,393 C284,441 176,438 115,375 C54,312 52,208 84,148 C116,88 180,105 250,65 Z",
                "M250,55 C335,18 425,82 448,165 C471,248 435,342 360,390 C285,438 172,440 110,378 C48,316 50,210 82,148 C114,86 165,92 250,55 Z",
                "M250,60 C330,30 420,80 440,160 C460,240 430,340 360,390 C290,440 180,440 120,380 C60,320 50,220 80,150 C110,80 170,90 250,60 Z"
            ]
        },
        {
            dur: "7s", begin: "-2s",
            gradColors: ["rgba(80,180,255,0.20)", "rgba(20,80,180,0.05)"],
            gradDir: { x1: "100%", y1: "0%", x2: "0%", y2: "100%" },
            strokeColor: "rgba(150,220,255,0.68)",
            paths: [
                "M260,55 C355,20 440,90 452,175 C464,260 425,355 348,398 C271,441 162,436 100,372 C38,308 48,198 85,140 C122,82 165,90 260,55 Z",
                "M240,45 C345,15 445,95 458,180 C471,265 428,360 352,400 C276,440 160,438 96,374 C32,310 42,195 82,135 C122,75 135,75 240,45 Z",
                "M255,60 C350,22 445,88 455,172 C465,256 430,352 355,396 C280,440 168,438 106,374 C44,310 46,200 83,142 C120,84 160,98 255,60 Z",
                "M245,50 C348,18 442,92 454,177 C466,262 426,358 350,399 C274,440 164,437 102,373 C40,309 44,197 84,138 C124,79 142,82 245,50 Z",
                "M260,55 C355,20 440,90 452,175 C464,260 425,355 348,398 C271,441 162,436 100,372 C38,308 48,198 85,140 C122,82 165,90 260,55 Z"
            ]
        },
        {
            dur: "8s", begin: "-4s",
            gradColors: ["rgba(60,160,240,0.22)", "rgba(10,60,160,0.06)"],
            gradDir: { x1: "50%", y1: "0%", x2: "50%", y2: "100%" },
            strokeColor: "rgba(120,210,255,0.72)",
            paths: [
                "M250,70 C320,35 408,82 438,158 C468,234 442,338 370,388 C298,438 182,442 118,382 C54,322 52,215 78,148 C104,81 180,105 250,70 Z",
                "M250,58 C328,22 418,88 445,165 C472,242 438,342 365,392 C292,442 175,440 112,380 C49,320 50,210 78,145 C106,80 172,94 250,58 Z",
                "M250,75 C315,38 405,88 436,165 C467,242 438,340 368,390 C298,440 180,438 116,378 C52,318 52,218 80,150 C108,82 185,112 250,75 Z",
                "M250,62 C322,28 412,85 440,162 C468,239 440,338 368,389 C296,440 178,440 114,381 C50,322 50,212 78,147 C106,82 178,96 250,62 Z",
                "M250,70 C320,35 408,82 438,158 C468,234 442,338 370,388 C298,438 182,442 118,382 C54,322 52,215 78,148 C104,81 180,105 250,70 Z"
            ]
        },
        {
            dur: "5.5s", begin: "-1s",
            gradColors: ["rgba(40,140,230,0.22)", "rgba(100,220,255,0.08)"],
            gradDir: { x1: "0%", y1: "100%", x2: "100%", y2: "0%" },
            strokeColor: "rgba(80,200,255,0.78)",
            paths: [
                "M248,52 C342,18 438,88 455,172 C472,256 432,352 356,397 C280,442 165,440 104,376 C43,312 45,200 80,140 C115,80 154,86 248,52 Z",
                "M252,60 C348,24 436,92 452,176 C468,260 430,356 354,400 C278,444 162,442 100,378 C38,314 40,202 76,142 C112,82 156,96 252,60 Z",
                "M246,56 C340,20 436,90 452,174 C468,258 430,354 354,398 C278,442 164,440 102,377 C40,314 42,200 78,140 C114,80 152,92 246,56 Z",
                "M254,64 C350,28 440,94 456,178 C472,262 432,358 356,402 C280,446 164,444 102,380 C40,316 42,204 78,144 C114,84 158,100 254,64 Z",
                "M248,52 C342,18 438,88 455,172 C472,256 432,352 356,397 C280,442 165,440 104,376 C43,312 45,200 80,140 C115,80 154,86 248,52 Z"
            ]
        }
    ];

    function createBlobSVG(index, gradId) {
        const cfg = blobConfigs[index];
        const pathValues = cfg.paths.join(";");
        const keySplines = "0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1";
        return `
        <svg class="blob-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="${gradId}" x1="${cfg.gradDir.x1}" y1="${cfg.gradDir.y1}" x2="${cfg.gradDir.x2}" y2="${cfg.gradDir.y2}">
              <stop offset="0%" style="stop-color:${cfg.gradColors[0]}"/>
              <stop offset="100%" style="stop-color:${cfg.gradColors[1]}"/>
            </linearGradient>
            <filter id="glow${index}">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <path fill="url(#${gradId})">
            <animate attributeName="d" dur="${cfg.dur}" repeatCount="indefinite" begin="${cfg.begin}"
              values="${pathValues}" calcMode="spline" keySplines="${keySplines}"/>
          </path>
          <path stroke="${cfg.strokeColor}" stroke-width="1.8" fill="none" filter="url(#glow${index})">
            <animate attributeName="d" dur="${cfg.dur}" repeatCount="indefinite" begin="${cfg.begin}"
              values="${pathValues}" calcMode="spline" keySplines="${keySplines}"/>
          </path>
        </svg>`;
    }

    let currentIndex = 0;
    let autoplayInterval;

    const slidesContainer = document.getElementById('slides');
    const dotsContainer   = document.getElementById('dots');
    const prevBtn         = document.getElementById('prevBtn');
    const nextBtn         = document.getElementById('nextBtn');
    const carousel        = document.getElementById('carousel');

    function initSlides() {
        slides.forEach((slide, index) => {
            const gradId   = `blobGrad${index}`;
            const slideDiv = document.createElement('div');
            slideDiv.className = `slide ${index === 0 ? 'active' : ''}`;

            slideDiv.innerHTML = `
                <img src="${slide.image}" alt="${slide.slogan.replace(/<br>/g, ' ')}" class="slide-image" >
                <div class="overlay"></div>
                <div class="blob-container ${index === 0 ? 'show' : ''}">
                    ${createBlobSVG(index, gradId)}

                </div>
                <div class="water-waves">
                    <div class="wave wave-1"></div>
                    <div class="wave wave-2"></div>
                </div>
            `;

            slidesContainer.appendChild(slideDiv);

            const dot = document.createElement('button');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Diapositive ${index + 1}`);
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }

    function goToSlide(index) {
        const allSlides = document.querySelectorAll('.slide');
        const allDots   = document.querySelectorAll('.dot');
        const allBlobs  = document.querySelectorAll('.blob-container');

        allSlides[currentIndex].classList.remove('active');
        allDots[currentIndex].classList.remove('active');
        allBlobs[currentIndex].classList.remove('show');

        currentIndex = index;

        allSlides[currentIndex].classList.add('active');
        allDots[currentIndex].classList.add('active');
        setTimeout(() => allBlobs[currentIndex].classList.add('show'), 200);

        resetAutoplay();
    }

    function nextSlide() { goToSlide((currentIndex + 1) % slides.length); }
    function prevSlide()  { goToSlide((currentIndex - 1 + slides.length) % slides.length); }

    function startAutoplay() { autoplayInterval = setInterval(nextSlide, 5000); }
    function resetAutoplay() { clearInterval(autoplayInterval); startAutoplay(); }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft')  prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });

    // Swipe tactile
    let touchStartX = 0;
    carousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
    carousel.addEventListener('touchend',   e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) { dx < 0 ? nextSlide() : prevSlide(); }
    });

    // Smooth scroll navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    initSlides();
    startAutoplay();

    window.addEventListener('beforeunload', () => clearInterval(autoplayInterval));

} // fin if carousel
const AMP   = 130;
const TOTAL = 6;

const cats = [
  {
    img:  './svg/vanne2.png',
    name: 'Robinetterie',
        desc: 'Solutions fiables pour tous types d\'applications industrielles.',
    href: './produit.html?cat=robinetterie'
  },
  {
    img:  './svg/clapets2.png',
    name: 'Équipement',
    desc: 'Clapets, filtres et ventouses de haute qualité pour un réseau sûr.',
    href: './produit.html?cat=equipements'
  },
  {
    img:  './svg/boulon2.png',
    name: 'Raccordements',
    desc: 'Liaison sûre et étanche entre les éléments du réseau.',
    href: './produit.html?cat=raccordements'
  },
  {
    img:  './svg/coude2.png',
    name: 'Branchements',
    desc: 'Connexion fiable entre réseau principal et installations.',
    href: './produit.html?cat=branchements'
  },
  {
    img:  './svg/branchement2.png',
    
    name: 'Tuyauterie',
    desc: 'Tuyauterie robuste pour des réseaux efficaces et durables.',
    href: './produit.html?cat=tuyauterie'
  },
  {
    img:  './svg/voiries2.png',
    name: 'Voiries',
    desc: 'Équipements spécialisés pour vos installations de voirie.',
    href: './produit.html?cat=voiries'
  },
];

function buildPath(w, h) {
  let d = '';
  for (let i = 0; i <= 300; i++) {
    const t = i / 300;
    const x = t * w;
    const y = h/2 - Math.sin(t * Math.PI * 2) * AMP;
    d += (i === 0 ? 'M' : 'L') + `${x.toFixed(2)},${y.toFixed(2)} `;
  }
  return d;
}

const svgEl   = document.getElementById('waveSvg');
const pathEl  = document.getElementById('wavePath');
const nodesEl = document.getElementById('nodes');
const sceneEl = document.getElementById('scene');
function render() {
  const sw = sceneEl.offsetWidth || window.innerWidth;
  const sh = sceneEl.offsetHeight || 380;
  svgEl.setAttribute('viewBox', `0 0 ${sw} ${sh}`);
  pathEl.setAttribute('d', buildPath(sw, sh));

  const len = pathEl.getTotalLength ? pathEl.getTotalLength() : 3000;
  pathEl.style.strokeDasharray  = len;
  pathEl.style.strokeDashoffset = len;
  pathEl.style.animation = 'none';
  pathEl.offsetHeight; // reflow
  pathEl.style.animation = 'drawWave 1.8s cubic-bezier(.4,0,.2,1) .3s forwards';

  nodesEl.innerHTML = '';
  cats.forEach((cat, i) => {
    const t     = (2 * i + 1) / (2 * TOTAL);
    const x     = t * sw;
    const y     = sh/2 - Math.sin(t * Math.PI * 2) * AMP;
    const isTop = y < sh / 2;

    const node = document.createElement('div');
    node.className = `node ${isTop ? 'top' : 'bottom'}`;
    node.style.left = x + 'px';
    node.style.top  = y + 'px';

    node.innerHTML = `

      <a class="node-circle" href="${cat.href}">
        <img src="${cat.img}" alt="${cat.name}" with="60px" height="60px">
      </a>
      <div class="node-label">
        <div class="node-line"></div>
        <div class="node-name">${cat.name}</div>
      </div>
    `;
    nodesEl.appendChild(node);
  });
}

  // Écoute le scroll et vérifie aussi au chargement
  window.addEventListener('scroll', render);
  render();
  
  /*apropos*/
  // ── Floating particles ──────────────────────────────────────────────
  const container = document.getElementById('particles');
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 14 + 4;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      animation-duration:${Math.random()*12+8}s;
      animation-delay:${Math.random()*10}s;
    `;
    container.appendChild(p);
  }

  // ── 3-D tilt on mouse move ──────────────────────────────────────────
  const scene = document.getElementById('scene');
  const card  = document.getElementById('card');

  document.addEventListener('mousemove', e => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx; // -1 … 1
    const dy = (e.clientY - cy) / cy;
    card.style.transform = `rotateY(${dx * 12}deg) rotateX(${-dy * 10}deg)`;
    card.style.boxShadow = `
      ${-dx*20}px ${dy*20}px 80px rgba(92,61,143,0.55),
      0 10px 30px rgba(0,0,0,0.4)
    `;
  });

  document.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0) rotateX(0)';
    card.style.boxShadow = '';
  });

  // ── Typewriter effect on quote (preserves HTML) ─────────────────────
  const el = document.getElementById('quote-text');
  const fullHTML = el.innerHTML;

  // Strip to plain text for typing, but keep <br> as newlines
  const plainText = fullHTML
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&nbsp;/g,' ')
    .trim()
    // Normalize multiple spaces/newlines into single newlines between sentences
    .replace(/[ \t]+/g, ' ')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n');

  el.textContent = '';
  let i = 0;
  setTimeout(() => {
    const interval = setInterval(() => {
      const ch = plainText[i];
      if (ch === '\n') {
        el.appendChild(document.createElement('br'));
        // Double newline = paragraph gap
        if (plainText[i+1] === '\n') {
          el.appendChild(document.createElement('br'));
          i++; // skip the second \n
        }
      } else {
        el.appendChild(document.createTextNode(ch));
      }
      i++;
      if (i >= plainText.length) clearInterval(interval);
    }, 5);
  }, 1100);
/*pour les gammes*/


