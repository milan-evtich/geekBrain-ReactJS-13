import React from 'react';
import PropTypes from 'prop-types';
import BlogPost from "./BlogPost";

class SideBarModule extends React.Component {
    render() {
        if(this.props.inset) {
            return <div className="sidebar-module sidebar-module-inset">
                <h4>{this.props.title}</h4>
                <p>{this.props.inset}</p>;
            </div>;
        } else {
            let links = this.props.links.map((item, index) => {
                return <li><a href={item.href}>{item.title}</a></li>
            });
            return <div className="sidebar-module">
                <h4>{this.props.title}</h4>
                <ul>{links}</ul>;
            </div>;
        }
    }

}

// Свойства по умолчанию
SideBarModule.defaultProps = {
    title: "Blog post",
    inset: "",
    links: []
};

// Проверка типов
SideBarModule.propTypes = {
    title: PropTypes.string.isRequired,
    inset: PropTypes.string,
    links: PropTypes.array
};


export default SideBarModule;