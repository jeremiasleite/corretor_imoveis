import React from 'react';
import fetch from 'isomorphic-unfetch';
import ImoveisDestaque from '../components/ImoveisDestaque';
import Layout from '../components/Layout';
import {connect} from "react-redux";

function Index(props) {
  return (
    <Layout>
      <main>                      
        <ImoveisDestaque dados={props.data} />
      </main>
    </Layout>
  );
}

Index.getInitialProps = async function ({req,store}) {
  //console.log(process.env.URI_BASE)
  const urlBase = store.getState().config.urlBase;  
  const res = await fetch(urlBase+'/imoveis');
  const data = await res.json(); 
  return {
    data
  };
}

export default connect(state => state)(Index);