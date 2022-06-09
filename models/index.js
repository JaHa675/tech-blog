const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");


User.hasMany(Blog,{foreignKey:'UserId'});
Blog.belongsTo(User,{foreignKey:'UserId'});

Blog.hasMany(Comment,{foreignKey:'CommentId'});
Comment.belongsTo(Blog,{foreignKey:'BlogId'});
Comment.belongsTo(User,{foreignKey:'UserId'});

module.exports = {
    User,
    Blog,
    Comment
} 