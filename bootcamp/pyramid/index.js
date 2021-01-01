function pyramid(n) {
    for (let i = 0; i < n; i++) {
        let pyr = '';
        for (let j = 1; j <= n + (n - 1); j++) {
            if (j < (n - i) || j > (n + i)) {
                pyr += ' ';
            } else {
                pyr += '*';
            }
        }
        console.log(pyr);
    }
}

function pyramid(n, row = 0, pyr = '') {
    if (row == n) return;

    if (pyr.length === n + (n - 1)) {
        console.log(pyr);
        return pyramid(n, row + 1);
    }
    let add;
    if (n - row <= pyr.length && n + row >= pyr.length) {
        add = '*';
    } else {
        add = ' ';
    }

    pyramid(n, row, pyr + add);
}

pyramid(5);