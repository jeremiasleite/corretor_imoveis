import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 6,    
    width: '100%',
  },
  textField: {
    width: '100%',
    padding: 2,
    margin:2
  },
  button: {
    margin:2,
    height: 56,
    width: '100%',
    padding:4
  }
}));

const condicoes = [
  {
    value: 'comprar',
    label: 'Comprar',
  },
  {
    value: 'alugar',
    label: 'Alugar',
  },
  {
    value: 'imoveis_novos',
    label: 'Imóveis Novos',
  }
];

const tiposImoveis = [
  {
    value: 'apartamento',
    label: 'Apartamento',
  },
  {
    value: 'casa',
    label: 'Casa',
  },
  {
    value: 'terreno',
    label: 'Terreno',
  }
];

export default function SearchBar() {
  const classes = useStyles();
  const [condicao, setCondicao] = React.useState('comprar');
  const [tipoImovel, setTipoImovel] = React.useState('apartamento');

  const handleChangeCondicao = event => {
    setCondicao(event.target.value);
  };

  const handleChangeTipoImovel = event => {
    setTipoImovel(event.target.value);
  };

  return (
    <Paper component="form" className={classes.root}>
      <Grid container alignItems='center'>
        <Grid item sm={12}>
          <Typography component="h3" variant="h5" color="textPrimary" gutterBottom>
            Busque aqui seu novo imóvel
                </Typography>
        </Grid>
        <Grid item sm={2} xs={6}>
          <TextField
            className={classes.textField}
            id="standard-select-currency"
            select
            variant="outlined"
            color='primary'            
            value={condicao}
            onChange={handleChangeCondicao}          
          >
            {condicoes.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item sm={3} xs={6}>
          <TextField
            className={classes.textField}
            id="standard-select-currency2"
            select
            variant="outlined"            
            value={tipoImovel}
            onChange={handleChangeTipoImovel}
          >
            {tiposImoveis.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item sm={5} xs={12}>
          <TextField className={classes.textField} id="standard-basic" variant="outlined" label="Digite uma rua, bairro ou cidade"></TextField>
        </Grid>
        <Grid item sm={2} xs={12}>
          <Button className={classes.button} variant="contained" color="primary" size="large">Buscar</Button>
        </Grid>

      </Grid>
    </Paper>
  );
}