let a = [17, 99, 8, 42];

function numberCompare(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}
a.sort(numberCompare);
console.log(a);

a.sort(function(a, b) { //通常の無名関数
    return a - b;
});

//アロー関数式とforEachのチェイン
a.sort((a, b) => a - b).forEach(function(element) {
    console.log(element);
});

function square(x) {
    return x * x;
}

let altSquare = (x) => {
    return x * x;
}