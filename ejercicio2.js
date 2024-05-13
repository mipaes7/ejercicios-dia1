function odds(n) {
    let result = [];

    for (let i = n; i <= n + 50; i++) {
        if (i % 2 !== 0) result.push(i);
    }

    return result;
}

console.log(odds(0));