module.exports = Phrase;

// 文字列を逆順にして返す関数（Stringオブジェクトのプロトタイプに追加）
String.prototype.reverse = function() {
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
        return Array.from(this.content).filter(c => c.match(/[a-z]/gi)).join("");
    }

    this.letters = function letters() {
        return (this.content.match(/[a-z]/gi) || []).join("");
    }
}
