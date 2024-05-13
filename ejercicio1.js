// function countLetters(str, letra) {
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letra) count++;
//     }

//     return count;
// }

function countLetters(str, letra) {
    let arr = str.split('');

    let result = arr.filter(i => i === letra);

    return result.length;
}

console.log(countLetters('aaaaaabb', 'a'));