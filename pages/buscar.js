import Layout from "../components/Layout"
import { useRouter } from 'next/router'
import ApresentarImoveis from '../components/ApresentarImoveis';
import fetch2 from 'unfetch';
import useSWR from 'swr';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginRight: 'auto',
        marginLeft: 'auto'
    }
}))
//const API_URL = process.env.URI_BASE;
async function fetcher(path) {
    //console.log(API_URL)
    const res = await fetch2(path)
    const json = await res.json()
    return json
  }

const Buscar = (props) => {
    const classes = useStyles();
    const API_URL = process.env.URI_BASE;
    console.log(API_URL)
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

export default Buscar