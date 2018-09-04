import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import pagination from './pagination';
import post from './post';
import author from './author';
import comments from './comments';

export default combineReducers({
    routing: routerReducer,
    posts,
    pagination,
    post,
    author,
    comments
})
