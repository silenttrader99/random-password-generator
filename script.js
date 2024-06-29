const passwordBox = document.getElementById("password");
const passwordLength = 12;
const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const number = "0123456789";
const symbol = "!@#$%^&*()-+=?/<>{}[]";
const allCharacter = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (passwordLength > password.length) {
    password += allCharacter[Math.floor(Math.random() * allCharacter.length)];
  }

  passwordBox.value = password; //avoid name conflict by adding .value
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
