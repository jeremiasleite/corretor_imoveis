import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Carosel from '../../components/Carosel'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';

import { Container } from '@material-ui/core';

import fetch from 'isomorphic-unfetch';

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
    height: '100%',
    width: '100%',
  },

}));

const Imovel = (props) => {
  const classes = useStyles();
  const router = useRouter()


  if (!props.data.imovel) {
    return "Erro: Página não existe!"
  }

  return (
    <Layout>
      <div className={classes.root}>
        <Grid container justify="center" direction="column">
          
          <Grid item sm={12} >
            <Carosel urlImagens={props.data.imovel.urlImagens}></Carosel>
          </Grid>

          <Grid item>
            <Paper className={classes.paper}>
              <p><b>Descrição: </b>{props.data.imovel.descricao}</p>
            </Paper>
          </Grid>

        </Grid>
        {/*<GridList className={classes.gridList} cols={1.1} cellHeight={360}>
          {props.data.imovel.urlImagens.map(tile => (
            <GridListTile cols={1}>
              <img src={tile} alt={tile} width="100%" height="100%"/>
            </GridListTile>
          ))}
          </GridList>*/}
      </div>

    </Layout>
  )
}

Imovel.getInitialProps = async function (context) {
  const { pid } = context.query;
  const res = await fetch('http://localhost:3001/api/imovel/' + pid);
  const data = await res.json();
  return { data };
};
export default Imovel