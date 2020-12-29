// My Initial Solution
function anagram(str1, str2) {
    let strOne = str1.replace(/[^\w]/g, '').toLowerCase();
    let strTwo = str2.replace(/[^\w]/g, '').toLowerCase();

    if (strOne.length != strTwo.length) return false;

    strOneObj, strTwoObj = {};

    for (let char of strOne) {
        strOneObj[char] = strOneObj[char] ? strOneObj[char] + 1 : 1;
    }
    for (let char of strTwo) {
        strTwoObj[char] = strTwoObj[char] ? strTwoObj[char] + 1 : 1;
    }

    let isOk = true;
    Object.keys(strOneObj).map(char => {
        if (strOneObj[char] != strTwoObj[char]) {
            isOk = false;
        }
    })

    return isOk;
}

// Another Solution
function anagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagram('Rail safety', 'fairy Tales'));
console.log(anagram('Rail safety!!!', 'fairy!! Tales!!'));