import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
        return <div className={"blog-header"}>
            <h1 className={"blog-title"}>{this.props.title}</h1>
            <p className={"lead blog-description"}>
                {this.props.children}
            </p>
        </div>;
    }
}

// Свойства по умолчанию
Header.defaultProps = {
    title: "Page header title"
};

// Проверка типов
Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;