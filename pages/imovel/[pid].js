import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Container } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const useStyles = makeStyles(theme =>({
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

const Imovel = () => {
  const classes = useStyles();
  const router = useRouter()
  const { pid } = router.query

  const images = [
    { id: 1, url: "https://res.cloudinary.com/ddodogvjv/image/upload/v1574791637/daniel/casa1_cyqoq5.jpg" },
    { id: 2, url: "https://res.cloudinary.com/ddodogvjv/image/upload/v1574791637/daniel/casa1_cyqoq5.jpg" },
    { id: 3, url: "https://res.cloudinary.com/ddodogvjv/image/upload/v1574791637/daniel/casa1_cyqoq5.jpg" },
    { id: 4, url: "https://res.cloudinary.com/ddodogvjv/image/upload/v1574791637/daniel/casa1_cyqoq5.jpg" },
    { id: 5, url: "https://res.cloudinary.com/ddodogvjv/image/upload/v1574791637/daniel/casa1_cyqoq5.jpg" },
    { id: 6, url: "https://res.cloudinary.com/ddodogvjv/image/upload/v1574791637/daniel/casa1_cyqoq5.jpg" },
    { id: 7, url: "https://res.cloudinary.com/ddodogvjv/image/upload/v1574791637/daniel/casa1_cyqoq5.jpg" },
  ];

  return (
    <Layout>
      <div className={classes.root}>
        
        <GridList className={classes.gridList} cols={3} cellHeight="300">
          {images.map(tile => (
            <GridListTile key={tile.id} cols={1}>
              <img src={tile.url} alt={tile.id} width="100%" height="100%"/>
            </GridListTile>
          ))}
        </GridList>
        <GridList className={classes.gridList1} cols={1}>
          {images.map(tile => (
            <GridListTile key={tile.id} cols={1}>
              <img src={tile.url} alt={tile.id} width="100%" height="100%"/>
            </GridListTile>
          ))}
        </GridList>
      </div>

      <Container>
      <p>Post: {pid}</p>      
      </Container>
      


    </Layout>
  )
}

export default Imovel