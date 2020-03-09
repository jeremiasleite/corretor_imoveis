import React from 'react';
import fetch from 'isomorphic-unfetch';
import ImoveisDestaque from '../components/ImoveisDestaque';
import Layout from '../components/Layout';

export default function Index(props) {
  return (
    <Layout>
      <main>                
        <ImoveisDestaque dados={props.data} />
      </main>
    </Layout>
  );
}

Index.getInitialProps = async function ({req}) {
  const baseUrl = process.env.URI_BASE;
  const res = await fetch(baseUrl+'/api/imovel');
  const data = await res.json(); 
  return {
    data
  };
}
