// My Initial Solution
function step(number) {
    for (let i = 1; i <= number; i++) {
        let str = '';
        for (let j = 1; j <= number; j++) {
            if (i >= j) {
                str += '#';
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }
}


// Using Recursion
function step(n, row = 0, stair = '') {

    if (n == row) return;

    if (n == stair.length) {
        console.log(stair);
        return step(n, row + 1);
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    step(n, row, stair);

}

step(10);