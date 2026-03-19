const catalogue = {
  categories: [
    {
      id:"robinetterie", nom:"Robinetterie",
      produits:[
        { nom:"Vanne à Opercule F4-F5 (DN40–300)", image:"produit_image/Robinetterie/vanne_a_opercule.jpg", specs:{ Dimensions:"DN40 à DN300", Raccordement:"À brides PN10/16", "Temp. min":"-10°C", "Temp. max":"+70°C", "Pression max":"16 bars", Matière:"Fonte ductile EN GJS-500-7" }, icon:"valve" },
        { nom:"Vanne à Opercule F4-F5 (DN40–600)", image:"produit_image/Robinetterie/vanne_oca_tête_carré-2.jpg", specs:{ Dimensions:"DN40 à DN600", Raccordement:"À brides PN10/16", "Temp. min":"-10°C", "Temp. max":"+70°C", "Pression max":"16 bars / 10 bars >DN400", Matière:"Fonte ductile EN GJS-500-7" }, icon:"valve" },
        { nom:"Vanne à Papillon Sandwich — Levier & Réducteur", image:"produit_image/Robinetterie/vanne_ pappilon_levier.jpg", specs:{ Dimensions:"DN40 à DN400", Raccordement:"Entre brides ISO 7005-1", "Temp. min":"-10°C", "Temp. max":"+100°C", "Pression max":"PN10/16 — Class 150", Matière:"Fonte ductile époxy" }, icon:"butterfly" },
        { nom:"Vanne à Papillon — Oreilles Taraudées", image:"produit_image/Robinetterie/vanne_a_papillion_oreilles_tar.jpg", specs:{ Dimensions:"DN32 à DN1400", Raccordement:"Entre brides PN10/16", "Temp. min":"-20°C", "Temp. max":"+110°C", "Pression max":"16 bars ≤ DN300", Matière:"Fonte EN GJS-500-7, EPDM ACS" }, icon:"butterfly" },
        { nom:"Vanne à Papillon — Actionneur Élec./Pneumatique", image:"produit_image/Robinetterie/Vanne_a_papillon_sandwiche_avec_actionneur_électrique.jpg", specs:{ Dimensions:"DN25 à DN300", Raccordement:"Entre brides PN10", "Temp. min":"-10°C", "Temp. max":"+110°C", "Pression max":"Variable / modèle", Matière:"Fonte EN GJL-250" }, icon:"actuator" },
        { nom:"Vanne à Papillon — Double Bride & Double Excentration", image:"produit_image/Robinetterie/vanne_a_papillion_double_bride_double_excentration.jpg", specs:{ "Fonctionnement":"-10°C à +90°C", Étanchéité:"100%", Siège:"AISI 316 soudé", Joint:"Torique remplaçable" }, icon:"butterfly" },
        { nom:"Vanne à Papillon — Bride Motorisée DN350", image:"produit_image/Robinetterie/vanne_a_papillion_abride_motorise.jpg", specs:{ Dimensions:"DN350", Raccordement:"Brides standard", "Temp. min":"-10°C", "Temp. max":"+50°C", "Pression max":"16 bars" }, icon:"motor" },
        { nom:"Vanne à Guillotine", image:"produit_image/Robinetterie/vanne_guooltine.png", specs:{ Dimensions:"DN50 à DN800", Raccordement:"Entre brides PN10", "Temp. min":"-15°C", "Temp. max":"+130°C", "Pression max":"10 bars ≤ DN200", Matière:"Fonte EN GJL-250" }, icon:"gate" },
        { nom:"Robinet à Soupape à Brides", image:"produit_image/Robinetterie/roubinet_a_soupape.jpg", specs:{ Dimensions:"DN15 à DN200", Raccordement:"À brides RF PN40", "Temp. min":"-29°C", "Temp. max":"+400°C", "Pression max":"40 bars", Matière:"Acier" }, icon:"globe" },
        { nom:"Robinet à Flotteur à Brides", image:"produit_image/Robinetterie/robinet_flotteur_abride.jpg", specs:{ Dimensions:"DN40 à DN400", Raccordement:"À brides", "Temp. min":"-10°C", "Temp. max":"+90°C", "Pression max":"16 bars", Matière:"Fonte ductile / acier forgé" }, icon:"float" },
      ]
    },
    {
      id:"equipements", nom:"Équipements de Robinetterie",
      produits:[
        { nom:"Filtre à Tamis à Bride", image:"produit_image/Equipements de robinetterie/filtre_a_tamis_a_bride.jpg", specs:{ Dimensions:"DN15 à DN300", Raccordement:"À brides RF PN10/16", "Temp. max":"+120°C", "Pression max":"16 bars", Matière:"Fonte EN GJL-250 ou GJS-500-7" }, icon:"filter" },
        { nom:"Ventouse Triple Fonction", image:"produit_image/Equipements de robinetterie/ventouze_triple-fonctions.jpg", specs:{ Dimensions:"DN50 – DN200", Raccordement:"Par bride", "Temp. max":"+80°C", "Pression max":"PN10 ou PN16", Matière:"Fonte ductile GGG50" }, icon:"air" },
        { nom:"Ventouse Simple Fonction", image:"produit_image/Equipements de robinetterie/ventouse_simple_fonction.jpg", specs:{ Dimensions:"Ø1\" — DN40/50/65", Raccordement:"Femelle BSP", "Temp. max":"+60°C", "Pression max":"40 bars", Matière:"Fonte EN GJS 450-10" }, icon:"air" },
        { nom:"Clapet Anti-Retour à Battant — Bride", image:"produit_image/Equipements de robinetterie/clapet_anti_retour_battant_abride.jpg", specs:{ Dimensions:"DN40 à DN300", Raccordement:"À brides RF PN10/16", "Temp. max":"+120°C", "Pression max":"16 bars", Matière:"Fonte EN GJL-250" }, icon:"check" },
        { nom:"Clapet Anti-Retour à Boule Taraudé", image:"produit_image/Equipements de robinetterie/clapet_anti_retour_boule_traude.jpg", specs:{ Dimensions:"DN1\" à DN3\"", Raccordement:"Taraudé femelle BSP", "Temp. max":"+70°C", "Pression max":"10 bars", Matière:"Corps fonte EN GJS-400-15" }, icon:"check" },
        { nom:"Clapet Anti-Retour à Battant Sandwich", image:"produit_image/Equipements de robinetterie/clapet_anti_retour_battant_sandwich.jpg", specs:{ Dimensions:"DN40 à DN600", Raccordement:"Entre brides PN10/16", "Temp. max":"+180°C", "Pression max":"16 bars ≤ DN300", Matière:"Inox ASTM A351 CF8M" }, icon:"check" },
        { nom:"Clapet Anti-Retour — Bride Axial", image:"produit_image/Equipements de robinetterie/clapet_axial.png", specs:{ Dimensions:"DN50 à DN300", Raccordement:"À brides PN16 RF", "Temp. max":"+110°C", "Pression max":"16 bars", Matière:"Fonte EN GJL-250" }, icon:"check" },
        { nom:"Clapet Anti-Retour à Pied / Crépine", image:"produit_image/Equipements de robinetterie/clapets_anti_retour_a_pied_abride.jpg", specs:{ Dimensions:"DN50 à DN300", Raccordement:"À brides PN10/16 RF", "Temp. max":"+120°C", "Pression max":"16 bars", Matière:"Fonte EN GJL-250 ou GJS-400-15" }, icon:"check" },
        { nom:"Clapet Anti-Retour Double Battant", image:"produit_image/Equipements de robinetterie/clapet_anti_retour_double_battant.jpg", specs:{ Dimensions:"DN50 à DN600", Raccordement:"Entre brides PN10/16", "Temp. max":"+110°C", "Pression max":"16 bars ≤ DN300", Matière:"Fonte EN GJL-250" }, icon:"check" },
        { nom:"Réducteur de Pression", image:"produit_image/Equipements de robinetterie/reducteure_de_pression.jpg", specs:{ Dimensions:"DN50 – DN150", Raccordement:"À brides PN10/16", "Temp. max":"+60°C", "Pression max":"16 bars", Matière:"Fonte EN GJS-450-10" }, icon:"reducer" },
        { nom:"Compensateur de Dilatation — Caoutchouc", image:"produit_image/Equipements de robinetterie/compensateur-dilatation-epdm-2.jpg", specs:{ Dimensions:"DN32 à DN600", Raccordement:"À brides & BSP PN10/16", "Temp. max":"+100°C", "Pression max":"16 bars ≤ DN300" }, icon:"flex" },
        { nom:"Compteur à Bride — Eau Froide", image:"produit_image/Equipements de robinetterie/compteur_a_bride_pour_eau.jpg", specs:{ Dimensions:"DN50 à DN200", Raccordement:"À brides PN10/16 RF", "Temp. max":"+50°C", "Pression max":"16 bars" }, icon:"meter" },
        { nom:"Poteau d'Incendie", image:"produit_image/Equipements de robinetterie/poteau_incendie.jpg", specs:{ Usage:"Réseau eau sous pression", Prises:"Au-dessus du sol", Application:"Services incendie" }, icon:"fire" },
      ]
    },
    {
      id:"raccordements", nom:"Raccordements",
      produits:[
        { nom:"Adaptateur à Bride Universel", image:"produit_image/Raccordements/adaptateur_a_bride_universel.jpg", specs:{ Dimensions:"DN50 à DN400", "Temp. max":"+60°C", "Pression max":"16 bars ≤ DN200 / 10 bars >", Matière:"Fonte EN GJS-500-7" }, icon:"adapter" },
        { nom:"Bride Majeure Fonte Ductile — PVC/PEHD/Fonte", image:"produit_image/Raccordements/BRIDE MAJOUR EN FD POUR T-PVC ET PEHD ET FD.jpg", specs:{ Dimensions:"DN50 à DN400", Raccordement:"À brides PN10/16", "Pression max":"16 bars ≤ DN200", Matière:"Fonte EN GJS-500-7" }, icon:"flange" },
        { nom:"Bride Pleine Fonte PN10/16", image:"produit_image/Raccordements/Bride-pleine-fonte-pn1016.jpg", specs:{ Dimensions:"DN40 à DN350", Raccordement:"PN10/16 RF", "Pression max":"16 bars", Matière:"Fonte EN GJS-500-7" }, icon:"flange" },
        { nom:"Coude à Emboîtement Fonte — Tubes PVC", image:"produit_image/Raccordements/COUDE A EMBOITEMENT EN FD POUR T-PVC.jpg", specs:{ Dimensions:"90-2E063 à 90-2E400", "Pression service":"16 bars", "Pression épreuve":"24 bars", Température:"0°C à +50°C" }, icon:"elbow" },
        { nom:"Coude à Bride en Fonte Ductile", image:"produit_image/Raccordements/COUDE BRIDE EN FTE DUCTILE.jpg", specs:{ Raccordement:"Par brides PN10/16", "Temp. max":"+60°C", "Pression max":"10 ou 16 bars", Matière:"Fonte EN GJS-450-10" }, icon:"elbow" },
        { nom:"Esse de Réglage", image:"produit_image/Raccordements/ESSE DE RÉGLAGE.jpg", specs:{ Raccordement:"Par brides mobiles", "Temp. min":"-30°C", "Temp. max":"+70°C", "Pression max":"16 bars", Matière:"Fonte ductile" }, icon:"offset" },
        { nom:"Joint de Démontage Automatique", image:"produit_image/Raccordements/JOINT DE DEMONTAGE AUTOUBUTE EN FTE DUCTILE.jpg", specs:{ Dimensions:"DN50 à DN2000", Raccordement:"Par brides boulonnées", "Temp. max":"+70°C", "Pression max":"PN10 ou PN16", Matière:"Fonte ductile" }, icon:"dismount" },
        { nom:"Joint Gibault", image:"produit_image/Raccordements/joint gibault.jpg", specs:{ Dimensions:"DN50 à DN2000", "Temp. max":"+70°C", "Pression max":"Variable", Matière:"Fonte ductile" }, icon:"coupling" },
        { nom:"Joint Universel à Large Tolérance", image:"produit_image/Raccordements/JOINT UNIVERSEL LARGE TOLERANCE.jpg", specs:{ Dimensions:"DN100, DN200", "Temp. max":"+90°C", "Pression max":"PN10 ou PN16", Matière:"Fonte ductile" }, icon:"coupling" },
        { nom:"Réduction à Brides en Fonte Ductile", image:"produit_image/Raccordements/REDUCTION BRIDE EN FTE DUCTILE.jpg", specs:{ Dimensions:"DN50 à DN2000", Raccordement:"À brides", "Pression max":"PN10/16/25", Matière:"Fonte ductile" }, icon:"reducer" },
        { nom:"Stabilisateur d'Écoulement S-3D", image:"produit_image/Raccordements/STABILISATEUR D'ECOULEMENT S-3D.jpg", specs:{ Fonction:"Optimisation profil hydraulique", Application:"Amont équipements mesure" }, icon:"flow" },
        { nom:"Tee à 3 Emboîtements — Fonte Ductile PVC", image:"produit_image/Raccordements/TEE A 3 EMBOITEMENT EN FD POUR T-PVC.jpg", specs:{ Dimensions:"DN50 à DN400", "Temp. max":"+45°C", "Pression max":"16 bars ≤ DN63", Matière:"PVC" }, icon:"tee" },
        { nom:"Tee à Brides en Fonte Ductile", image:"produit_image/Raccordements/TEE BRIDE EN FTE DUCTILE.jpg", specs:{ Dimensions:"DN50 à DN400", Raccordement:"À brides PN10/16", "Temp. max":"+60°C", Matière:"Fonte ductile" }, icon:"tee" },
      ]
    },
    {
      id:"branchements", nom:"Branchements",
      produits:[
        { nom:"Clapet en Laiton", image:"produit_image/Branchements/clapet_en_laiton.jpg", specs:{ Dimensions:"DN3/8\" à DN4\"", Raccordement:"Femelle BSP", "Temp. max":"+100°C", "Pression max":"25 bars ≤ DN1\"", Matière:"Laiton CW617N-4MS EN 12165" }, icon:"valve" },
        { nom:"Collier PEC — Fonte Ductile PVC/PEHD/Fonte", image:"produit_image/Branchements/collier_pec_en_fonte.jpg", specs:{ Dimensions:"DN1/2\"-25 à DN1\"1/2-63", Raccordement:"Taraudé femelle BSP", "Temp. max":"+45°C", "Pression max":"12,5 bars" }, icon:"collar" },
        { nom:"Robinet d'Arrêt", image:"produit_image/Branchements/robinet_arret.jpg", specs:{ Dimensions:"DN15 à DN50", Raccordement:"À visser, MM", "Temp. max":"+90°C à +100°C", Matière:"Corps en laiton" }, icon:"stopcock" },
        { nom:"Robinet de Compteur Équerre", image:"produit_image/Branchements/robinet_de_compteure_equere.jpg", specs:{ Dimensions:"DN15 à DN40", Raccordement:"Mâle, écrou prisonnier BSP", "Temp. max":"+90°C / +110°C pointe", "Pression max":"20 bars ≤ DN1\"", Matière:"Laiton sans plomb CW510L" }, icon:"meter" },
        { nom:"Robinet de Compteur à Tournant", image:"produit_image/Branchements/robinet_de_compteure_tp_et_tce.jpg", specs:{ Dimensions:"DN15 à DN40", Raccordement:"Mâle, écrou prisonnier BSP", "Temp. max":"+90°C / +110°C pointe", "Pression max":"20 bars ≤ DN25" }, icon:"meter" },
        { nom:"Robinet PEC Vertical à Tige Pleine", image:"produit_image/Branchements/robinet_pec_verticale_tige_plein.jpg", specs:{ Dimensions:"DN40", Raccordement:"Angle", "Temp. max":"+90°C", "Pression max":"PN16", Matière:"Laiton DZR" }, icon:"stopcock" },
        { nom:"Tabernacle PM et GM", image:"produit_image/Branchements/taparnacle_pm_rt_gm.jpg", specs:{ Dimensions:"DN - DN1", "Pression max":"PN16", Matière:"Polypropylène" }, icon:"box" },
        { nom:"Vanne 3 Pièces Inox", image:"produit_image/Branchements/vanne_3_ pièces_Inox.jpg", specs:{ Dimensions:"DN1/4\" à DN4\"", Raccordement:"Femelle NPT", "Temp. min":"-20°C", "Temp. max":"+180°C", "Pression max":"63 bars ≤ DN3/4\"", Matière:"Inox ASTM A351 CF8M" }, icon:"valve" },
        { nom:"Vanne à Bille en Laiton", image:"produit_image/Branchements/vanne a bille en laiton.jpg", specs:{ Dimensions:"DN1/4\" à DN4\"", Raccordement:"Mâle/Femelle BSP", "Temp. max":"+120°C", "Pression max":"30 bars ≤ DN1\"", Matière:"Laiton CW617N-4MS EN 12165" }, icon:"ball" },
        { nom:"Vanne à Volant en Laiton", image:"produit_image/Branchements/vanne_a_volant_en_laiton.jpg", specs:{ Dimensions:"DN15, DN20, DN25", Raccordement:"Femelle/Femelle BSP", "Temp. max":"+110°C", "Pression max":"20 bars", Matière:"Laiton, joint EPDM" }, icon:"wheel" },
      ]
    },
    {
      id:"tuyauterie", nom:"Tuyauterie & Accessoires",
      produits:[
        { nom:"Tubes Noirs et Galvanisés", image:"produit_image/Tuyauterie et accessoires/TUBE S-S NOIR ET GALVANISE ET SH40 ET SH80.jpg", specs:{ Séries:"T3 / T10 / SCH40 / SCH80", Application:"Tuyauterie industrielle" }, icon:"pipe" },
        { nom:"Brides Plates, à Collerette et Pleines", image:"produit_image/Tuyauterie et accessoires/bride plat et accolorette et plein.jpg", specs:{ Dimensions:"DN15 à DN200", Raccordement:"PN10 à PN40", "Temp. max":"+450°C", "Pression max":"10 à 40 bars selon DN" }, icon:"flange" },
        { nom:"Manchette à Brides — Acier Galvanisé", image:"produit_image/Tuyauterie et accessoires/MANCHETTE BRIDE EN ACIER GALVANISE.jpg", specs:{ Dimensions:"DN40 à DN200", Raccordement:"À brides PN10/16 RF", "Temp. max":"+150°C", "Pression max":"16 bars", Matière:"Fonte EN GJL-250" }, icon:"sleeve" },
        { nom:"Raccord en Acier", image:"produit_image/Tuyauterie et accessoires/raccords de tuyaux en acier.jpg", specs:{ Raccordement:"À souder (BW)", "Temp. min":"-20°C", "Temp. max":"+300°C", Matière:"Acier carbone S235" }, icon:"fitting" },
        { nom:"Raccord en Fonte Malléable", image:"produit_image/Tuyauterie et accessoires/Raccordement.jpg", specs:{ Raccordement:"Filetage BSP", "Temp. max":"+300°C", "Pression max":"25 bars", Matière:"Fonte malléable EN-GJMB-350-10" }, icon:"fitting" },
        { nom:"Boulons Cadmiés", image:"produit_image/Tuyauterie et accessoires/boulon cadmie.jpg", specs:{ Traitement:"Cadmiage anti-corrosion", Conformité:"Normes industrielles" }, icon:"bolt" },
        { nom:"Raccord en PEHD", image:"produit_image/Tuyauterie et accessoires/Raccord en PEHD.jpg", specs:{ Raccordement:"Femelle/Mâle BSP ou tube PE", "Temp. max":"+45°C", "Pression max":"16 bars ≤ DN63", Matière:"Polypropylène" }, icon:"fitting" },
        { nom:"Raccord en PVC Pression", image:"produit_image/Tuyauterie et accessoires/Raccord en pcv de pression.jpg", specs:{ Raccordement:"Soudure à froid (solvant)", "Temp. max":"+20°C", "Pression max":"16 bars", Matière:"PVC rigide" }, icon:"fitting" },
      ]
    },
    {
      id:"voiries", nom:"Voiries",
      produits:[
        { nom:"Tampon D400 – C250", image:"produit_image/Voiries/TAMPON BMX .jpg", specs:{ Classe:"D400 - C250", Matière:"Fonte ductile GGG 500-7 / GJS 450-10", Norme:"EN 124", Fabrication:"Moulage sur plaques modèles" }, icon:"manhole" },
        { nom:"Tampon B125", image:"produit_image/Voiries/tompon B125.jpg", specs:{ Classe:"B125", Matière:"Fonte ductile GGG 500-7 / GJS 450-10", Norme:"EN 124", Fabrication:"Moulage sur plaques modèles" }, icon:"manhole" },
        { nom:"Grille de Caniveau", image:"produit_image/Voiries/GRILLE DE CANIVEAU.jpg", specs:{ Matière:"Fonte ductile ou fonte grise", Norme:"EN 124", Forme:"Rectangulaire ou carrée" }, icon:"grate" },
        { nom:"Capot Anti-Vandalisme", image:"produit_image/Voiries/capot anti-vandal.jpg", specs:{ Matière:"Fonte ductile ou acier galvanisé", Fonction:"Protection équipements enterrés" }, icon:"cap" },
        { nom:"Porte de Niche en Acier", image:"produit_image/Voiries/porte niche.jpg", specs:{ Matière:"Acier galvanisé à chaud", Usage:"Protection compteurs & équipements réseau" }, icon:"door" },
      ]
    }
  ]
};

