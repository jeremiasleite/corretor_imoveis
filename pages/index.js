import React from 'react';
import fetch from 'isomorphic-unfetch';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchBar from '../components/SearchBar'
import ImoveisDestaque from '../components/ImoveisDestaque';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Logo from '../components/Logo';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundImage: `url(${"/panofundo.jpg"})`,
    [theme.breakpoints.up('md')]: {
      height: '360px',
      padding: theme.spacing(8, 0, 6),
    },
    [theme.breakpoints.down('md')]: {
      height: '360px',
      padding: theme.spacing(1, 0, 6),
    },    
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));

export default function Index(props) {

  const classes = useStyles();

  return (
    <Layout>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container>
            <Grid container justify='center' alignItems='center'>
              <Grid item sm={2} xs={12}>
                <Logo></Logo>
              </Grid>              
              <Grid item sm={10} xs={12}>
                {/* Barra de Pesquisa */}
                <SearchBar></SearchBar>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Header></Header>
        <ImoveisDestaque dados={props.data.imoveis} />

      </main>
    </Layout>

  );
}

Index.getInitialProps = async function () {
  const res = await fetch('http://localhost:3001/api/imovel');
  const data = await res.json();  
  return {
    data
  };
}
