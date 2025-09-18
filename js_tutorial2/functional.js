let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// URLに適した文字列を返すヘルパー関数
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join('-');
}

// URL生成: 命令型バージョン
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// URL生成: map関数型バージョン
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// URL生成: map関数型バージョン（テンプレート文字列利用）
function makeUrl(elements) {
    return elements.map(element => `https://example.com/${urlify(element)}`);
}
console.log(makeUrl(states));

// 1語の州名を抽出する関数（命令型）
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}
console.log(imperativeSingles(states));

// 1語の州名を抽出する関数（filter関数型）
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// "Dakota"を含む州名を抽出する関数（filter関数型：includes）
function functionalDakota(elements) {
    return elements.filter(element => element.includes("Dakota"));
}
console.log(functionalDakota(states));

// 2語の州名を抽出する関数（filter関数型：split）
function functionalDakota2(elements) {
    return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalDakota2(states));


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 配列の要素の合計を求める関数（命令型）
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(n) {
        total += n;
    });
    return total;
}
console.log(imperativeSum(numbers));

// 配列の要素の合計を求める関数（reduce関数型）
function functionalSum(elements) {
    return elements.reduce((total, n) => {return total += n; }, 0);
}
console.log(functionalSum(numbers));


// 各州名の文字数をオブジェクトで返す関数（命令型）
function imperativeLengths(elements) {
    let lengths = {}; //連想配列
    elements.forEach(function(element) {
        lengths[element] = element.length;
    });
    return lengths;
}
console.log(imperativeLengths(states));

// 各州名の文字数をオブジェクトで返す関数（reduce関数型）
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths;}, {});
}
console.log(functionalLengths(states));

function functionalProduct(elements) {
    return elements.reduce((total, n) => { return total *= n; });
}
console.log(functionalProduct(numbers));