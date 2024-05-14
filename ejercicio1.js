function countLetters(str, letra) {
    let count = 0
    let lowerCase = str.toLowerCase();   

    for (let i = 0; i < lowerCase.length; i++) {
        if (lowerCase[i] === letra) count++;
    }

    return count;
}

// function countLetters(str, letra) {

//     let lowerCase = str.toLowerCase();

//     let arr = lowerCase.split('');

//     let result = arr.filter(i => i === letra);

//     return result.length;
// }

console.log(countLetters('aAaaaabb', 'a'));