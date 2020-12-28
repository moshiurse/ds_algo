function maxChars(str) {
    let strUnqObject = {};
    let max = 0;
    let maxChar = '';
    str.split('').map(char => {
        if ((Object.keys(strUnqObject)).includes(char)) {
            strUnqObject[char] = strUnqObject[char] + 1;
        } else {
            strUnqObject[char] = 1;
        }
    })

    for (const char in strUnqObject) {
        if (strUnqObject[char] > max) {
            max = strUnqObject[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(maxChars('aamjddjjmmmmmmmaaaallllxmmmmmmmjxlllll'));