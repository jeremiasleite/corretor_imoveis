import Layout from "../components/Layout"
import { useRouter } from 'next/router'
import ApresentarImoveis from '../components/ApresentarImoveis';
import fetch from 'unfetch';
import useSWR from 'swr';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginRight: 'auto',
        marginLeft: 'auto'
    }
}))

async function fetcher(path) {
    const res = await fetch(path)
    const json = await res.json()
    return json
  }

const Buscar = (props) => {
    const classes = useStyles();
    const API_URL = props.urlBase;
    const router = useRouter()    
    const tipoImovel = router.query.tipoImovel
    const condicaoImovel = router.query.condicaoImovel
    const local = router.query.local
    const { data, error } = useSWR(API_URL+'/api/imovel/' + tipoImovel + '/' + condicaoImovel + '/' + local, fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return (<Layout><div>loading...</div></Layout>)
    return (        
        <Layout>                      
            <ApresentarImoveis imoveis={data} titulo="Imóveis Encontrados"/>
        </Layout>
    )
}

export default connect(state => state.config)(Buscar)