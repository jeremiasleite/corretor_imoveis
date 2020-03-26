import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import Uf from '../../util/recursos'
import MenuItem from '@material-ui/core/MenuItem';
import NumberFormat from 'react-number-format';

function CreateImovelEndereco(props) {

    const changerLogradouro = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_END_RUA', payload: event.target.value });
    }
    const changerNumero = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_END_NUMERO', payload: event.target.value });
    }
    const changerBairro = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_END_BAIRRO', payload: event.target.value });
    }
    const changerCidade = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_END_CIDADE', payload: event.target.value });
    }
    const changerEstado = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_END_ESTADO', payload: event.target.value });
    }
    const changerCep = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_END_CEP', payload: event.target.value });
    }
    const changerComplemento = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_END_COMPLEMENTO', payload: event.target.value });
    }
    const uf = Uf()
    
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Endereço
      </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="logradouro"
                        name="logradouro"
                        label="Logradouro"
                        fullWidth
                        value={props.end_rua}
                        onChange={changerLogradouro}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="numero"
                        name="numero"
                        label="Número"
                        type='number'
                        fullWidth
                        value={props.end_numero}
                        onChange={changerNumero}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="bairro"
                        name="bairro"
                        label="Bairro"
                        fullWidth
                        value={props.end_bairro}
                        onChange={changerBairro}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="cidade"
                        name="cidade"
                        label="Cidade"
                        fullWidth
                        value={props.end_cidade}
                        onChange={changerCidade}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="estado"
                        name="estado"
                        label="Estado"
                        fullWidth
                        select
                        value={props.end_estado}
                        onChange={changerEstado}
                    >
                    {uf.map(option => (
                        <MenuItem key={option.sigla} value={option.sigla}>
                            {option.nome}
                        </MenuItem>
                    ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/*<TextField
                        required
                        id="cep"
                        name="cep"
                        label="CEP"
                        fullWidth
                        value={props.end_cep}
                        onChange={changerCep}
                    />*/}
                    <NumberFormat
                        name="cep"
                        label="CEP"
                        value={props.end_cep}
                        onChange={changerCep}
                        fullWidth
                        customInput={TextField}
                        format="#####-###"
                        
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="complemento"
                        name="complemento"
                        label="Complemento"
                        fullWidth
                        value={props.end_complemento}
                        onChange={changerComplemento}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
export default connect(state => state.createImovel)(CreateImovelEndereco)