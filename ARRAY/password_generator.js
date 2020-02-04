// random password generator * 3
let password = "pass";
let newPassword = "";
let random = "";
let len = password.length;

for (let i = 0; i < len * 3; i++) {
	random = Math.floor(Math.random() * (122 - 65) + 65);
	newPassword += String.fromCharCode(random);
}
console.log(newPassword);