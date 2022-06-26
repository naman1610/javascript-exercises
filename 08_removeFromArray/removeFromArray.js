const removeFromArray = function (arr, ...val) {
    let finalArr = [...arr];
    for (let i = 1; i < arguments.length; i++) {
        finalArr = finalArr.filter((elem) => elem !== arguments[i]);
    }
    return finalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
