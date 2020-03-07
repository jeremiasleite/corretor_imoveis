import React from 'react';
import fetch from 'isomorphic-unfetch';
import ImoveisDestaque from '../components/ImoveisDestaque';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export default function Index(props) {
  const router = useRouter()
  console.log(router)
  return (
    <Layout>
      <main>                
        <ImoveisDestaque dados={props.data} />
      </main>
    </Layout>
  );
}

Index.getInitialProps = async function () {
  const res = await fetch('https://ocorretordeimoveis.herokuapp.com/api/imovel');
  const data = await res.json(); 
  return {
    data
  };
}
