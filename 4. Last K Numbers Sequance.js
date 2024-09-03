function lastKNumbersSequance(n, k) {
    let newArr = [1];
    for (let i = 1; i <= n - 1; i++) {
        if (i <= k) {
            newArr.push(newArr.slice(0, i).reduce((a, b) => a + b));
        } else {
            //let sum = newArr.slice(i-3, i)
            newArr.push(newArr.slice(i - k, i).reduce((a, b) => a + b));
        }
    }

    console.log(newArr.join(` `));
}
lastKNumbersSequance(8, 2);
