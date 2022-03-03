// IMPORT ALL MODELS
const Story = require('./Story');
const User = require('./User');
const Comment = require('./Comment');
const Cover = require('./Cover');


// ASSOCIATIONS
User.hasMany(Story, {
  foreignKey: 'user_id'
});

Story.belongsTo(User, {
  foreignKey: 'user_id'
});

// User.hasMany(Cover,{
//   foreignKey: 'user_id'
// });

Story.hasOne(Cover,{
  foreignkey: 'cover_id'
});

Cover.belongsTo(Story, {
  foreignKey: 'story_id'
});



Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Story, {
  foreignKey: 'story_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Story.hasMany(Comment, {
  foreignKey: 'story_id'
});

module.exports = {User, Comment, Story };