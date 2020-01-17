import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ImovelCard from '../components/ImovelCard'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

export default function ImoveisDestaque(props) {
    const classes = useStyles();
    const imoveis = props.imoveis;
    const titulo = props.titulo;
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Typography variant="h4" component="h2" gutterBottom>
                {titulo}
            </Typography>
            <Grid container spacing={4}>
                {imoveis.map(imovel => (
                    <Grid item key={imovel.referencia} xs={12} sm={6} md={4}>
                        <ImovelCard {...imovel}></ImovelCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
