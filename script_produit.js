const container = document.getElementById("produits-container");

fetch('./produits.json')
  .then(response => response.json())
  .then(data => {
    const produits = data.produits || data;
    produits.forEach(produit => {
      const div = document.createElement("div");
      div.classList.add("col-12", "col-md-6", "col-lg-4", "mb-4");

      // Récupération pression
      const pression = produit.pressionMaxi ?? produit.pression_max ?? "";

      // Récupération température
      const tempMin = produit.temperature?.mini ?? produit.temperature?.min ?? "";
      const tempMax = produit.temperature?.maxi ?? produit.temperature?.max ?? "";

      div.innerHTML = `
<div class="card h-100 shadow-sm bg-light border-0">

  ${produit.image ? `<img src="${produit.image}" alt="${produit.nom}" class="card-img-top">` : ""}

  <div class="card-header bg-danger text-white">
    ${produit.nom}
  </div>

  <div class="card-body">
    ${produit.dimensions ? `<p class="card-text"><strong>Dimensions:</strong> ${produit.dimensions}</p>` : ""}
    ${produit.raccordement ? `<p class="card-text"><strong>Raccordement:</strong> ${produit.raccordement}</p>` : ""}

    <button class="btn btn-outline-primary w-100 mt-3">
      Demander devis
    </button>
  </div>
</div>`;


      container.appendChild(div);
    });
  })
  .catch(error => console.error('Erreur de chargement:', error));