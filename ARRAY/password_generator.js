// random password generator * 3
let password = "Anahit1896";
let newPassword = "";
let random = "";
let len = password.length;

for (let i = 0; i < len * 3; i++) {
	random = Math.floor(Math.random() * (122 - 97)+97);
	newPassword += String.fromCharCode(random);
}
console.log(newPassword);