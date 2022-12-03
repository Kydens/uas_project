const mongoose = require('mongoose');
const Users = require('./user');

mongoose.connect(
  'mongodb+srv://eddy535210009:Nathansyah221203@cluster0.ntnptln.mongodb.net/webprogramming?retryWrites=true&w=majority',
);

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB server!');
});

module.exports = {
  db,
  Users,
};
