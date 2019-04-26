import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import post from './post';
import author from './author';
import comments from './comments';

export default combineReducers({
    routing: routerReducer,
    posts,
    post,
    author,
    comments
})
