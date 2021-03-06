import React from 'react';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import BathtIcon from '@material-ui/icons/Bathtub';
import BedIcon from '@material-ui/icons/Hotel';
import CarIcon from '@material-ui/icons/DirectionsCar';
import AreaIcon from '@material-ui/icons/Fullscreen';

import Rotulo from './Rotulo'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  root:{    
    position: 'relative',
    display: 'inline-block',
  },
  card: {
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 300,
    },    
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    height: 140,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));
  
export default function ImovelCard(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>      
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.imovel.urlImagens[0] == null? '/imagens/sem_imagem.jpg' : props.imovel.urlImagens[0].url}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              R$ {props.imovel.valor}
          </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="subtitle1">
                  {props.imovel.tipo}
              </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="subtitle1">
                  Ref.: {props.imovel._id}
              </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.imovel.titulo}
          </Typography>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <BathtIcon></BathtIcon>
                  </Grid>
                  <Grid item>
                    <Typography gutterBottom variant="subtitle1">
                      {props.imovel.numBanheiro} Banheiro
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
                      {props.imovel.numQuarto} Quarto
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
                      {props.imovel.numGarage} Garagem
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
                      {props.imovel.area} m<sup>2</sup>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link href="/imovel/[pid]" as={`/imovel/${props.imovel._id}`}>
            <Button size="small" color="primary">
              Mais Informações
            </Button>
          </Link>
          
        </CardActions>
      </Card>     
      <Rotulo estado={props.imovel.estado}/>
    </div>
  );
}