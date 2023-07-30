const mongoose = require('mongoose');
const dotenv = require('dotenv');
<<<<<<< HEAD

dotenv.config({ path: './config.env' });
const app = require('./app');
=======
const app = require('./app');

dotenv.config({ path: './config.env' });
>>>>>>> dcf5aa86db4a7546c74431327535534437cf424a

// console.log(process.env);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening to requests on ${port}`);
});
