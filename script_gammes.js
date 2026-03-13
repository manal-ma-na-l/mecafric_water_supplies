const gammes = [
  {
    num:"01", title:"Robinetterie",
    desc:"Vannes à opercule, papillon, guillotine. DN40 à DN1400, jusqu'à PN40.",
    svg:`<svg viewBox="0 0 64 64" fill="none" stroke="#334EAC" stroke-width="1.8">
      <circle cx="32" cy="32" r="13"/>
      <line x1="32" y1="5" x2="32" y2="19"/>
      <line x1="32" y1="45" x2="32" y2="59"/>
      <line x1="5" y1="32" x2="19" y2="32"/>
      <line x1="45" y1="32" x2="59" y2="32"/>
      <path d="M23 23l18 18M23 41l18-18" stroke-width="2"/>
    </svg>`
  },
  {
    num:"02", title:"Équipements de Robinetterie",
    desc:"Clapets, ventouses, filtres, réducteurs de pression, compteurs, poteaux incendie.",
    svg:`<svg viewBox="0 0 64 64" fill="none" stroke="#BAD6EB" stroke-width="1.8">
      <path d="M10 18h44l-16 20v14l-12-5V38z"/>
      <circle cx="32" cy="11" r="5"/>
      <line x1="32" y1="16" x2="32" y2="18"/>
    </svg>`
  },
  {
    num:"03", title:"Raccordements",
    desc:"Brides, coudes, tees, joints Gibault & universels, réductions fonte ductile.",
    svg:`<svg viewBox="0 0 64 64" fill="none" stroke="#334EAC" stroke-width="1.8">
      <line x1="4" y1="32" x2="60" y2="32" stroke-width="7" stroke-linecap="round"/>
      <line x1="32" y1="32" x2="32" y2="60" stroke-width="7" stroke-linecap="round"/>
      <circle cx="32" cy="32" r="7" fill="white" stroke="#334EAC" stroke-width="2"/>
    </svg>`
  },
  {
    num:"04", title:"Branchements",
    desc:"Robinets d'arrêt, clapets laiton, vannes à bille, colliers PEC, compteurs équerre.",
    svg:`<svg viewBox="0 0 64 64" fill="none" stroke="#BAD6EB" stroke-width="1.8">
      <line x1="5" y1="32" x2="59" y2="32" stroke-width="5" stroke-linecap="round"/>
      <circle cx="32" cy="32" r="13"/>
      <circle cx="32" cy="32" r="5" fill="#BAD6EB" opacity=".4" stroke="none"/>
      <line x1="32" y1="13" x2="32" y2="19"/>
      <line x1="26" y1="9" x2="38" y2="9"/>
    </svg>`
  },
  {
    num:"05", title:"Tuyauterie & Accessoires",
    desc:"Tubes noirs/galvanisés, brides acier, raccords PEHD, PVC, fonte malléable, boulons.",
    svg:`<svg viewBox="0 0 64 64" fill="none" stroke="#334EAC" stroke-width="1.8">
      <rect x="4" y="23" width="56" height="18" rx="2"/>
      <ellipse cx="4" cy="32" rx="3" ry="9"/>
      <ellipse cx="60" cy="32" rx="3" ry="9"/>
      <line x1="18" y1="23" x2="18" y2="41" stroke-width="1.2"/>
      <line x1="32" y1="23" x2="32" y2="41" stroke-width="1.2"/>
      <line x1="46" y1="23" x2="46" y2="41" stroke-width="1.2"/>
    </svg>`
  },
  {
    num:"06", title:"Voiries",
    desc:"Tampons D400/C250/B125, grilles de caniveau, capots anti-vandalisme, portes de niche.",
    svg:`<svg viewBox="0 0 64 64" fill="none" stroke="#BAD6EB" stroke-width="1.8">
      <rect x="6" y="6" width="52" height="52" rx="5"/>
      <rect x="15" y="15" width="34" height="34" rx="2"/>
      <line x1="15" y1="26" x2="49" y2="26"/>
      <line x1="15" y1="38" x2="49" y2="38"/>
      <line x1="26" y1="15" x2="26" y2="49"/>
      <line x1="38" y1="15" x2="38" y2="49"/>
    </svg>`
  }
];

const grid = document.getElementById('grid');
gammes.forEach(g => {
  const c = document.createElement('div');
  c.className = 'card';
  c.innerHTML = `
    <div class="card-icon">${g.svg}</div>
    <div class="card-body">
      <div class="card-num">Gamme ${g.num}</div>
      <div class="card-title">${g.title}</div>
    </div>`;
  grid.appendChild(c);
});
