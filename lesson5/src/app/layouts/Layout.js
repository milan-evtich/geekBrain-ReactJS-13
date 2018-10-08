import React from 'react';
import {Link} from 'react-router';

class Layout extends React.Component {
    render() {
        return (<div className={"container"}>

                <div className={"row"}>
                    <div className={"col-xs-4"}>
                        <ul>
                            <li><Link to={"/"}>Главная</Link></li>
                            <li><Link to={"blog"}>Блог</Link></li>
                            <li><Link to={"comments"}>Коментарии</Link></li>
                            <li><Link to={"users"}>Пользователи</Link></li>
                        </ul>

                    </div>
                    <div className={"col-xs-8"}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }

}


export default Layout;