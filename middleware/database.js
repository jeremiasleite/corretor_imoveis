import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient(process.env.DB_URL, {
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