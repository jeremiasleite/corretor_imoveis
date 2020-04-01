import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from "react-redux";
import NumberFormat from 'react-number-format';

/*const numberFormat = (value) =>
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);*/

function CreateImovel1(props) {

    const changeTitulo = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_TITULO', payload: event.target.value });
    }
    const changeTipo = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_TIPO', payload: event.target.value });
    }
    const changeCondicao = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_CONDICAO', payload: event.target.value });
    }
    const changeValor = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_VALOR', payload: event.target.value });
    }
    const changeDescricao = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_DESCRICAO', payload: event.target.value });
    }
    const changeArea = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_AREA', payload: event.target.value });
    }
    const changeAreaTotal = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_AREA_TOTAL', payload: event.target.value });
    }
    const changeQuartos = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_QUARTOS', payload: event.target.value });
    }
    const changeBanheiros = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_BANHEIRO', payload: event.target.value });
    }
    const changeSuites = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_SUITES', payload: event.target.value });
    }
    const changeGaragem = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_GARAGEM', payload: event.target.value });
    }
    const changeCondominio = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_CONDOMINIO', payload: event.target.value });
    }
    const changeIptu = (event) => {
        props.dispatch({ type: 'CREATE_IMOVEL_IPTU', payload: event.target.value });
    }
    //console.log(props)
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Dados Principais
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8}>
                    <TextField
                        required
                        id="titulo"
                        name="titulo"
                        label="Titulo"
                        fullWidth
                        value={props.titulo}
                        autoComplete="fname"
                        onChange={changeTitulo}
                        helperText=""
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="tipoImovel"
                        select
                        label="Tipo de Imovel"
                        fullWidth
                        value={props.tipo}
                        onChange={changeTipo}
                    >
                        <MenuItem value={1}>Casa</MenuItem>
                        <MenuItem value={2}>Apartamento</MenuItem>
                        <MenuItem value={3}>Imóvel Comercial</MenuItem>
                        <MenuItem value={4}>Terreno</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="condicaoImovel"
                        select
                        label="Transação"
                        fullWidth
                        value={props.condicaoImovel}
                        onChange={changeCondicao}
                    >
                        <MenuItem value={1}>Comprar</MenuItem>
                        <MenuItem value={2}>Alugar</MenuItem>
                        <MenuItem value={3}>Imóveis Novos</MenuItem>
                    </TextField>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="area"
                        name="area"
                        label="Área útil (m²)"
                        fullWidth
                        type="number"
                        value={props.area}
                        onChange={changeArea}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="area_total"
                        name="area_total"
                        label="Área total (m²) (Opcional)"
                        fullWidth
                        type="number"
                        value={props.areaTotal}
                        onChange={changeAreaTotal}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="quartos"
                        name="quartos"
                        label="Quartos"
                        fullWidth
                        autoComplete="fname"
                        type="number"
                        value={props.numQuarto}
                        onChange={changeQuartos}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="banheiros"
                        name="banheiros"
                        label="Banheiros"
                        fullWidth
                        type="number"
                        value={props.numBanheiro}
                        onChange={changeBanheiros}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="suites"
                        name="suites"
                        label="Suítes"
                        fullWidth
                        type="number"
                        value={props.numSuites}
                        onChange={changeSuites}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="garage"
                        name="garage"
                        label="Vagas de Garages"
                        fullWidth
                        type="number"
                        value={props.numGaragem}
                        onChange={changeGaragem}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        multiline={true}
                        id="descricao"
                        name="descricao"
                        label="Descrição do Imóvel"
                        fullWidth
                        value={props.descricao}
                        onChange={changeDescricao}
                        autoComplete="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <NumberFormat
                        required
                        name="valor"
                        label="Valor"
                        value={props.valor}
                        onChange={changeValor}
                        fullWidth
                        customInput={TextField}
                        thousandSeparator={true}
                        prefix={'R$'}
                        decimalSeparator={','}
                        thousandSeparator={'.'}
                    />

                </Grid>
                <Grid item xs={12} sm={4}>
                    <NumberFormat
                        name="condominio"
                        label="Condomínio (mês)"
                        value={props.condominio}
                        onChange={changeCondominio}
                        fullWidth
                        customInput={TextField}
                        thousandSeparator={true}
                        prefix={'R$'}
                        decimalSeparator={','}
                        thousandSeparator={'.'}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <NumberFormat
                        name="iptu"
                        label="IPTU"
                        value={props.iptu}
                        onChange={changeIptu}
                        fullWidth
                        customInput={TextField}
                        thousandSeparator={true}
                        prefix={'R$'}
                        decimalSeparator={','}
                        thousandSeparator={'.'}
                    />
                </Grid>
            </Grid>
        </React.Fragment >
    );
}

export default connect(state => state.createImovel)(CreateImovel1)