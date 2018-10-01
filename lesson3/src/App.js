import React from 'react';
import ReactDOM from 'react-dom';
import MainSpace from './app/components/MainSpace';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app/styles/main.css';
import Layout from "./app/layouts/Layout";

class App extends React.Component {
    render() {
        return <Layout>
        </Layout>;
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));