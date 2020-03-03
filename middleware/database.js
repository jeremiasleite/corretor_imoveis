import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://jeremias:autocad789@ds031657.mlab.com:31657/daniel_imoveis', {useNewUrlParser: true});


const client = new MongoClient('mongodb://jeremias:autocad789@ds031657.mlab.com:31657/daniel_imoveis', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('daniel_imoveis');
  return next();
}

/*async function database(req, res, next) {
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    return next();
  });
  //req.dbClient = client;
  //req.db = client.db('daniel_imoveis');
  //return next();
}*/

const middleware = nextConnect();

middleware.use(database);

export default middleware;