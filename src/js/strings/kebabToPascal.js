const kebabToPascal = (kebab) => kebab.split('-').reduce((acc, part) => {
    const fl = part.charAt('0').toLocaleUpperCase();
    return acc + fl + part.substr(1).toLocaleLowerCase();
}, '');

export default kebabToPascal;