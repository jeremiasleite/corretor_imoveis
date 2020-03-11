import React from 'react';
import fetch from 'isomorphic-unfetch';
import ImoveisDestaque from '../components/ImoveisDestaque';
import Layout from '../components/Layout';
import {connect} from "react-redux";

function Index(props) {
  return (
    <Layout>
      <main>
      <div>Prop from Redux {props.user.nome}</div>                
        <ImoveisDestaque dados={props.data} />
      </main>
    </Layout>
  );
}

Index.getInitialProps = async function ({req,store}) {
  //store.dispatch({type: 'SET_URLBASE', payload: 'foo'});
  const urlBase = store.getState().config.urlBase;  
  const res = await fetch(urlBase+'/api/imovel');
  const data = await res.json(); 
  return {
    data
  };
}

export default connect(state => state)(Index);