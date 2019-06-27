import React from 'react';
import Layout from "../../components/Layout";
import Inventory from "../../components/Inventory";

class FoodsPage extends React.Component {

    render() {
        return (
            <Layout>
                <Inventory/>
            </Layout>
        )
    }
}

export default FoodsPage;