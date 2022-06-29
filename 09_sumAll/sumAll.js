const sumAll = function(n1, n2) {
    if (Number.isInteger(n1) && Number.isInteger(n2) && n1 > 0 && n2 > 0) {
        if (n1 > n2) {
            return calcSum(n1,n2);
        } else {
            return calcSum(n2,n1);
        }
    } else {
        return 'ERROR';
    }
};

function calcSum(high, low) {
    let s = 0;
    while (low <= high) {
        s+=low;
        low++;
    }
    return s;
}

// Do not edit below this line
module.exports = sumAll;
