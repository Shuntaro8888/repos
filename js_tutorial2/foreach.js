let a = ["ant", "bat", "cat", 42];
// 通常の無名関数で表す
a.forEach(function(element) {
  console.log(element);
});
// アロー関数式で表す
a.forEach(element => {
  console.log(element);
});


let soliloquy = "To be or not to be, that is the question,";
Array.from(soliloquy).forEach(function(element) {
  console.log(element);
});