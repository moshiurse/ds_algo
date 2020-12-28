function isPalindrome(str) {

    let reversedStr = '';
    for (const char of str) {
        reversedStr = char + reversedStr;
    }

    return reversedStr === str;
}

function isPalindrome(str) {
    return str.split('').every((char, index) => {
        return char === str[str.length - index - 1];
    })
}

console.log(isPalindrome('abba'));