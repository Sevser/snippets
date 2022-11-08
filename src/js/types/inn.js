const checkDigit = (inn, coefficients) => {
    let n = 0;
    coefficients.forEach((val, i) => {
        n += val * inn[i];
    });
    return parseInt((n % 11) % 10, 10);
};

const checkINN = () => {
    const n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
    return n10 === parseInt(inn[9], 10);
};

export default checkINN;