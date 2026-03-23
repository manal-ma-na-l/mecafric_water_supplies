   const slides = document.querySelectorAll(".hero-slide");
let index = 0;
function changeSlide(){
  slides.forEach(s => s.classList.remove("active"));
  index++;
  if(index >= slides.length){
    index = 0;
  }
  slides[index].classList.add("active");

}
setInterval(changeSlide,4000);
document.addEventListener('DOMContentLoaded', () => {
const svgEl   = document.getElementById('waveSvg');
const pathEl  = document.getElementById('wavePath');
const nodesEl = document.getElementById('nodes');
const sceneEl = document.getElementById('scene');

const cats = [
  {name:"Branchements", img:"./produit_image/Branchements/Icone Branchement-2.jpeg", href:"#"},
  {name:"Equipement", img:"./produit_image/Equipements de robinetterie/Icone Clapets - Dégradé.png", href:"#"},
  {name:"Raccordements", img:"./produit_image/Raccordements/Icone coude-2.png", href:"#"},
  {name:"Robinetterie", img:"./produit_image/Robinetterie/Icone Vanne - Dégradé.png", href:"#"},
  {name:"Tuyauterie", img:"./produit_image/Tuyauterie et accessoires/Icone boulon-2.jpg", href:"#"},
  {name:"Voiries", img:"./produit_image/Voiries/icone voiries-2.png", href:"#"}
];
const TOTAL = cats.length;
const AMP = 40;

function buildPath(sw, sh){
  let d = `M0 ${sh/2}`;
  for(let i=0;i<=100;i++){
    const x = (i/100)*sw;
    const y = sh/2 + Math.sin(i/100 * Math.PI*2) * AMP;
    d += ` L${x} ${y}`;
  }
  return d;
}
function render() {
  const sw = sceneEl.offsetWidth || window.innerWidth;
  const sh = sceneEl.offsetHeight || 380;

  svgEl.setAttribute('viewBox', `0 0 ${sw} ${sh}`);
  pathEl.setAttribute('d', buildPath(sw, sh));

  const len = pathEl.getTotalLength ? pathEl.getTotalLength() : 3000;
  pathEl.style.strokeDasharray = len;
  pathEl.style.strokeDashoffset = len;
  pathEl.style.animation = 'none';
  pathEl.offsetHeight; // reflow
  pathEl.style.animation = 'drawWave 1.8s cubic-bezier(.4,0,.2,1) .3s forwards';

  nodesEl.innerHTML = '';
  const scrollFactor = window.scrollY / window.innerHeight; // entre 0 et 1
  cats.forEach((cat, i)=>{
 const t = (2*i+1)/(2*TOTAL);
const len = pathEl.getTotalLength();
const point = pathEl.getPointAtLength(t * len);

const x = point.x;
const y = point.y;
    const isTop = y < sh/2;

    const node = document.createElement('div');
node.className = `node bottom`;
    node.style.position = 'absolute';
    node.style.left = x+'px';
    node.style.top  = y+'px';

    node.innerHTML = `
      <a class="node-circle" href="${cat.href}">
        <img src="${cat.img}" alt="${cat.name}" width="60px" height="60px">
      </a>
      <div class="node-label">
        <div class="node-line"></div>
        <div class="node-name">${cat.name}</div>
      </div>
    `;
    nodesEl.appendChild(node);
  });
}

window.addEventListener('scroll', render);
render();

});



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



