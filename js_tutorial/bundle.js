(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("roguri-palindrome");

function palindromeTester(event) {
    event.preventDefault(); // formのデフォルトの送信動作を防ぐ

    let phrase = new Phrase(event.target.phrase.value);
    let palindromeResult = document.querySelector("#palindromeResult");

    if (phrase.palindrome()) {
        palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome!`;
    } else {
        palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is not a palindrome.`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let tester = document.querySelector("#palindromeTester");
    tester.addEventListener("submit", function(event) {
        palindromeTester(event);
    });
});
},{"roguri-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// 文字列を逆順にして返す関数（Stringオブジェクトのプロトタイプに追加）
String.prototype.reverse = function () {
    return Array.from(this).reverse().join("");
}

// Phraseオブジェクトを定義する
function Phrase(content) {
    this.content = content;

    // 小文字化した内容を返す関数
    this.processer = function processer(string) {
        return string.toLowerCase();
    }

    // パリンドローム用に加工した内容を返す関数
    this.processedContent = function processedContent() {
        return this.processer(this.letters());
    }

    // 回文であればtrueを返す関数
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }

    // コンテンツの文字だけを返す関数
    this.letters = function letters() {
        return (this.content.match(/[a-z]/gi) || []).join("");
    }

    // コンテンツの文字だけを返す関数（関数型）
    // this.letters = function letters() {
    //     const lettersRegEx = /[a-z]/gi;
    //     return Array.from(this.content).filter(c => c.match(lettersRegEx)).join("");
    // }
}

},{}]},{},[1]);
