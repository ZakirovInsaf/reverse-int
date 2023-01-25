module.exports = function reverse(n) {
    let all = "" + Math.abs(n-n-n);
    let finish = "";
    for (let i = all.length - 1; i >= 0; i--) {
        finish += all[i];
    }
    return finish;
};
