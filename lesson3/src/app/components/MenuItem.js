import React from 'react';
import PropTypes from 'prop-types';

class MenuItem extends React.Component {
    render() {
        return <a className="blog-nav-item" href={this.props.href}>{this.props.title}</a>;
    }

}

// Свойства по умолчанию
MenuItem.defaultProps = {
    href: "#",
    title: "Item"
};

// Проверка типов
MenuItem.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};


export default MenuItem;