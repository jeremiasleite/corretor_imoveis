import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Container } from '@material-ui/core';

import fetch from 'isomorphic-unfetch';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 10,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,

  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  gridList1: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }

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

        <GridList className={classes.gridList} cols={3} cellHeight="300">
          {props.data.imovel.urlImagens.map(tile => (
            <GridListTile cols={1}>
              <img src={tile} alt={tile} width="100%" height="100%"/>
            </GridListTile>
          ))}
        </GridList>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <p><b>Descrição: </b>{props.data.imovel.descricao}</p>
          </Grid>
          
        </Grid>

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