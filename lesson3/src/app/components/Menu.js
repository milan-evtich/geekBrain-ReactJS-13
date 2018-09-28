import React from 'react';
import MenuItem from "./MenuItem";
import PropTypes from 'prop-types';

class Menu extends React.Component {
    render() {

        let items = this.props.items.map((item, index) => {
            return <MenuItem key={index} href={item.href} title={item.title}/>
        });

        return <div className={"container"}>
            <nav className={"blog-nab"}>
                {items}
                {/*<a className="blog-nav-item active" href="#">Home</a>*/}
                {/*<a className="blog-nav-item" href="#">New features</a>*/}
                {/*<a className="blog-nav-item" href="#">Press</a>*/}
                {/*<a className="blog-nav-item" href="#">New hires</a>*/}
                {/*<a className="blog-nav-item" href="#">About</a>*/}
            </nav>
        </div>;
    }
}

// Свойства по умолчанию
Menu.defaultProps = {
    menuTitle: "Menu",
    items: []
};

// Проверка типов
Menu.propTypes = {
  menuTitle: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default Menu;