const icons = {
  valve:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="32" cy="32" r="14"/><line x1="32" y1="4" x2="32" y2="18"/><line x1="32" y1="46" x2="32" y2="60"/><line x1="4" y1="32" x2="18" y2="32"/><line x1="46" y1="32" x2="60" y2="32"/><path d="M22 22l20 20M22 42l20-20" stroke-width="2"/></svg>`,
  butterfly:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="14" width="10" height="36" rx="2"/><rect x="48" y="14" width="10" height="36" rx="2"/><ellipse cx="32" cy="32" rx="14" ry="14"/><line x1="32" y1="18" x2="32" y2="46" stroke-width="2.5"/></svg>`,
  actuator:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="12" y="22" width="40" height="28" rx="3"/><path d="M24 22V14h16v8"/><rect x="28" y="30" width="8" height="12" rx="1"/><line x1="32" y1="42" x2="32" y2="50"/></svg>`,
  gate:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="32" y1="4" x2="32" y2="60" stroke-width="2"/><rect x="20" y="20" width="24" height="24" rx="1"/><line x1="4" y1="32" x2="20" y2="32"/><line x1="44" y1="32" x2="60" y2="32"/></svg>`,
  globe:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="32" cy="32" r="20"/><path d="M32 12c-8 8-8 24 0 40"/><path d="M32 12c8 8 8 24 0 40"/><line x1="12" y1="32" x2="52" y2="32"/></svg>`,
  float:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="48" cy="48" r="10"/><path d="M16 32h20l8-12"/><rect x="8" y="26" width="12" height="12" rx="2"/></svg>`,
  filter:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 16h48l-18 22v16l-12-6V38z"/></svg>`,
  air:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="32" cy="32" r="14"/><path d="M32 4v28"/><path d="M32 32l18-18"/><circle cx="32" cy="32" r="4" fill="currentColor" opacity=".5"/></svg>`,
  check:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 32h48"/><path d="M20 20l12-12 12 12v28l-12 12-12-12z"/><line x1="32" y1="24" x2="32" y2="40"/></svg>`,
  reducer:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 20h20v24H4z"/><path d="M40 26h20v12H40z"/><path d="M24 20l16 6v12l-16 6z"/></svg>`,
  flex:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 32 Q20 20 32 32 Q44 44 56 32" stroke-width="2.5"/><circle cx="8" cy="32" r="5"/><circle cx="56" cy="32" r="5"/></svg>`,
  meter:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="12" y="18" width="40" height="30" rx="3"/><path d="M22 26h20M22 34h12"/><circle cx="40" cy="44" r="4"/><line x1="32" y1="4" x2="32" y2="18"/></svg>`,
  fire:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M32 8c4 8 12 12 12 22a12 12 0 01-24 0c0-6 4-10 6-14 0 6 4 10 6 10 0-6-4-12 0-18z"/><line x1="32" y1="42" x2="32" y2="60"/><line x1="20" y1="60" x2="44" y2="60"/></svg>`,
  adapter:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="24" width="16" height="16"/><rect x="44" y="28" width="16" height="8"/><path d="M20 28l24-4v16l-24-4z"/></svg>`,
  flange:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="20" width="56" height="24" rx="2"/><circle cx="14" cy="32" r="4"/><circle cx="50" cy="32" r="4"/><rect x="24" y="26" width="16" height="12"/></svg>`,
  elbow:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 32h24v-24" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
  offset:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 20h16l16 24h16" stroke-width="3" stroke-linecap="round"/></svg>`,
  dismount:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="26" width="12" height="12"/><rect x="48" y="26" width="12" height="12"/><path d="M16 32h8l4-8 8 16 4-8h8"/></svg>`,
  coupling:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="4" y1="32" x2="20" y2="32" stroke-width="8" stroke-linecap="round"/><line x1="44" y1="32" x2="60" y2="32" stroke-width="8" stroke-linecap="round"/><rect x="20" y="24" width="24" height="16" rx="2"/></svg>`,
  flow:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 32h48M44 20l12 12-12 12" stroke-width="2"/><circle cx="20" cy="32" r="6"/><circle cx="36" cy="32" r="4"/></svg>`,
  tee:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="4" y1="32" x2="60" y2="32" stroke-width="8" stroke-linecap="round"/><line x1="32" y1="32" x2="32" y2="60" stroke-width="8" stroke-linecap="round"/></svg>`,
  collar:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="4" y1="32" x2="60" y2="32" stroke-width="10" stroke-linecap="round"/><circle cx="32" cy="32" r="12"/><line x1="32" y1="20" x2="32" y2="8" stroke-width="2"/></svg>`,
  stopcock:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="4" y1="32" x2="60" y2="32" stroke-width="6" stroke-linecap="round"/><circle cx="32" cy="32" r="12"/><line x1="32" y1="12" x2="32" y2="20"/><line x1="26" y1="8" x2="38" y2="8"/></svg>`,
  box:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="10" y="16" width="44" height="36" rx="2"/><line x1="10" y1="28" x2="54" y2="28"/><line x1="32" y1="16" x2="32" y2="52"/></svg>`,
  ball:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="4" y1="32" x2="20" y2="32"/><line x1="44" y1="32" x2="60" y2="32"/><circle cx="32" cy="32" r="14"/><circle cx="32" cy="32" r="6" fill="currentColor" opacity=".4"/></svg>`,
  wheel:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="32" cy="18" r="10"/><line x1="22" y1="18" x2="8" y2="18"/><line x1="42" y1="18" x2="56" y2="18"/><line x1="32" y1="28" x2="32" y2="60"/><line x1="20" y1="60" x2="44" y2="60"/></svg>`,
  pipe:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 24h56v16H4z"/><ellipse cx="4" cy="32" rx="4" ry="8"/><ellipse cx="60" cy="32" rx="4" ry="8"/></svg>`,
  sleeve:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="14" y="22" width="36" height="20" rx="2"/><line x1="4" y1="32" x2="14" y2="32" stroke-width="6"/><line x1="50" y1="32" x2="60" y2="32" stroke-width="6"/></svg>`,
  fitting:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 20h24v24H20z"/><line x1="8" y1="28" x2="20" y2="28"/><line x1="8" y1="36" x2="20" y2="36"/><line x1="44" y1="28" x2="56" y2="28"/><line x1="44" y1="36" x2="56" y2="36"/></svg>`,
  bolt:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="32" y1="4" x2="32" y2="60"/><path d="M22 10h20M22 16h20M22 48h20M22 54h20"/><rect x="22" y="22" width="20" height="20" rx="1"/></svg>`,
  manhole:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="56" height="56" rx="4"/><rect x="14" y="14" width="36" height="36" rx="2"/><line x1="14" y1="22" x2="50" y2="22"/><line x1="14" y1="32" x2="50" y2="32"/><line x1="14" y1="42" x2="50" y2="42"/></svg>`,
  grate:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="56" height="56" rx="2"/><line x1="4" y1="16" x2="60" y2="16"/><line x1="4" y1="28" x2="60" y2="28"/><line x1="4" y1="40" x2="60" y2="40"/><line x1="4" y1="52" x2="60" y2="52"/><line x1="20" y1="4" x2="20" y2="60"/><line x1="36" y1="4" x2="36" y2="60"/><line x1="52" y1="4" x2="52" y2="60"/></svg>`,
  cap:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 44l24-36 24 36z"/><line x1="8" y1="44" x2="56" y2="44"/></svg>`,
  door:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="12" y="8" width="40" height="52" rx="2"/><circle cx="42" cy="34" r="3"/></svg>`,
  motor:`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="20" y="8" width="24" height="20" rx="2"/><line x1="32" y1="28" x2="32" y2="36"/><path d="M12 36h40v20H12z"/><circle cx="24" cy="50" r="4"/><circle cx="40" cy="50" r="4"/></svg>`,
};

function createModal() {
  const overlay = document.createElement('div');
  overlay.id = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box" id="modal-box">
      <button class="modal-close" id="modal-close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <div class="modal-inner">
        <div class="modal-img-col"><div class="modal-img-wrap" id="modal-img-wrap"></div></div>
        <div class="modal-content-col">
          <p class="modal-category" id="modal-category"></p>
          <h2 class="modal-title" id="modal-title"></h2>
          <div class="modal-divider"></div>
          <div class="modal-specs" id="modal-specs"></div>
          <a href="./formulaire.html" class="modal-cta">Demander un devis</a>
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  const close = () => { overlay.classList.remove('open'); document.body.style.overflow = ''; };
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.getElementById('modal-close').addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

function openModal(produit, catNom) {
  document.getElementById('modal-category').textContent = catNom;
  document.getElementById('modal-title').textContent = produit.nom;
  const imgWrap = document.getElementById('modal-img-wrap');
  if (produit.image) {
    imgWrap.innerHTML = `<img src="${produit.image}" alt="${produit.nom}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
      <div class="modal-img-fallback" style="display:none">${icons[produit.icon]||icons.valve}</div>`;
  } else {
    imgWrap.innerHTML = `<div class="modal-img-fallback">${icons[produit.icon]||icons.valve}</div>`;
  }
  document.getElementById('modal-specs').innerHTML = Object.entries(produit.specs||{}).map(([k,v])=>`
    <div class="modal-spec-row">
      <span class="modal-spec-key">
        <svg class="spec-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 5v3l2 2"/></svg>${k}
      </span>
      <span class="modal-spec-val">${v}</span>
    </div>`).join('');
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function buildUI() {

  const tabBar = document.getElementById('tabBar');
  const sections = document.getElementById('sections');
   const params = new URLSearchParams(window.location.search);
const selectedCat = params.get("cat");
  createModal(); // une seule fois

  catalogue.categories.forEach((cat, ci) => {

    const isActive = selectedCat
      ? cat.id === selectedCat
      : ci === 0;

    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (isActive ? ' active' : '');
    btn.textContent = cat.nom;
    btn.dataset.target = cat.id;
    tabBar.appendChild(btn);
    const sec = document.createElement('div');
    sec.className = 'cat-section' + (isActive ? ' active' : '');
    sec.id = 'sec-' + cat.id;

    sec.innerHTML = `
      <div class="cat-header">
        <span class="cat-title">${cat.nom}</span>
      </div>
      <div class="product-grid" id="grid-${cat.id}"></div>
    `;

    sections.appendChild(sec);

    const grid = sec.querySelector('.product-grid');

    cat.produits.forEach((p, pi) => {
      const specEntries = Object.entries(p.specs || {}).slice(0,3);
      const card = document.createElement('div');
      card.className = 'product-card';
      card.style.animationDelay = (pi*0.06)+'s';
      const iconSvg = icons[p.icon] || icons.valve;
      card.innerHTML = `
        <div class="card-img-wrap">
          ${p.image
            
            ? `<img class="card-product-img" src="${p.image}" alt="${p.nom}"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
               <div class="img-placeholder" style="display:none">${iconSvg}</div>`
            : `<div class="img-placeholder">${iconSvg}</div>`}
        </div>

        <div class="card-body">
                  <button class="savoir-plus-btn">
                <div class="card-name">${p.nom}</div>
          </button>
       
          </div>
        </div>
      `;

      card.querySelector('.savoir-plus-btn')
          .addEventListener('click', () => openModal(p, cat.nom));
       card.querySelector('.card-product-img')
       .addEventListener('click',() => openModal(p, cat.nom))   ;

      grid.appendChild(card);

    });

  });

  tabBar.addEventListener('click', e => {

    const btn = e.target.closest('.tab-btn');
    if (!btn) return;

    document.querySelectorAll('.tab-btn')
      .forEach(b => b.classList.remove('active'));

    document.querySelectorAll('.cat-section')
      .forEach(s => s.classList.remove('active'));

    btn.classList.add('active');

    document.getElementById('sec-' + btn.dataset.target)
      .classList.add('active');

  });

}

buildUI();