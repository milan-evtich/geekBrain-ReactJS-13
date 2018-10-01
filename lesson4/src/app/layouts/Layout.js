import React from 'react';
import MainSpace from "../components/MainSpace";
import MenuTop from "../components/ManuTop";
import Footer from "../components/Footer";

class Layout extends React.Component {
    render() {
        return (<div className={"container"}>
                <MenuTop />
                <MainSpace />
                <Footer/>
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount()');
        alert('Welcome to our website!');
    }
}


export default Layout;