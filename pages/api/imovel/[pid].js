import nextConnect from 'next-connect';
import middleware from '../../../middleware/database';
import { ObjectId } from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {    
    let Imovel = req.db.collection('imovels');
    Imovel.findOne({"_id":new ObjectId(req.query.pid)}, function(err, doc) {
        if(err){
            res.json({'erro': err});
        }else{
            res.json(doc);
        }
    }); 
});

export default handler;