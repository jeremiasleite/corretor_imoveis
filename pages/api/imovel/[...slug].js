import nextConnect from 'next-connect';
import middleware from '../../../middleware/middleware_mongoose';
import Imovel from '../../../models/imovel'

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const tipo = req.query.slug[0]
    const condicaoImovel = req.query.slug[1]
    const bairro = req.query.slug[2]
    try {
        if (!bairro) {
            const imoveis = await Imovel.find({ tipo: tipo, condicaoImovel: condicaoImovel })
            res.status(200).json(imoveis);
        } else {
            const imoveis = await Imovel.find({ tipo: tipo, condicaoImovel: condicaoImovel, end_bairro: { $regex: bairro, $options: 'i' } })
            res.status(200).json(imoveis);
        }

    } catch (err) {
        res.status(400).json(err);
    }
});

handler.put(async (req, res) => {
    if( req.query.slug[0]=='upload'){        
        const id = req.query.slug[1]        
        const resposta= await Imovel.updateOne({ _id: id }, { $push: {urlImagens : {id: req.body.public_id, url: req.body.url, rotulo: ''} } });
        res.status(200).json(resposta)
    }
});

export default handler;