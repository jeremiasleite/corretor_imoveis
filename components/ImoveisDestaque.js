import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ApresentarImoveis from './ApresentarImoveis';

const useStyles = makeStyles(theme => ({

    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));


export default function ImoveisDestaque(prop) {    
    return (
        <ApresentarImoveis imoveis={prop.dados} titulo="Destaques"/>        
    );
}

