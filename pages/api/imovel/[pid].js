import nextConnect from 'next-connect';
import middleware from '../../../middleware/middleware_mongoose';
import Imovel from '../../../models/imovel'

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {        
    try {
        const imovel = await Imovel.findOne({"_id": req.query.pid})        
        res.json(imovel);
a} catch (err) {
        res.status(400).json(err);
    }

});

handler.put(async (req, res) => {
    try {
        const imovel = await Imovel.updateMany( {_id: req.query.pid}, req.body)           
        res.json(imovel);
    } catch (err) {
        res.status(400).json(err);
    }
});

export default handler;