
// By using for loop
function reverse(str) {
    let reversedStr = '';
    // Traditional for Loop
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversedStr += str[i];
    // }

    // For off Loop
    for (const char of str) {
        reversedStr = char + reversedStr;
    }
    return reversedStr;
}

// By Using Array reverse (Js)

function reverse(str) {
    return str.split('').reverse().join('');
}

// By Using Array reduce

function reverse(str) {
    return str.split('').reduce((reversed, char) =>
        char + reversed, ''
    );
}

reverse('Hello My dear');