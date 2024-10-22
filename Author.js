const Post = require("./Post");

class Author {
  constructor(name, posts = []) {
    this.name = name;
    this.posts = posts;
  }
  publishPost(title) {
    let post = new Post(title, [], this.name);
    this.posts.push(post);
    return post;
  }
}
module.exports = Author;
