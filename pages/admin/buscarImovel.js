import Layout from '../../components/admin/Layout'
import { connect } from "react-redux";
import fetch from 'isomorphic-unfetch';
import ImovelCard from '../../components/admin/ImovelCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Titulo from '../../components/Titulo'

function BuscarImovel(props) {
    if (!props.data) {
        return <p>...Carregando</p>
    }
    const imoveis = props.data
    return (
        <Layout>
            <Titulo titulo={'Buscar Imóvel'}/>
            <Container maxWidth="md">                
                <Grid container spacing={4}>
                    {imoveis.map(imovel =>
                        <Grid item key={imovel._id} xs={12} sm={6} md={4}>
                            <ImovelCard imovel={imovel}></ImovelCard>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </Layout>
    )
}
BuscarImovel.getInitialProps = async function ({ req, store }) {
    const urlBase = store.getState().config.urlBase;
    const res = await fetch(urlBase + '/api/imovel');
    const data = await res.json();
    return {
        data
    };
}
export default connect(state => state)(BuscarImovel)

