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


var tentatives = 0;
var alea = getAlea();
// On vérifie si les deux chiffre concordent

function startGame(){

  var answer = getAnswer();

  if(answer === alea){
    alert('Bien joué, tu as trouvé le chiffre secret!')
  }
  else if(answer > alea){
    alert('Le nombre est trop grand!');
    answer = Number(prompt('entrez un nombre entre 1 et 1000 svp'));
  }
  else{
    alert('le chiffre est trop petit...');
    answer = Number(prompt('entrez un nombre entre 1 et 1000 svp'));
  }
}

while(answer != alea && tentatives < 10){

  tentatives++;
  console.log(tentatives);

}
