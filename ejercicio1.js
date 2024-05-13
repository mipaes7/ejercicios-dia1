function countLetters(str, letra) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letra) count++;
    }

    return count;
}

console.log(countLetters('aaaaaabb', 'a'));