function findVowel(str) {
    const vowel = 'aeiou';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(findVowel('Hi AI am Moshiur'));