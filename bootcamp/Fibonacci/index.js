// get specific fibonacci number

function fibonacci(n) {
    let fib = 0;
    let next = 1;
    let res = 0;
    for (let i = 0; i < n; i++) {
        res = fib + next;
        fib = next;
        next = res;
    }
    return fib;
}

// Get array of item using fibonacci
function fibonacci(n) {
    let result = [0, 1];
    for (let i = 2; i <= n; i++) {
        var first = result[i - 1];
        var second = result[i - 2];

        result.push(first + second);
    }
    result
}

// Fibonacci using recursion
function fibonacci(n) {
    if (n < 2) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Using memoizing methods
function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

fibonacci = memoize(fibonacci);
console.log(fibonacci(4));


console.log(fibonacci(10));