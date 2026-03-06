// Protection : le carousel n'existe que sur index1.html
if (document.getElementById('carousel')) {

    const slides = [
        {
            image: "./visuel/Proposition 1.png",
            slogan: "Précision industrielle"
        },
        {
            image: "./visuel/Proposition 2.png",
            slogan: "Maîtrise de l’eau"
        },
        {
            image: "./visuel/Proposition 3.png",
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
                    <div class="blob-shimmer"></div>
                    <div class="blob-slogan-text">
                        <h2>${slide.slogan}</h2>
                    </div>
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
/*pour les gammes*/
const container3 = document.getElementById("gammes-container");

// Protection : seulement si l'élément existe sur la page
if (container3) {
  fetch('./gammes.json')
    .then(response => {
      if (!response.ok) throw new Error('Erreur réseau');
      return response.json();
    })
    .then(data => {
      const gammes = data.gammes || data;
      gammes.forEach(gamme => {
        const div = document.createElement("div");
        div.classList.add("col-12", "col-md-6", "col-lg-4");
        div.innerHTML = `
          <div class="card h-100 shadow-sm bg-light border-0">
            <div class="card-body">
              ${gamme.icone ? `<img src="${gamme.icone}" alt="${gamme.nom}" class="img-fluid mb-2">` : ""}
              <h5 class="card-title bg-primary text-white p-2 rounded">${gamme.nom}</h5>
              <p class="card-text">${gamme.description || ''}</p>
              <button class="btn btn-primary" onclick="window.location.href='produits.html?gamme=${gamme.nom}'">Voir les produits</button>
            </div>
          </div>
        `;
        container3.appendChild(div);
      });
    })
    .catch(error => {
      console.error('Erreur de chargement:', error);
      container3.innerHTML = '<p class="text-danger">Impossible de charger les projets.</p>';
    });
};

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute('data-target');
const count = +counter.innerText;

const speed = 50;

const increment = target / speed;

if(count < target){

counter.innerText = Math.ceil(count + increment);
setTimeout(updateCounter,40);

}else{

counter.innerText = target;

}

};

updateCounter();

});
