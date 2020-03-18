import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import Router from 'next/router'
import Link from '@material-ui/core/Link';
import { getUsername } from "../services/auth";
import Layout from '../components/admin/Layout'

function Index(props) {
    const [username, setUsername] = useState('');
    useEffect(() => {
        const userName = getUsername()
        setUsername(userName)        
    });
    return (
        <Layout>
            <h1>{username} 👋</h1>
        </Layout>
    );
}

export default connect(state => state)(Index)