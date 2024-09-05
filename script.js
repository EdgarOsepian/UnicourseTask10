const word = prompt("Enter a word");
const vowels = "aeiouyAEIOUY";

let answer = vowels.includes(word[0]);

function checkVowel() {
    if (answer) {
        console.log(`სიტყვა იწყება ხმოვანით, რომელიც არის ${word[0]}`);
    } else {
        console.log(`სიტყვა არ იწყება ხმოვანით, რადგან ის არის ${word[0]}`);
    }
}

checkVowel();
