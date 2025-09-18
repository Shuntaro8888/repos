console.log("hello, world!", "hows it going?");

console.log('Hello\tWorld\nGoodbye');
console.log("Hello\tWorld\nGoodbye");
console.log(`Hello\tWorld\nGoodbye`);

let soliloquy = "To be or not to be, that is the question,";
console.log(soliloquy.includes("To be"));
console.log(soliloquy.includes("question"));
console.log(soliloquy.includes("nonexistent"));
console.log(soliloquy.includes("To be", 0));
console.log(soliloquy.includes("TO BE"));
console.log(soliloquy.includes(""));

let str = "hoNeY BaDGer";
console.log(str.toLowerCase().includes("badger"));