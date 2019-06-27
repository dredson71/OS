import React from 'react';
import Layout from "../../components/Layout";
import DateInventory from "../../components/DateInventory";

class FoodsPage extends React.Component {

    render() {
        return (
            <Layout>
                <DateInventory/>
            </Layout>
        )
    }
}

export default FoodsPage;