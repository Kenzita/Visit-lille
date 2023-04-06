let offres = document.getElementById("offres");




// <div class="flip-card">
//   <div class="flip-card-inner">
//     <div class="flip-card-front">
//       <h2>Face avant</h2>
//     </div>
//     <div class="flip-card-back">
//       <h2>Face arrière</h2>
//     </div>
//   </div>
// </div>

for (let i = 0; i < 3; i++) {
    let article = document.createElement("article");
    article.classList.add("flip-card");
    article.innerHTML = `
<div class="flip-card-inner">
    <div class="flip-card-front">
       <h2> Pack Découverte </h2>
     </div>
    <div class="flip-card-back">
    <p>Visite de la ville <br> Visite de la Citadelle <br> Balade en Bateau <br> Repas dans un Estaminet <br></p>
    <a href="nos offres.html"> <input class="favorite styled decouvrir" type="button" value="Découvrir Nos Offres"></a>
    </div>
</div>
`
    offres.appendChild(article);
}


