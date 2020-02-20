import { Container } from '@material-ui/core';
import SearchBar from '../components/SearchBar'
import Logo from '../components/Logo';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({  
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
  
}));

export default function Index(props) {
  const classes = useStyles();

  return(
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
  )  
};
