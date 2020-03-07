import nextConnect from 'next-connect';
import middleware from '../../middleware/middleware_mongoose';
import User from '../../models/user'

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    //const { email, username } = req.body;
    
    const dados = {
        email: 'jeremias@gmail.com',
        username: 'jeremias',
        name: 'jeremias leite',
        password: '12345'
    }

    try {
        /*if (await User.findOne({ email: dados.email })) {
            //return res.status(400).json({ error: "User already exists" });
            res.status(400).json({ error: "User already exists" });
        }*/

        //const user = await User.create(dados);
        const user = await User.findOne({ email: 'sandrelynn_viana@gmail.com' })
        res.json({ user });
    } catch (err) {
        //return res.status(400).json({ error: "User registration failed" });
        res.status(400).json({ error: "User registration failed" });
    }
    
});


export default handler;