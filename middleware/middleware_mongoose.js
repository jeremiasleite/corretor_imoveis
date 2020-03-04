import nextConnect from 'next-connect';
var mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://jeremias:autocad789@ds031657.mlab.com:31657/daniel_imoveis'

async function database(req, res, next) {
  if (mongoose.connection.readyState != 2) await mongoose.connect( MONGODB_URI, {useNewUrlParser: true});
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;