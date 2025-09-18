// 文字列を逆順にして返す関数
function reverse(string) {
    return Array.from(string).reverse().join(""); //メソッドチェイン
}

// 文字列を逆順にして返す関数（Stringオブジェクトのプロトタイプに追加）
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

// 文字列が空かどうかを返す関数（Stringオブジェクトのプロトタイプに追加）
String.prototype.blank = function() {
    return !!this.match(/^\s*$/);
}

// 配列の最後の要素を返す関数（Arrayオブジェクトのプロトタイプに追加）
Array.prototype.last = function() {
    return this[this.length - 1];
}

// メールアドレスを「@」で分割して配列で返す関数
function emailParts(email) {
    return email.toLowerCase().split("@");
}

// TranslatedPhraseオブジェクトを定義する
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // 小文字化した翻訳内容を返す関数
    this.processedContent = function processedContent() {
        return this.processer(this.translation);
    }
}

// TranslatedPhraseはPhraseを継承する
TranslatedPhrase.prototype = new Phrase();

// Phraseオブジェクトを定義する
function Phrase(content) {
    this.content = content;

    // 小文字化した内容を返す関数
    this.processer = function processer(string) {
        return string.toLowerCase();
    }

    // パリンドローム用に加工した内容を返す関数
    this.processedContent = function processedContent() {
        return this.processer(this.content);
    }

    // 回文であればtrueを返す関数
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }

    // 大文字化した内容を返す関数
    this.louder = function louder() {
        return this.content.toUpperCase();
    }
}
