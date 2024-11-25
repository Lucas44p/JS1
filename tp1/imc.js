

function calculerIMC() {
  let poidsInput = document.getElementById("poids").value
  let tailleInput = document.getElementById("taille").value
  const poids = parseFloat(poidsInput);
  const taille = parseFloat(tailleInput);
  

  const imc = (poids / (taille * taille)).toFixed(1);
  let tranche = "";

  if (imc < 18.5) {
    tranche = "Maigreur";
  } 
  
  else if (imc >= 18.5 && imc < 25) {
    tranche = "Normal";
  }
  
  else if (imc >= 25 && imc < 30) {
    tranche = "Surpoids";
  } 
  
  else if (imc >= 30 && imc < 35) {
    tranche = "Obésité modérée";
  } 
  
  else if (imc >= 35 && imc < 40) {
    tranche = "Obésité sévère";   
  } 
  
  else {
    tranche = "Obésité morbide";
  }
document.getElementById("imc").innerHTML = imc
document.getElementById("imcc").innerHTML = tranche
}