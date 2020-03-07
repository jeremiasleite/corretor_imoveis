import nextConnect from 'next-connect';
import middleware from '../../middleware/middleware_mongoose';
import Imovel from '../../models/imovel'


const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    try {
        const imoveis = await Imovel.find({})
        res.json(imoveis);
    } catch (err) {
        res.status(400).json(err);
    }
});

handler.post(async (req, res) => {
    try {
        const imovel = await Imovel.create(req.body);
        return res.json(imovel);
    } catch (err) {
        return res.status(400).json({ error: "Erro ao cadastrar imóvel." });
    }
});


export default handler;