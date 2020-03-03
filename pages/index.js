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

Index.getInitialProps = async function () {
  const res = await fetch('http://localhost:3000/api/imovel');
  const data = await res.json(); 
  //console.log(data)
  return {
    data
  };
}
