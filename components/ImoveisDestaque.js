import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ApresentarImoveis from './ApresentarImoveis';

/*const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));*/

const imoveis = [
    {
        valor: "200.000",
        referencia: 1,
        tipo: "Casa",
        descricao: "Aqui é uma breve descrição sobre o imóvel, tais como localização e estado de conservação.",
        garagem: 2,
        quartos: 3,
        area: 48,
        banheiro: 1,
        estado: 2,
        urlImagens: ["https://res.cloudinary.com/ddodogvjv/image/upload/v1574791637/daniel/casa1_cyqoq5.jpg"]
    },
    {
        valor: "150.000",
        referencia: 2,
        tipo: "Casa",
        descricao: "Aqui é uma breve descrição sobre o imóvel, tais como localização e estado de conservação.",
        garagem: 2,
        quartos: 3,
        area: 48,
        banheiro: 2,
        estado: 0,
        urlImagens: ["https://res.cloudinary.com/ddodogvjv/image/upload/v1574791637/daniel/casa1_cyqoq5.jpg"]
    },
    {
        valor: "100.000",
        referencia: 3,
        tipo: "Casa",
        descricao: "Aqui é uma breve descrição sobre o imóvel, tais como localização e estado de conservação.",
        garagem: 2,
        quartos: 3,
        area: 48,
        banheiro: 1,
        estado: 1,
        urlImagens: ["https://res.cloudinary.com/ddodogvjv/image/upload/v1574791637/daniel/casa1_cyqoq5.jpg"]
    },
]

export default function ImoveisDestaque() {
    //const classes = useStyles();
    return (
        <ApresentarImoveis imoveis={imoveis} titulo="Destaques"/>        
    );
}
