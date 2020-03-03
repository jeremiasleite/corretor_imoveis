import React from 'react';
import ApresentarImoveis from './ApresentarImoveis';

export default function ImoveisDestaque(prop) {    
    return (
        <ApresentarImoveis imoveis={prop.dados} titulo="Destaques"/>        
    );
}

