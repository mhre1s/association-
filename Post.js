
const Comment = require("./Comment");

class Post {
  constructor(title, comments = [], author) {
    this.author = author
    this.comments = comments;
    this.title = title;
  }
  addComment(textComm) {
    let comm = new Comment(textComm);
    this.comments.push(comm);
    return comm
  }
}
module.exports = Post;
