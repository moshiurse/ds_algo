function capitalize(str) {

    return str.split(' ').map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join(' ');
}

console.log(capitalize('i am a gOod boy!'));