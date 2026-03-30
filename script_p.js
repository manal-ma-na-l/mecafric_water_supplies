const catalogue = {
  categories: [
    {
      id: "robinetterie",
      nom: "Robinetterie",
      produits: [
        { nom: "Vanne à opercule à volant F4", image: "produit_image/Robinetterie/VANNE À OPERCULE A VOLANT_F4_300 .jpeg", specs: { Dimensions: "DN40 à DN300", Raccordement: "À brides PN10/16", "Température Mini": "-10°C", "Température Maxi": "+90°C", "Pression Maxi": "16 bars", Matière: "Corps en fonte ductile EN GJS-500-7" }, icon: "valve" },
        { nom: "Vanne à opercule à volant F5", image: "produit_image/Robinetterie/VANNE À OPERCULE A VOLANT - F5_300.png", specs: { Dimensions: "DN40 à DN300", Raccordement: "À brides PN10/16", "Température Mini": "-10°C", "Température Maxi": "+90°C", "Pression Maxi": "16 bars", Matière: "Corps en fonte ductile EN GJS-500-7" }, icon: "valve" },
        { nom: "Vanne à opercule à volant F4 grand diamètre", image: "produit_image/Robinetterie/VANNE À OPERCULE A VOLANT – F4_600.png", specs: { Dimensions: "DN40 à DN600", Raccordement: "À brides PN10/16", "Température Mini": "-10°C", "Température Maxi": "+90°C", "Pression Maxi": "16 Bars jusqu’au DN400, 10 bars au-delà", Matière: "Corps fonte ductile EN GJS-500-7" }, icon: "valve" },
        { nom: "Vanne à opercule à volant F5 grand diamètre", image: "produit_image/Robinetterie/VANNE À OPERCULE A VOLANT - F5_600.jpeg", specs: { Dimensions: "DN40 à DN600", Raccordement: "À brides PN10/16", "Température Mini": "-10°C", "Température Maxi": "+90°C", "Pression Maxi": "16 Bars jusqu’au DN400, 10 bars au-delà", Matière: "Corps fonte ductile EN GJS-500-7" }, icon: "valve" },
        { nom: "Vanne à papillon sandwich à levier", image: "produit_image/Robinetterie/VANNE À PAPILLON SANDWICH A LEVIER_ A REDUCTEUR.jpeg", specs: { Commande: "À levier", Dimensions: "DN40 à DN400", Raccordement: "Entre brides PN10/16/#150", "Température Mini": "-10°C", "Température Maxi": "+110°C", "Pression Maxi": "16BAR", Matière: "Corps en GJS-500-7, papillon en 316/FONTE, manchette EPDM ACS" }, icon: "butterfly" },
        { nom: "Vanne à papillon sandwich à réducteur", image: "produit_image/Robinetterie/VANNE À PAPILLON SANDWICH A REDUCTEUR.png", specs: { Commande: "À réducteur", Dimensions: "DN40 à DN400", Raccordement: "Entre brides PN10/16/#150", "Température Mini": "-10°C", "Température Maxi": "+110°C", "Pression Maxi": "16BAR", Matière: "Corps en GJS-500-7, papillon en 316/FONTE, manchette EPDM ACS" }, icon: "butterfly" },
        { nom: "Vanne à papillon à oreilles taraudées", image: "produit_image/Robinetterie/vanne_a_papillon_a_oreilles_traudees.jpeg", specs: { Dimensions: "DN32 à DN1400", Raccordement: "Entre brides PN10/16", "Température Mini": "-20°C", "Température Maxi": "+110°C", "Pression Maxi": "16 bars jusqu’au DN300", Matière: "Corps en GJS-500-7, papillon en 316/FONTE, manchette EPDM ACS" }, icon: "butterfly" },
        { nom: "Vanne à papillon sandwich motorisée électrique", image: "produit_image/Robinetterie/vanne_a_papillion_sandwich_motorisee_electrique.jpeg", specs: { Commande: "Électrique", Dimensions: "Généralement de DN25 à DN300", Raccordement: "Entre brides PN10/16#150", "Température Mini": "-10°C", "Température Maxi": "+110°C", "Pression Maxi": "Variable selon le modèle", Matière: "Corps en GJS-500-7, papillon en 316/FONTE, manchette EPDM ACS" }, icon: "actuator" },
        { nom: "Vanne à papillon sandwich motorisée pneumatique", image: "produit_image/Robinetterie/vanne_a_papillon_sanwich_motorise_pneumatique.jpeg", specs: { Commande: "Pneumatique simple effet / double effet", Dimensions: "Généralement de DN25 à DN300", Raccordement: "Entre brides PN10/16#150", "Température Mini": "-10°C", "Température Maxi": "+110°C" }, icon: "actuator" },
        { nom: "Vanne à papillon double bride et double excentration", image: "produit_image/Robinetterie/vanne_a_papillon_double_bride_et_double_excentration.jpeg", specs: { "Grande durabilité": "Du joint torique d’étanchéité", Siège: "Soudé en AISI 316", Étanchéité: "À 100 %", Joint: "Torique remplaçable sans démontage de la vanne", "Température de fonctionnement": "-10°C à +90°C" }, icon: "butterfly" },
        { nom: "Vanne à papillon à bride motorisée", image: "produit_image/Robinetterie/vanne_a_papillon_a_bride_motorisee.jpeg", specs: { Dimensions: "DN350", Raccordement: "Avec brides standard", "Température Mini": "-10°C", "Température Maxi": "+50°C", "Pression Maxi": "16 bars" }, icon: "motor" },
        { nom: "Vanne à guillotin manuelle", image: "produit_image/Robinetterie/vanne_a_guillotin_manuelle.jpeg", specs: { Dimensions: "DN50 à DN800", Raccordement: "Entre brides PN10", "Température Mini": "-15°C", "Température Maxi": "+130°C", "Pression Maxi": "10 bars jusqu’au DN200", Matière: "Fonte EN GJL-250" }, icon: "gate" },
        { nom: "Vanne à guillotin pneumatique", image: "produit_image/Robinetterie/vanne_a_quillotin_pneumatique.jpeg", specs: { Dimensions: "DN50 à DN800", Raccordement: "Entre brides PN10", "Température Mini": "-15°C", "Température Maxi": "+130°C", "Pression Maxi": "10 bars jusqu’au DN200", Matière: "Fonte EN GJL-250" }, icon: "gate" },
        { nom: "Robinet à soupape à soufflet à brides", image: "produit_image/Robinetterie/robinet_a_soupape_a_soufflet_a_brides.png", specs: { Dimensions: "DN15 à DN200", Raccordement: "À brides RF PN16/25/40", "Température Mini": "-10°C", "Température Maxi": "300°C/350°C/400°C", "Pression Maxi": "16/25/40 bars", Matière: "EN-JL 1040 Cast Iron / WCB" }, icon: "globe" },
        { nom: "Robinet à flotteur à brides", image: "produit_image/Robinetterie/robinet_a_flotteur_a_brids.jpeg", specs: { Dimensions: "DN40 à DN400", Raccordement: "À brides", "Température Mini": "-10°C", "Température Maxi": "+90°C", "Pression Maxi": "16 bars", Matière: "Fonte ductile, acier moulé ou acier forgé" }, icon: "float" },
        { nom: "Vanne à boisseau sphérique 3 pièces inox", image: "produit_image/Robinetterie/vanne_a_boisseau_spherique_3pieces_inox.png", specs: { Dimensions: "Ø 1/4” à Ø 4”", Raccordement: "Femelle NPT (filetage conique américain)", "Température Mini": "-20°C", "Température Maxi": "+180°C", "Pression Maxi": "63 Bars (jusqu’au DN3/4”)", Matière: "Inox ASTM A351 CF8M" }, icon: "valve" },
        { nom: "Vanne à boisseau sphérique monobloc inox", image: "produit_image/Robinetterie/vanne_a_boisseau_spherique_monoblic_inox.png", specs: { Dimensions: "Ø 1/4” à Ø 4”", Raccordement: "Femelle NPT (filetage conique américain)", "Température Mini": "-20°C", "Température Maxi": "+180°C", "Pression Maxi": "63 Bars (jusqu’au DN3/4”)", Matière: "Inox ASTM A351 CF8M" }, icon: "valve" },
        { nom: "Vanne à boisseau sphérique à bride inox", image: "produit_image/Robinetterie/vanne boisseau sphérique inox(1).jpeg", specs: { Dimensions: "DN40 à DN200", Raccordement: "À bride RF", "Température Mini": "-20°C", "Température Maxi": "+180°C", "Pression Maxi": "40 Bars (jusqu’au DN50)", Matière: "Inox ASTM A351 CF8M" }, icon: "valve" },
        { nom: "Vanne à boisseau sphérique monobloc en laiton", image: "produit_image/Robinetterie/vanne_a_boisseau_spherique_monobloc_en_laiton.png", specs: { Dimensions: "Ø 1/4” à Ø 4”", Raccordement: "Mâle/Femelle BSP", "Température Mini": "-10°C", "Température Maxi": "+120°C", "Pression Maxi": "30 Bars (jusqu’au DN1”)", Matière: "Laiton CW617N-4MS, conforme à la norme EN 12165" }, icon: "ball" },
      ]
    },
    {
      id: "equipements",
      nom: "Équipements de robinetterie",
      produits: [
        { nom: "Filtre à tamis à bride", image: "produit_image/Equipements de robinetterie/filtre_a_tamis_abride.jpeg", specs: { Dimensions: "DN15 à DN300", Raccordement: "À brides RF PN10/16", "Température Mini": "-10°C", "Température Maxi": "+120°C", "Pression Maxi": "16 Bars pour modèles PN16", Matière: "Fonte EN GJL-250 ou EN GJS-500-7" }, icon: "filter" },
        { nom: "Ventouse triple fonction", image: "produit_image/Equipements de robinetterie/ventouse_triple_fonction.jpeg", specs: { Dimensions: "DN50 – 200", Raccordement: "Par bride", "Température Mini": "-10°C", "Température Maxi": "+80°C", "Pression Maxi": "PN10 / PN16 / PN25", Matière: "En fonte ductile (GGG50)" }, icon: "air" },
        { nom: "Ventouse simple fonction", image: "produit_image/Equipements de robinetterie/ventouse_simple_fonction.jpeg", specs: { Dimensions: "Ø1” – DN40, DN50, DN65", Raccordement: "Femelle BSP", "Température Mini": "+0°C", "Température Maxi": "+60°C", "Pression Maxi": "40 Bars", Matière: "En fonte EN GJS 450-10" }, icon: "air" },
        { nom: "Clapet anti-retour à battant à bride", image: "produit_image/Equipements de robinetterie/clapet_anti_retour_a_battant_a_bride.jpeg", specs: { Dimensions: "DN40 au DN300", Raccordement: "À brides RF PN10/16", "Température Mini": "-10°C", "Température Maxi": "+120°C", "Pression Maxi": "16 Bars", Matière: "Fonte EN GJL-250" }, icon: "check" },
        { nom: "Clapet anti-retour à boule à bride", image: "produit_image/Equipements de robinetterie/clapet_anti_retour_a_double_bride.png", specs: { Dimensions: "DN40 au DN300", Raccordement: "À brides RF PN10/16", "Température Mini": "-10°C", "Température Maxi": "+90°C", "Pression Maxi": "16 Bars", Matière: "Corps en fonte EN GJS-400-15" }, icon: "check" },
        { nom: "Clapet anti-retour à boule taraudé", image: "produit_image/Equipements de robinetterie/clapet_anti_retour_a_double_traude.jpeg", specs: { Dimensions: "Ø 1\" à Ø 3”", Raccordement: "Taraudé femelle BSP", "Température Mini": "-10°C", "Température Maxi": "+90°C", "Pression Maxi": "10 Bars", Matière: "Corps en fonte EN GJS-400-15" }, icon: "check" },
        { nom: "Clapet anti-retour à battant sandwich", image: "produit_image/Equipements de robinetterie/clapet_anti_retour_a_battant_sandwich.jpeg", specs: { Dimensions: "DN40 à DN600", Raccordement: "Entre brides PN10/16 suivant DN, Class 150 (PN20) du DN100 au 400", "Température Mini": "-10°C", "Température Maxi": "+180°C", "Pression Maxi": "16 Bars jusqu’au DN300, 10 bars au-delà", Matière: "Corps Inox ASTM A351 CF8M/acier carbone" }, icon: "check" },
        { nom: "Clapet anti-retour à bride axial", image: "produit_image/Equipements de robinetterie/clapet_retour_a_bride_axial.png", specs: { Dimensions: "DN50 à DN300", Raccordement: "À brides PN16 RF", "Température Mini": "-10°C", "Température Maxi": "+110°C", "Pression Maxi": "16 Bars", Matière: "Corps fonte EN GJL-250" }, icon: "check" },
        { nom: "Clapet anti-retour à pied à bride / clapet à crépine", image: "produit_image/Equipements de robinetterie/clapet_anti_retour_apied_a_bride_clapet_a_crepine.jpeg", specs: { Dimensions: "DN50 à DN300", Raccordement: "À brides PN10/16 RF", "Température Mini": "-10°C", "Température Maxi": "+120°C", "Pression Maxi": "16 Bars", Matière: "Corps fonte EN GJL-250 ou EN GJS-400-15 / crépine en inox" }, icon: "check" },
        { nom: "Clapet anti-retour double battant", image: "produit_image/Equipements de robinetterie/clapet_anti_retour_double_battant.jpeg", specs: { Dimensions: "DN50 à DN600", Raccordement: "Entre brides PN10/16, Classe 150 (PN20)", "Température Mini": "-10°C", "Température Maxi": "+110°C", "Pression Maxi": "16 Bars jusqu’au DN300", Matière: "Corps fonte EN GJL-250 / battant en inox" }, icon: "check" },
        { nom: "Réducteur de pression", image: "produit_image/Equipements de robinetterie/reducteur_de_pression.jpeg", specs: { Dimensions: "DN50-DN150", Raccordement: "À brides PN10/16", "Température Mini": "+0°C", "Température Maxi": "+60°C", "Pression Maxi": "16 Bars", Matière: "Corps fonte EN GJS-450-10" }, icon: "reducer" },
        { nom: "Compensateur de dilatation en caoutchouc à bride", image: "produit_image/Equipements de robinetterie/compensateur_de_dilatation_en_caoutchouc_a_bride.jpeg", specs: { Dimensions: "DN32 à DN600", Raccordement: "À brides", "Température Mini": "-10°C", "Température Maxi": "+100°C", "Pression Maxi": "16 Bars jusqu’au DN300", Matière: "Brides acier électro-zingué / EPDM" }, icon: "flex" },
        { nom: "Compensateur de dilatation en caoutchouc taraudé", image: "produit_image/Equipements de robinetterie/compensateur_de_dilatation_caoutchouc_traude.jpeg", specs: { Dimensions: "Ø ½\" à Ø 2”", Raccordement: "Taraudé BSP PN10/16", "Température Mini": "-10°C", "Température Maxi": "+100°C", "Pression Maxi": "16 Bars", Matière: "Raccords-unions / EPDM" }, icon: "flex" },
        { nom: "Compteur à bride pour eau froide", image: "produit_image/Equipements de robinetterie/compteur_a_bride_pour_eau_froide.jpeg", specs: { Dimensions: "Calibre DN50 à DN200", Raccordement: "À brides PN 10/16 RF (PN16 en DN200)", "Température Mini": "+0°C", "Température Maxi": "+50°C", "Pression Maxi": "16 Bars" }, icon: "meter" },
        { nom: "Compteur à taraudé pour eau froide", image: "produit_image/Equipements de robinetterie/compteur_a_traude_eau_froide.png", specs: { Dimensions: "Ø ½\" à Ø 3”", Raccordement: "Taraudé BSP PN10/16", "Température Mini": "+0°C", "Température Maxi": "+50°C", "Pression Maxi": "16 Bars" }, icon: "meter" },
        { nom: "Poteau d’incendie", image: "produit_image/Equipements de robinetterie/poteau_incendie.jpeg", specs: { Description: "Appareil de robinetterie raccordé à un réseau d’eau sous pression", Installation: "Réseau enterré ou protégé", Branchement: "Au niveau du sol du matériel mobile des services de lutte contre l’incendie", Prises: "Disposées au-dessus du sol" }, icon: "fire" },
      ]
    },
    {
      id: "raccordements",
      nom: "Raccordements",
      produits: [
        { nom: "Adaptateur à bride universel", image: "produit_image/Raccordements/adaptateur_a_bride_universel.jpg", specs: { Dimensions: "DN50 à DN400", Raccordement: "Pour tubes rigides", "Température Mini": "+0°C", "Température Maxi": "+90°C", "Pression Maxi": "16 Bars jusqu’au DN200, 10 Bars au-delà", Matière: "Fonte EN GJS-500-7 / EPDM" }, icon: "adapter" },
        { nom: "Bride majeure en fonte ductile pour tubes PVC, PEHD et fonte", image: "produit_image/Raccordements/BRIDE MAJOUR EN FD POUR T-PVC ET PEHD ET FD.jpg", specs: { Dimensions: "DN50 à DN400", Raccordement: "À brides PN10/16", "Température Mini": "+0°C", "Température Maxi": "+90°C", "Pression Maxi": "16 Bars jusqu’au DN200, 10 Bars au-delà", Matière: "Fonte EN GJS-500-7" }, icon: "flange" },
        { nom: "Bride pleine en fonte PN10/16", image: "produit_image/Raccordements/Bride-pleine-fonte-pn1016.jpg", specs: { Dimensions: "DN40 à DN350", Raccordement: "PN10/16 RF", "Température Mini": "+0°C", "Température Maxi": "+120°C", "Pression Maxi": "16 Bars", Matière: "Fonte EN GJS-500-7" }, icon: "flange" },
        { nom: "Coude à emboîtement en fonte ductile pour tubes PVC", image: "produit_image/Raccordements/COUDE A EMBOITEMENT EN FD POUR T-PVC.jpg", specs: { Dimensions: "Ø63 - Ø400 / 22,5°- 45° - 90°", "Joint d’étanchéité": "Fonte ductile EN GJS-500-7", "Pression maximale de service": "16 Bars", "Pression d’épreuve": "24 Bars", "Température d’utilisation": "0°C à +90°C" }, icon: "elbow" },
        { nom: "Coude à bride en fonte ductile", image: "produit_image/Raccordements/COUDE BRIDE EN FTE DUCTILE.jpg", specs: { Dimensions: "DN65 - DN400 / 22,5°- 45° - 90°", Raccordement: "Par brides PN10/16", "Température Mini": "+0°C", "Température Maxi": "+60°C", "Pression Maxi": "10 ou 16 Bars", Matière: "Fonte EN GJS-450-10" }, icon: "elbow" },
        { nom: "Esse de réglage", image: "produit_image/Raccordements/ESSE DE RÉGLAGE.jpg", specs: { Dimensions: "Varient selon le diamètre", Raccordement: "Par brides mobiles", "Température Mini": "-30°C", "Température Maxi": "+70°C", "Pression Maxi": "16 Bars", Matière: "Fonte ductile" }, icon: "offset" },
        { nom: "Joint de démontage automatique en fonte ductile", image: "produit_image/Raccordements/JOINT DE DEMONTAGE AUTOUBUTE EN FTE DUCTILE.jpg", specs: { Dimensions: "DN50 à DN2000", Raccordement: "Par brides boulonnées", "Température Mini": "-10°C", "Température Maxi": "+70°C", "Pression Maxi": "PN10 / PN16 / PN25", Matière: "Fonte ductile" }, icon: "dismount" },
        { nom: "Joint Gibault", image: "produit_image/Raccordements/joint gibault.jpg", specs: { Dimensions: "DN50 à DN2000", Raccordement: "Serrage par boulons et écrous sur les extrémités du tuyau, assurant l’étanchéité grâce à des joints en caoutchouc", "Température Mini": "-10°C", "Température Maxi": "+90°C", "Pression Maxi": "Variable selon le matériau", Matière: "Fonte ductile / EPDM" }, icon: "coupling" },
        { nom: "Joint universel à large tolérance", image: "produit_image/Raccordements/JOINT UNIVERSEL LARGE TOLERANCE.jpg", specs: { Dimensions: "DN100, DN200", Raccordement: "Par boulons et écrous serrant les bagues d’étanchéité autour des tuyaux", "Température Mini": "-10°C", "Température Maxi": "+90°C", "Pression Maxi": "PN10 ou PN16", Matière: "Fonte ductile / EPDM" }, icon: "coupling" },
        { nom: "Réduction à brides en fonte ductile", image: "produit_image/Raccordements/REDUCTION BRIDE EN FTE DUCTILE.jpg", specs: { Dimensions: "DN50 à DN2000", Raccordement: "À brides", "Pression Maxi": "PN10, PN16 ou PN25", Matière: "Fonte ductile" }, icon: "reducer" },
        { nom: "Stabilisateur d'écoulement S-3D", image: "produit_image/Raccordements/STABILISATEUR D'ECOULEMENT S-3D.jpg", specs: { Fonction: "Stabilisation de l’écoulement" }, icon: "flow" },
        { nom: "Tee à 3 emboîtements en fonte ductile pour tubes PVC", image: "produit_image/Raccordements/TEE A 3 EMBOITEMENT EN FD POUR T-PVC.jpg", specs: { Dimensions: "DN50 à DN400", Raccordement: "Par emboîtement ou collage pour les systèmes d’évacuation, ou par brides PN10/16 selon application", "Température Mini": "-10°C", "Température Maxi": "+90°C", "Pression Maxi": "16 Bars", Matière: "Fonte ductile" }, icon: "tee" },
        { nom: "Tee à brides en fonte ductile", image: "produit_image/Raccordements/TEE BRIDE EN FTE DUCTILE.jpg", specs: { Dimensions: "DN50 à DN400", Raccordement: "À brides PN10/16", "Température Mini": "0°C", "Température Maxi": "+90°C", "Pression Maxi": "16 Bars", Matière: "En fonte ductile" }, icon: "tee" },
      ]
    },
    {
      id: "branchements",
      nom: "Branchements",
      produits: [
        { nom: "Clapet en laiton", image: "produit_image/Branchements/clapet_en_laiton.jpg", specs: { Dimensions: "Ø 3/8” à Ø 4”", Raccordement: "Femelle BSP", "Température Mini": "-10°C", "Température Maxi": "+100°C", "Pression Maxi": "25 Bars jusqu’au Ø 1”", Matière: "Corps en laiton CW617N-4MS, suivant EN 12165" }, icon: "valve" },
        { nom: "Collier PEC en fonte ductile pour tube PVC, PEHD et fonte", image: "produit_image/Branchements/collier_pec_en_fonte.jpg", specs: { Dimensions: "Ø 3/4”–DN20 à Ø 1”1/2–DN40", Raccordement: "Taraudé femelle BSP", "Température Mini": "-10°C", "Température Maxi": "+90°C", "Pression Maxi": "12,5 Bars" }, icon: "collar" },
        { nom: "Robinet d’arrêt", image: "produit_image/Branchements/robinet_arret.jpg", specs: { Dimensions: "Ø ½\" à Ø 2”", Raccordement: "À visser, avec des filetages mâles (MM) aux deux extrémités", "Température Mini": "0°C", "Température Maxi": "+90°C à +100°C", Matière: "Corps en laiton" }, icon: "stopcock" },
        { nom: "Robinet de compteur équerre", image: "produit_image/Branchements/robinet_de_compteure_equere.jpg", specs: { Dimensions: "Ø ½\" à Ø 1”1/2", Raccordement: "Mâle, écrou prisonnier BSP", "Température Mini": "-5°C", "Température Maxi": "+90°C (+110°C en pointe)", "Pression Maxi": "20 Bars jusqu’au DN1”, 16 Bars au-delà", Matière: "Laiton sans plomb CW510L-4MS, conforme à la norme EN 12165" }, icon: "meter" },
        { nom: "Robinet de compteur à tournant", image: "produit_image/Branchements/robinet_de_compteure_tp_et_tce.jpg", specs: { Dimensions: "Ø ½\" à Ø 1”1/2", Raccordement: "Mâle, écrou prisonnier BSP", "Température Mini": "-5°C", "Température Maxi": "+90°C (+110°C en pointe)", "Pression Maxi": "20 Bars jusqu’au DN25, 16 Bars au-delà" }, icon: "meter" },
        { nom: "Robinet PEC vertical à tige pleine", image: "produit_image/Branchements/robinet_pec_verticale_tige_plein.jpg", specs: { Dimensions: "Ø 1”1/2", Raccordement: "Angle (vanne d’arrêt à angle)", "Température Mini": "0°C", "Température Maxi": "+90°C", "Pression Maxi": "PN16", Matière: "Laiton DZR (résistant à la dézincification)" }, icon: "stopcock" },
        { nom: "Tabernacle PM et GM", image: "produit_image/Branchements/taparnacle_pm_rt_gm.jpg", specs: { Dimensions: "Ø 1”", "Pression Maxi": "PN16", Matière: "Polypropylène" }, icon: "box" },
      ]
    },
    {
      id: "tuyauterie",
      nom: "Tuyauterie et accessoires",
      produits: [
        { nom: "Tubes noirs et galvanisés T3 / T10 / SCH40 / SCH80", image: "produit_image/Tuyauterie et accessoires/TUBE S-S NOIR ET GALVANISE ET SH40 ET SH80.jpg", specs: { Matière: "Acier noir / galvanise / Inox" }, icon: "pipe" },
        { nom: "Brides plates, à collerette et pleines", image: "produit_image/Tuyauterie et accessoires/bride plat et accolorette et plein.jpg", specs: { Dimensions: "DN15 à DN200", Raccordement: "PN10 à PN40", "Température Maxi": "+450°C", "Pression Maxi": "10 à 40 bars selon le diamètre nominal (DN)", Matière: "Acier noir / galvanise / Inox" }, icon: "flange" },
        { nom: "Manchette à brides en acier galvanisé", image: "produit_image/Tuyauterie et accessoires/MANCHETTE BRIDE EN ACIER GALVANISE.jpg", specs: { Dimensions: "DN40 à DN200", Raccordement: "À brides PN10/16 RF", "Température Mini": "-10°C", "Température Maxi": "+150°C", "Pression Maxi": "16 bars", Matière: "Acier noir / galvanise / Inox" }, icon: "sleeve" },
        { nom: "Raccord en acier", image: "produit_image/Tuyauterie et accessoires/raccords de tuyaux en acier.jpg", specs: { Raccordement: "À souder (SW)", "Température Mini": "-20°C", "Température Maxi": "+300°C", Matière: "Acier carbone S235 / INOX" }, icon: "fitting" },
        { nom: "Raccord en fonte malléable", image: "produit_image/Tuyauterie et accessoires/Raccordement.jpg", specs: { Raccordement: "Filetage BSP", "Température Mini": "-20°C", "Température Maxi": "+300°C", "Pression Maxi": "25 bars", Matière: "Fonte malléable EN-GJMB-350-10 / acier / inox" }, icon: "fitting" },
        { nom: "Boulons", image: "produit_image/Tuyauterie et accessoires/boulon cadmie.jpg", specs: { Description: "Boulons de fixation traités au cadmium pour résistance accrue à la corrosion, conformes aux normes industrielles", Matière: "Acier noir / galvanise / cadmée / inox" }, icon: "bolt" },
        { nom: "Raccord en PEHD", image: "produit_image/Tuyauterie et accessoires/Raccord en PEHD.jpg", specs: { Raccordement: "Femelle, mâle BSP ou sur tube polyéthylène", "Température Mini": "-10°C", "Température Maxi": "+45°C", "Pression Maxi": "16 bars jusqu’au DN63 (10 bars au-delà)", Matière: "Polypropylène" }, icon: "fitting" },
        { nom: "Raccord en PVC pression", image: "produit_image/Tuyauterie et accessoires/Raccord en pcv de pression.jpg", specs: { Raccordement: "Par soudure à froid (ou soudure par solvant)", "Température Mini": "0°C", "Température Maxi": "+20°C", "Pression Maxi": "16 bars", Matière: "PVC rigide" }, icon: "fitting" },
      ]
    },
    {
      id: "voiries",
      nom: "Voiries",
      produits: [
        { nom: "Tampon D400 - C250", image: "produit_image/Voiries/TAMPON BMX .jpg", specs: { Matériau: "Fonte ductile GGG 500-7 / GJS 450-10", Norme: "EN 124", "Procédé de fabrication": "Moulage sur plaques modèles", "Ligne de production": "Mécanisée" }, icon: "manhole" },
        { nom: "Tampon B125", image: "produit_image/Voiries/tompon B125.jpg", specs: { Matériau: "Fonte ductile GGG 500-7 / GJS 450-10", Norme: "EN 124", "Procédé de fabrication": "Moulage sur plaques modèles", "Ligne de production": "Mécanisée" }, icon: "manhole" },
        { nom: "Grille de caniveau", image: "produit_image/Voiries/GRILLE DE CANIVEAU.jpg", specs: { Matériau: "Fonte ductile ou fonte grise", Norme: "EN 124", Forme: "Rectangulaire ou carrée" }, icon: "grate" },
        { nom: "Capot anti-vandalisme", image: "produit_image/Voiries/capot anti-vandal.jpg", specs: { Matériau: "Fonte ductile ou acier galvanisé" }, icon: "cap" },
        { nom: "Porte de niche en acier", image: "produit_image/Voiries/porte niche.jpg", specs: { Matériau: "Acier galvanisé à chaud" }, icon: "door" },
        { nom: "Bouche à Clé", image: "produit_image/Voiries/bouchacleenfonte.jpeg", specs:{matiére:"Fonte EN-GJS-500/7 selon EN1563",revetement:"Peinture noire",conformité:" Ce dispositif n’entre pas dans le scope de la norme EN124/2015",lieux_Installation:"chaussée et trottoirs(vitesse urbaine)"}},  
      ]
    }
  ]
};

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
  const whatsappButton = document.querySelector(".btn-whatsapp");
  const whatsappMain = whatsappButton?.querySelector(".whatsapp-main");
  const whatsappLinks = whatsappButton?.querySelectorAll(".whatsapp-options a");

  if (!whatsappButton || !whatsappMain || !whatsappLinks?.length) return;

  const mobileQuery = window.matchMedia("(hover: none), (pointer: coarse), (max-width: 900px)");

  const closeWhatsappMenu = () => {
    whatsappButton.classList.remove("is-open");
  };

  const syncWhatsappMode = () => {
    if (!mobileQuery.matches) {
      closeWhatsappMenu();
    }
  };

  whatsappMain.addEventListener("click", (event) => {
    if (!mobileQuery.matches) return;

    event.preventDefault();
    event.stopPropagation();
    whatsappButton.classList.toggle("is-open");
  });

  whatsappLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeWhatsappMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!mobileQuery.matches) return;

    if (!whatsappButton.contains(event.target)) {
      closeWhatsappMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!mobileQuery.matches) return;

    if (event.key === "Escape") {
      closeWhatsappMenu();
    }
  });

  syncWhatsappMode();
  mobileQuery.addEventListener("change", syncWhatsappMode);
});

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
          <button class="savoir-plus-btn" type="button" aria-label="Voir les details de ${p.nom}">
            <div class="card-name">${p.nom}</div>
          </button>
        </div>
      `;

      card.addEventListener('click', (event) => {
        if (event.target.closest('.savoir-plus-btn') || event.target.closest('.card-img-wrap') || event.target.closest('.card-body') || event.target.closest('.product-card')) {
          openModal(p, cat.nom);
        }
      });

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
document.addEventListener("DOMContentLoaded", buildUI);
