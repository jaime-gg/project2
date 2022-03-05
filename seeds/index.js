const seedUsers = require('./user-seeds');
const seedStories = require('./story-seeds');
const seedComments = require('./comment-seeds.js');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedUsers();

  console.log('--------------');

  await seedStories();

  console.log('--------------');

  await seedComments();
  
  console.log('--------------');


  process.exit(0);
};

seedAll();
