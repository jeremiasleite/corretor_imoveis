import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//import logo from './imagens/vendido.png';

const useStyles = makeStyles({
    
    rotulo:{
      position: 'absolute',
      top: '0',
      right: '0',
      left: '0',
      fontSize: '50',
      color: 'black',
      textAlign: "center",
      backgroundColor: '#FF8C00',
      borderRadius: '5px 5px 0px 0px' 
    },
    image: {
        position: 'absolute',       
        top: '0',
        textAlign: 'center',
        marginTop: 10
    }
  });

export default function Rotulo(props) {
    const classes = useStyles();
    const estado = props.estado;
    
    if (estado == 1){
        return (
            <div className={classes.image}>
                {/*<Typography variant="h6">
                    Vendido
        </Typography>*/}
                <img src='imagens/vendido2.png' alt="Logo" width='80%'/>
            </div>
        );
    }else if (estado == 2){
        return (
            <div className={classes.image}>
                <img src='imagens/alugado.png' alt="Logo" width='80%'/>
            </div>
        );
    }
    return '';    
}