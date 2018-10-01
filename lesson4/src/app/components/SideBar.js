import React from 'react';
import PropTypes from 'prop-types';
import SideBarModule from './SideBarModule'
import LoginModal from "./LoginModal";

class SideBar extends React.Component {
    render() {

        let modules = this.props.modules.map((item, index) => {
            return <SideBarModule key={index} title={item.title} inset={item.inset} links={item.links}></SideBarModule>
        });

        return <div className={"col-sm-3 col-sm-offset-1 blog-sidebar"}>
            <div>
                <LoginModal/>
            </div>

            {modules}
        </div>;
    }
}

// Свойства по умолчанию
SideBar.defaultProps = {
    modules: []
};

// Проверка типов
SideBar.propTypes = {
    modules: PropTypes.array.isRequired
};

export default SideBar;