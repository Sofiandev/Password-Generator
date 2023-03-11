const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumber = "0123456789";
const dataSymbols = "&é\"'(-è_çà)=+°@|[]{}$¤£€?,.;/:§!~";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");
console.log(passwordOutput);

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (number.checked) data.push(...dataNumber);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner au moins un critère");
    return;
  }

  for (i = 0; i <= rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;
  passwordOutput.select();
  navigator.clipboard.writeText(passwordOutput.value);

  generateButton.textContent = "Copié !";

  setTimeout(() => {
    generateButton.textContent = "Générer MDP";
  }, 2000);
}

generateButton.addEventListener("click", generatePassword);
