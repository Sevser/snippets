const checkOgrn = (ogrn) => {
    const n13 = (ogrn.slice(0, -1) % 11).toString().slice(-1);
    return n13 === ogrn[12];
};

export default checkOgrn;