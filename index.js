const Author = require("./Author");

const author = new Author("Matheus Reis");
const pos = author.publishPost("As crônicas do linguiça");

pos.addComment("Legal!");
pos.addComment("Bacana!");
pos.addComment("Insano carai!");
console.log(pos, author);
