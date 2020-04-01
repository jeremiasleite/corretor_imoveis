import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Carosel from '../../components/Carosel'
import Mapa from '../../components/Mapa'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import BathtIcon from '@material-ui/icons/Bathtub';
import BedIcon from '@material-ui/icons/Hotel';
import CarIcon from '@material-ui/icons/DirectionsCar';
import AreaIcon from '@material-ui/icons/Fullscreen';

import { connect } from "react-redux";
//import fetch from 'isomorphic-unfetch';
import isomorphcFetch from 'isomorphic-unfetch';

const useStyles = makeStyles(theme => ({
  root: {
    marginRight: 'auto',
    marginLeft: 'auto'

  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    [theme.breakpoints.down('md')]: {

    },
  },
  gridList1: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  paper: {
    padding: 7,
    marginBottom: 7,
    height: '100%',
    width: '100%',
  },
  descricao: {
    maxWidth: 900,
    padding: 7,
    marginTop: 5,
    marginBottom:7,
  }

}));

const Imovel = (props) => {
  const classes = useStyles();
  const router = useRouter()
  const center = {lat: -8.1111227, lng:-35.0174667}
  const zoom = 17

  if (!props.data) {
    return "Erro: Página não existe!"
  }

  return (
    <Layout>
      <div className={classes.root}>
        <Grid container justify="center" direction="column">

          <Grid item sm={12} >
            <Carosel urlImagens={props.data.urlImagens}></Carosel>
          </Grid>

          <Grid item sm={12}>
            <Paper className={classes.paper} elevation={3}>
              <Typography variant="h5" gutterBottom>{props.data.titulo}</Typography>
              <Typography variant="button" display="block" gutterBottom>
                Em {props.data.endereco.rua} - {props.data.endereco.bairro}, {props.data.endereco.cidade} - {props.data.endereco.estado}
              </Typography>
              <Typography variant="h3" gutterBottom>
                R$ {props.data.valor}
              </Typography>

              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <BathtIcon></BathtIcon>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="subtitle1">
                        {props.data.numBanheiro} Banheiro
                  </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <BedIcon></BedIcon>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="subtitle1">
                        {props.data.numQuarto} Quarto
                    </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <CarIcon></CarIcon>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="subtitle1">
                        {props.data.numGarage} Garagem
                    </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <AreaIcon></AreaIcon>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="subtitle1">
                        {props.data.area} m<sup>2</sup>
                    </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>


            </Paper>

          </Grid>

          <Grid item sm={12}>
            <Paper className={classes.descricao} elevation={3}>
              <Typography variant="h4" gutterBottom>
                Descrição
            </Typography>
              <Typography variant="body2" gutterBottom >
                {props.data.descricao}
              </Typography>
            </Paper>

          </Grid>

        </Grid>
        {/*<GridList className={classes.gridList} cols={1.1} cellHeight={360}>
          {props.data.urlImagens.map(tile => (
            <GridListTile cols={1}>
              <img src={tile} alt={tile} width="100%" height="100%"/>
            </GridListTile>
          ))}
          </GridList>*/}
          <Mapa center={center} zoom={zoom}></Mapa>
      </div>

    </Layout>
  )
}

Imovel.getInitialProps = async function (context) {  
  const urlBase = context.store.getState().config.urlBase;
  const { pid } = context.query;
  const uri = urlBase +'/api/imovel/'+ pid;  
  const res = await isomorphcFetch(uri);
  const data = await res.json();
  return { data };
};
export default connect(state => state)(Imovel);