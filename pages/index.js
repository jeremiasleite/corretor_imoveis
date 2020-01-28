import React from 'react';
import fetch from 'isomorphic-unfetch';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import SearchBar from '../components/SearchBar'
import ImoveisDestaque from '../components/ImoveisDestaque';
import Layout from '../components/Layout';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundImage: `url(${"/panofundo.jpg"})`,
    [theme.breakpoints.up('md')]: {
      height: '360px',
    },
    [theme.breakpoints.down('md')]: {
      height: '200px',
    },    
    padding: theme.spacing(8, 0, 6),
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
          <Container maxWidth="sm">
            <Typography component="h3" variant="h6"  color="textPrimary" gutterBottom>
              Busque aqui seu novo imóvel
            </Typography>
            {/* Barra de Pesquisa */}
            <SearchBar></SearchBar>            
          </Container>
        </div>

        <ImoveisDestaque dados={props.data.imoveis}/>      
        
      </main>    
    </Layout>
    
  );
}

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:3001/api/imovel');
  const data = await res.json();
  //console.log(data.imoveis.length)
  //console.log(data.imoveis)
  return {
    data
  };
}
