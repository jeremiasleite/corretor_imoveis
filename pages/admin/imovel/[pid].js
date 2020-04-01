import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/admin/Layout'
import Titulo from '../../../components/Titulo'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from "react-redux";
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Uf from '../../../util/recursos'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import fetch from 'unfetch';
import isomorphcFetch from 'isomorphic-unfetch';
import Dialog from '@material-ui/core/Dialog';
import DialogAddImagem from '../../../components/admin/DialogAddImagem'
import Swal from 'sweetalert2'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles(theme => ({

  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 700,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  input: {
    display: 'none',
  },
}));

const EditarImovel = (props) => {
  const classes = useStyles();
  const router = useRouter()
  const { pid } = router.query
  const uf = Uf()

  const changeTitulo = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_TITULO', payload: event.target.value });
  }
  const changeTipo = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_TIPO', payload: event.target.value });
  }
  const changeCondicao = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_CONDICAO', payload: event.target.value });
  }
  const changeValor = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_VALOR', payload: event.target.value });
  }
  const changeDescricao = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_DESCRICAO', payload: event.target.value });
  }
  const changeArea = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_AREA', payload: event.target.value });
  }
  const changeAreaTotal = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_AREA_TOTAL', payload: event.target.value });
  }
  const changeQuartos = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_QUARTOS', payload: event.target.value });
  }
  const changeBanheiros = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_BANHEIRO', payload: event.target.value });
  }
  const changeSuites = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_SUITES', payload: event.target.value });
  }
  const changeGaragem = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_GARAGEM', payload: event.target.value });
  }
  const changeCondominio = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_CONDOMINIO', payload: event.target.value });
  }
  const changeIptu = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_IPTU', payload: event.target.value });
  }
  const changeLogradouro = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_END_RUA', payload: event.target.value });
  }
  const changeNumero = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_END_NUMERO', payload: event.target.value });
  }
  const changeBairro = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_END_BAIRRO', payload: event.target.value });
  }
  const changeCidade = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_END_CIDADE', payload: event.target.value });
  }
  const changeEstado = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_END_ESTADO', payload: event.target.value });
  }
  const changeCep = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_END_CEP', payload: event.target.value });
  }
  const changeComplemento = (event) => {
    props.dispatch({ type: 'ATUALIZAR_IMOVEL_END_COMPLEMENTO', payload: event.target.value });
  }

  const handleClickOpen = () => {
    props.dispatch({ type: 'OPEN_DIALOG', payload: {} });
  };

  const handleClose = () => {
    props.dispatch({ type: 'CLOSE_DIALOG', payload: {} });
  };
  
  const [destaque, setDestaque] = useState(props.data.destaque);

  const handleChange = async (event) => {
    setDestaque( event.target.checked);
    const API_URL = props.config.urlBase + '/api/imovel/';
    try {
      const response = await fetch(API_URL + pid, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({destaque: event.target.checked})
      })
      if (response.ok) {
        Swal.fire({ icon: 'success', text: 'Atualizado com sucesso!' })        
      } else {
        const { error } = await response.json();
        setErro(error)
      }
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      )
      throw new Error(error)
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const API_URL = props.config.urlBase + '/api/imovel/';
    try {
      const response = await fetch(API_URL + pid, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(props.atualizarImovel)
      })
      if (response.ok) {
        Swal.fire({ icon: 'success', text: 'Atualizado com sucesso!' })        
      } else {
        const { error } = await response.json();
        setErro(error)
      }
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      )
      throw new Error(error)
    }

  }
  return (
    <Layout>
      <Titulo titulo={'Editar Imóvel'}></Titulo>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <FormGroup row>            
            <FormControlLabel
              control={
                <Switch
                  checked={destaque}
                  onChange={handleChange}
                  name="checkedA"
                  color="primary"
                />
              }
              label="Destaque"
            />
          </FormGroup>
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            Imagens
            </Typography>
          <Typography variant="body1" gutterBottom>
            Nenhuma Imagens
          </Typography>

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleClickOpen}
          >
            Adicionar Imagem
          </Button>
          <Dialog open={props.addImagens.modalOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogAddImagem />
          </Dialog>
        </Paper>
        <Paper className={classes.paper}>
          <React.Fragment>
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" gutterBottom>
                Dados Principais
            </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="titulo"
                    name="titulo"
                    label="Titulo"
                    fullWidth
                    value={props.atualizarImovel.titulo}
                    onChange={changeTitulo}
                    autoComplete="fname"
                    helperText=""
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="tipoImovel"
                    select
                    label="Tipo de Imovel"
                    fullWidth
                    value={props.atualizarImovel.tipo}
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
                    value={props.atualizarImovel.condicaoImovel}
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
                    value={props.atualizarImovel.area}
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
                    value={props.atualizarImovel.areaTotal}
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
                    value={props.atualizarImovel.numQuarto}
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
                    value={props.atualizarImovel.numBanheiro}
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
                    value={props.atualizarImovel.numSuites}
                    onChange={changeSuites}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="garagem"
                    name="garagem"
                    label="Vagas de Garages"
                    fullWidth
                    type="number"
                    value={props.atualizarImovel.numGaragem}
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
                    value={props.atualizarImovel.descricao}
                    onChange={changeDescricao}
                    autoComplete="fname"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <NumberFormat
                    required
                    name="valor"
                    label="Valor"
                    value={props.atualizarImovel.valor}
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
                    value={props.atualizarImovel.condominio}
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
                    value={props.atualizarImovel.iptu}
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
              <Divider className={classes.divider} />
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
                    value={props.atualizarImovel.end_rua}
                    onChange={changeLogradouro}
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
                    value={props.atualizarImovel.end_numero}
                    onChange={changeNumero}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="bairro"
                    name="bairro"
                    label="Bairro"
                    fullWidth
                    value={props.atualizarImovel.end_bairro}
                    onChange={changeBairro}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="cidade"
                    name="cidade"
                    label="Cidade"
                    fullWidth
                    value={props.atualizarImovel.end_cidade}
                    onChange={changeCidade}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="estado"
                    name="estado"
                    label="Estado"
                    fullWidth
                    select
                    value={props.atualizarImovel.end_estado}
                    onChange={changeEstado}
                  >
                    {uf.map(option => (
                      <MenuItem key={option.sigla} value={option.sigla}>
                        {option.nome}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <NumberFormat
                    name="cep"
                    label="CEP"
                    value={props.atualizarImovel.end_cep}
                    onChange={changeCep}
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
                    value={props.atualizarImovel.end_complemento}
                    onChange={changeComplemento}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <div className={classes.buttons}>
                    <input
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="submit"
                    />
                    <label htmlFor="contained-button-file">
                      <Button variant="contained" color="primary" component="span">
                        Atualizar
                      </Button>
                    </label>
                  </div>
                </Grid>
              </Grid>
            </form>
          </React.Fragment>
        </Paper>
      </main>
    </Layout>

  )
}

EditarImovel.getInitialProps = async function ({ req, query, store }) {
  const urlBase = store.getState().config.urlBase;
  const pid = query.pid
  const res = await isomorphcFetch(urlBase + '/api/imovel/' + pid);
  const data = await res.json();
  store.getState().atualizarImovel = data
  return { data };
}

export default connect(state => state)(EditarImovel)