import React from 'react';
import Menu from "./Menu";

class MenuTop extends React.Component {
    render() {
        const menuItems = [
            {href: "/", title: "Home"},
            {href: "/new-features", title: "New features"},
            {href: "/press", title: "Press"},
            {href: "/new-hires", title: "New hires"},
            {href: "/anout-us", title: "About"},
            {href: "/login", title: "Login"}
        ];
        return <div className={"blog-masthead"}>
            <Menu menuTitle={"Top Menu"} items={menuItems} />
        </div>;
    }
}


export default MenuTop;