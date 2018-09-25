import React from 'react';
import ReactDOM from 'react-dom';
import Developer from './Developer';
import DataHolder from "./DataHolder";

class App extends React.Component {
    render() {
        return <div>
            <h1>
                Второе ДЗ
            </h1>
            <Developer/>
            <br/>
            <DataHolder/>
        </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));