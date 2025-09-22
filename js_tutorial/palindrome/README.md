This is a sample NPM module.
The module can be used as follows:

$ npm install --global roguri-palindrome
$ vim test.js
let Phrase = require("roguri-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true