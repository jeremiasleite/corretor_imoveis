import nextConnect from 'next-connect';

const handler = nextConnect();

handler.post(async (req, res) => {
    if(req.body.email == 'jeremias23456@gmail.com' && req.body.password == 'aaaa'){
        res.json({resp: 'logado', token:'1234567', username: 'jeremias'})
    }else{
        res.status(401).send({error: 'email ou senha incorreta!'})
    }
    
});

export default handler;