import nextConnect from 'next-connect';
var mongoose = require('mongoose');
const MONGODB_URI = process.env.DB_URL;

async function database(req, res, next) {
  if (mongoose.connection.readyState != 2) await mongoose.connect( MONGODB_URI, {useNewUrlParser: true});
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;