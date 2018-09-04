import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reducers from 'reducers';

import layoutPosts from "containers/layoutPosts";
import Posts from "containers/posts";
import Post from "containers/post";

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const AppRoute = ({component: Component, layout: Layout, ...rest}) => (
    <Route {...rest} render={props => (
        <Layout><Component {...props}/></Layout>
    )} />
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <AppRoute exact path='/' layout={layoutPosts} component={Posts} />
                <Route path='/posts/:userId/:postId' component={Post} />
            </Switch>
        </Router>
    </Provider>,
document.getElementById('root'));

registerServiceWorker();
