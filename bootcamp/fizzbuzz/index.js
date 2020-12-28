// print 1 to n number
// if multiples of 3 print fizz instead of number
// if multiples of 5 print buzz instead of number
// if multiples of 3 and 5 print fizzbuzz instead of number


function fizzbuzz(number) {
    for (let index = 1; index <= number; index++) {
        if (index % 3 == 0 && index % 5 == 0) {
            console.log('fizzbuzz');
        } else if (index % 3 == 0) {
            console.log('fizz');
        } else if (index % 5 == 0) {
            console.log('buzz');
        } else {
            console.log(index);
        }
    }
}

fizzbuzz(100);