import React from 'react';
import fetch from 'isomorphic-unfetch';
import ImoveisDestaque from '../components/ImoveisDestaque';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export default function Index(props) {
  const router = useRouter()
  //console.log(router)
  return (
    <Layout>
      <main>                
        <ImoveisDestaque dados={props.data} />
      </main>
    </Layout>
  );
}

Index.getInitialProps = async function ({req}) {
  //[console.log(req.headers.host)   
  const host = req.headers.host;
  let baseUrl = ''
  if(host == 'localhost:3000'){
    baseUrl = 'http://'+ host;
  }else{
    baseUrl = 'https://'+ host;
  }  
  const res = await fetch(baseUrl+'/api/imovel');
  const data = await res.json(); 
  return {
    data
  };
}
