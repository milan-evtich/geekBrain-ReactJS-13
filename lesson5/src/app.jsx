import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app/styles/main.css';
import Layout from "./app/layouts/Layout";
import MainPage from "./app/pages/Main";
import CommentsPage from "./app/pages/Comments";
import BlogPage from "./app/pages/Blog";
import UserPage from "./app/pages/Users";

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path={"/"} component={Layout}>
            <IndexRoute component={MainPage}/>
            <Route path={"blog"} component={BlogPage}/>
            <Route path={"comments"} component={CommentsPage}/>
            <Route path={"users"} component={UserPage}/>
        </Route>
    </Router>,
app);