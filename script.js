       // Configuration des slides
        const slides = [
            {
                image: "./visuel/slide01.webp",
                slogan: "Let's Flow Well"
            },
            {
               image: "./visuel/slide02.jpg" ,
                slogan: "Où il y a eau,<br>il y a Mecafric Water"
            },
            {
                image: "./visuel/slide03.jpg",
                slogan: "Performance et fiabilité<br>pour chaque goutte"
            },
            {
                image: "./visuel/slide04.jpg",
                slogan: "Custom solutions for <br>every installation"
            }
        ];

        let currentIndex = 0;
        let autoplayInterval;
        const canvases = [];
        const animationFrames = [];

        const slidesContainer = document.getElementById('slides');
        const dotsContainer = document.getElementById('dots');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const carousel = document.getElementById('carousel');

        function initSlides() {
            slides.forEach((slide, index) => {
                const slideDiv = document.createElement('div');
                slideDiv.className = `slide ${index ===  0 ? 'active' : ''}`;
                
                slideDiv.innerHTML = `
                    <img src="${slide.image}" alt="${slide.slogan.replace(/<br>/g, ' ')}" class="slide-image">
                    <canvas class="wave-canvas" width="1200" height="600"></canvas>
                    <div class="overlay"></div>
                    <div class="slogan-container">
                        <div class="slogan ${index === 0 ? 'show' : ''}">
                            <div class="glow"></div>
                            <h2>${slide.slogan}</h2>
                            <div class="droplet droplet-1"></div>
                            <div class="droplet droplet-2"></div>
                            <div class="droplet droplet-3"></div>
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

                const canvas = slideDiv.querySelector('.wave-canvas');
                canvases.push(canvas);
            });
        }

        function drawWaveEffect(canvas, time) {
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const width = canvas.width;
            const height = canvas.height;

            ctx.clearRect(0, 0, width, height);

            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
            gradient.addColorStop(0.5, 'rgba(135, 206, 250, 0.15)');
            gradient.addColorStop(1, 'rgba(30, 144, 255, 0.25)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 - i * 0.1})`;
                ctx.lineWidth = 2;

                for (let x = 0; x < width; x++) {
                    const y = height / 2 + 
                        Math.sin((x + time * 2 + i * 100) * 0.02) * 20 +
                        Math.sin((x + time * 3 + i * 150) * 0.01) * 30;
                    
                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
            }
        }

        function animateWaves(index) {
            let time = 0;
            const canvas = canvases[index];

            function animate() {
                drawWaveEffect(canvas, time);
                time += 1;
                animationFrames[index] = requestAnimationFrame(animate);
            }
            animate();
        }

        function stopWaveAnimation(index) {
            if (animationFrames[index]) {
                cancelAnimationFrame(animationFrames[index]);
            }
        }

        function goToSlide(index) {
            const allSlides = document.querySelectorAll('.slide');
            const allDots = document.querySelectorAll('.dot');
            const allSlogans = document.querySelectorAll('.slogan');

            allSlides[currentIndex].classList.remove('active');
            allDots[currentIndex].classList.remove('active');
            allSlogans[currentIndex].classList.remove('show');
            stopWaveAnimation(currentIndex);

            currentIndex = index;
            allSlides[currentIndex].classList.add('active');
            allDots[currentIndex].classList.add('active');

            setTimeout(() => {
                allSlogans[currentIndex].classList.add('show');
            }, 300);

            animateWaves(currentIndex);
            resetAutoplay();
        }

        function nextSlide() {
            const next = (currentIndex + 1) % slides.length;
            goToSlide(next);
        }

        function prevSlide() {
            const prev = (currentIndex - 1 + slides.length) % slides.length;
            goToSlide(prev);
        }

        function startAutoplay() {
            autoplayInterval = setInterval(nextSlide, 4000);
        }

        function resetAutoplay() {
            clearInterval(autoplayInterval);
            startAutoplay();
        }

        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);

        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });

        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        initSlides();
        animateWaves(0);
        startAutoplay();

        window.addEventListener('beforeunload', () => {
            clearInterval(autoplayInterval);
            animationFrames.forEach((id) => {
                if (id) cancelAnimationFrame(id);
            });
        });
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
}

// // ===== SLIDER =====
// let currentSlide = 0;
// let autoPlayTimer = null;

// const slides = document.querySelectorAll('.slide');
// const total = slides.length;
// const nextBtn = document.querySelector('.next');
// const prevBtn = document.querySelector('.prev');

// function buildLetters(slide, selector) {
//   const el = slide.querySelector(selector);
//   if (!el) return;
//   const text = el.textContent.trim();
//   el.innerHTML = '';
//   [...text].forEach((ch) => {
//     const s = document.createElement('span');
//     s.textContent = ch === ' ' ? '\u00A0' : ch;
//     el.appendChild(s);
//   });
// }

// function buildCascadeDrops(slide) {
//   const flow = slide.querySelector('.cascade-flow');
//   if (!flow) return;
//   flow.innerHTML = '';
//   for (let i = 0; i < 14; i++) {
//     const d = document.createElement('div');
//     d.className = 'cascade-drop';
//     d.style.left = (Math.random() * 100) + '%';
//     d.style.height = (20 + Math.random() * 40) + 'px';
//     d.style.animationDuration = (0.4 + Math.random() * 0.6) + 's';
//     d.style.animationDelay = (Math.random() * 0.4) + 's';
//     flow.appendChild(d);
//   }
// }

// function resetAndPlay(slide) {
//   const wrapper = slide.querySelector('.slogan-wrapper');
//   if (wrapper) {
//     const clone = wrapper.cloneNode(true);
//     wrapper.parentNode.replaceChild(clone, wrapper);
//   }
//   const effect = slide.dataset.effect;
//   if (effect === 'drop') {
//     buildLetters(slide, '.drop-text');
//     slide.querySelectorAll('.drop-text span').forEach((s, i) => {
//       s.style.animationDelay = (i * 0.07) + 's';
//     });
//   }
//   if (effect === 'wave') {
//     buildLetters(slide, '.wave-text');
//     slide.querySelectorAll('.wave-text span').forEach((s, i) => {
//       s.style.animationDelay = (i * 0.06) + 's';
//     });
//   }
//   if (effect === 'cascade') {
//     buildCascadeDrops(slide);
//   }
// }

// function goToSlide(index) {
//   if (index < 0) index = total - 1;
//   if (index >= total) index = 0;
//   currentSlide = index;
//   slides.forEach(s => s.classList.remove('active'));
//   resetAndPlay(slides[currentSlide]);
//   requestAnimationFrame(() => {
//     requestAnimationFrame(() => {
//       slides[currentSlide].classList.add('active');
//     });
//   });
// }

// function startAutoPlay() {
//   stopAutoPlay();
//   autoPlayTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
// }

// function stopAutoPlay() {
//   if (autoPlayTimer) clearInterval(autoPlayTimer);
// }

// // Flèches
// if (nextBtn) nextBtn.addEventListener('click', () => { goToSlide(currentSlide + 1); startAutoPlay(); });
// if (prevBtn) prevBtn.addEventListener('click', () => { goToSlide(currentSlide - 1); startAutoPlay(); });

// // Init
// if (total > 0) {
//   goToSlide(0);
//   startAutoPlay();
// }