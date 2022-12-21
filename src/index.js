module.exports = function reverse(n) {
    let c = "" + Math.abs(n);
    let b = "";
    for (let i = c.length - 1; i >= 0; i--) {
        b += c[i];
    }
    return b;
};
