//On génère un chiffre aléatoire entre 1 et 1000

function getAlea(){

  var alea = Math.floor(Math.random() * 1000 + 1);
  console.log(alea);
  return alea;
}


// On demande au joueur un chiffre entre 1 et 1000

function getAnswer(){

  var answer = Number(prompt('entrez un nombre entre 1 et 1000 svp'));
  console.log(answer);
  return answer;
}

// Affiche les résultats des différentes parties
function showResults() {

  // Parcourir le tableau JS des résultats
  for (var index = 0; index < results.length; index++) {

    // On récupère une ligne du tableau JS
    var oneGame = results[ index ];
    // oneGame.numberToFind
    // oneGame.game

    // On crée une chaine de caractères qui
    // contient les balises HTML dont j'ai besoin
    // pour afficher une ligne dans mon tableau HTML
    var html = '<tr><td>' + oneGame.game + '</td><td>' + oneGame.win + '</td><td>' + oneGame.tentatives + '</td><td>' + oneGame.numberToFind + '</td></tr>';

    // On affiche chaque ligne HTML contenant
    // les données de la partie
    document.getElementById('score').innerHTML += html;
  }
}

var tentatives = 0;
var alea = getAlea();
// On vérifie si les deux chiffre concordent

var gameNumber = 1;
var results = []; // Contient l'ensemble des résultats
var reply = true;

while (reply) {

  var tentatives = 0;
  var answer = getAnswer();
  var alea = getAlea();

  while (alea != answer && tentatives < 2) {

    // On comptabilise une nouvelle tentative
    // tentatives = tentatives + 1;
    // tentatives += 1;
    tentatives++;

    if (answer > alea) {

      // Le nombre est trop grand
      alert('Le nombre est trop grand');
    }
    else {

      // Le nombre est trop petit
      alert('Le nombre est trop petit');
    }

    if (tentatives < 2) {

      answer = getAnswer();
    }
  }

  // On est sortie de la boucle
  // Soit on a perdu (plus de 10 essais)
  var win = false;

  if (tentatives >= 2) {
    alert('Tu as perdu');
  }
  // Soit on a trouvé (moins de 10 essais)
  else {
    alert('Tu as gagné');
    win = true;
  }

  // On enregistre le résultat
  var resultat = {
    game: gameNumber,
    win: win,
    tentatives: tentatives,
    numberToFind: alea
  };

  results.push(resultat);

  // On demande à l'utilisateur si il veut rejouer
  reply = confirm('Voulez vous rejouer ?');
  gameNumber++;
}

// On affiche les résultats
showResults();
