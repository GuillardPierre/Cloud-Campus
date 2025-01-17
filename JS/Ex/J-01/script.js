/* // 1
const firstName = prompt("Veuillez entrer un premier prénom")
const secondName = prompt("Veuillez entrer un second prénom")
const state = prompt("Veuillez entrer un premier état du jour")
const state2 = prompt("Veuillez entrer un second état du jour")
const hour = prompt("Veuillez entrer une heure")
const day = prompt("Veuillez entrer un jour")

console.log(`${firstName} : Bonjour`);
console.log(`${secondName} : Bonjour ${firstName}! Comment vas-tu?`);
console.log(`${firstName} : ${state}, et toi ?`);
console.log(`${secondName} : ${state2}, je te remercie`);
console.log(`${firstName} : Quelle heure est-il ?`);
console.log(`${secondName} : Il est ${hour} heures.`);
console.log(`${firstName} : D'acc, merci.`);
console.log(`${secondName} : Où manges-tu, aujourd'hui?`);
console.log(`${firstName} : Je rentre chez moi comme tous les ${day}`);
console.log(`${secondName} : D'acc.`);


//2
const age = prompt("Quelle âge avez vous?")

if (age < 18) {
    alert("Vous êtes mineurs !")
    console.log("Vous êtes mineurs !")
} else if (age > 21) {
    alert("Hey ! Vous êtes majeurs INTERNATIONAL")
    console.log("Hey ! Vous êtes majeurs INTERNATIONAL")
} else {
    alert("Hey ! Vous êtes majeurs")
    console.log("Hey ! Vous êtes majeurs")
}

//3
const num1 = parseInt(prompt("entrez un nombre"))
const num2 = parseInt(prompt("entrez un autre nombre"))
const num3 = parseInt(prompt("entrez encore un autre nombre"))

console.log(num1, num2);

if (num1 === num2 && num2 === num3) {
    console.log("les trois variables sont identiques");
} else if (num1 != num2 && num2 != num3 && num3 != num1) {
    console.log("les trois variables sont différentes");
} else {
    console.log("2 variables sont identiques");  
}
 */
/* 
const number = parseInt(prompt("Entrez un chiffre entre 0 et 10 :"));

if (number > 10) {
    console.log("Vous êtes trop gourmand !");
} else {
    for (let i = 1; i <= number; i++) {
        console.log(`${i} -> ${i * 2}`);
    }
}


const number2 = parseInt(prompt("Entrez un nombre :"));
const type = prompt("pair ou impair ?").toLowerCase();

let start = 0
 if (type === "impair") {
    start = 1
}
for (start ; start <= number2; start += 2) {
    console.log(start);
}


function superMario(number) { 
    for (let i = 1; i <= number; i++) {
        let line = "";
    
        for (let j = 1; j <= number; j++) {
            if (j <= number - i) {
                line += " "; 
            } else {
                line += "#"; 
            }
        }
    
        console.log(line);
    }
}
const floors = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));
superMario(floors)

 */


/* function happyBirthday(date) {
    const dayToday = new Date().getDate()
    const monthToday = parseInt(new Date().getMonth() + 1, 10)


    const day = parseInt(date.split("/")[0], 10);
    const month = parseInt(date.split("/")[1], 10);

    console.log(dayToday, day);
    console.log(monthToday, month);
    
    if (day === dayToday && month === monthToday) {
        console.log("Joyeux anniversaire ! Tu obtiens une promotion de 30% sur tous les articles !");
    } else {
        console.log("En ce moment, une promotion de 15% sur tous les articles");
    }

}

const date = prompt("Rentrez votre date d'anniversaire au format jj/mm/yyyy")
happyBirthday(date) */

/* 
function fact(n) {
    if (n === 0 || n === 1) {
        return 1; 
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i; 
    }
    return result;
}

const chosenNumber = parseInt(prompt("De quel nombre veux-tu calculer la factorielle ?"), 10);

console.log(`Le résultat est : ${fact(chosenNumber)}`);

console.log(fact(4)); 
console.log(fact(6)); 
console.log(fact(8)); 
console.log(fact(2)); 
console.log(fact(1)); 
 */

/* function cutWord(word) {
    if (word.length <= 2) {
        return word;
    }

    return word.slice(1, -1);
}

console.log(cutWord("bonjour")) */;


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
