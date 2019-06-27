import React from 'react';
import Layout from "../../components/Layout";
import Usuario from "../../components/Usuario"

class UsuarioPage extends React.Component{
    render()
    {
        return (
            <Layout>
                <Usuario/>
            </Layout>
        )
    }
}

export default UsuarioPage;