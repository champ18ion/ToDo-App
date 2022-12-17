//require mongoose
const mongoose = require('mongoose');
//connecting to the db

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1/todo_app');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
const db = mongoose.connection;
db.once('open', function() {
  console.log('Successfully connected to DB');
});