import { fetchPosts as fetchPostsApi } from '../../api';

export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const LOAD_MORE_POSTS_START = 'LOAD_MORE_POSTS_START';
export const LOAD_MORE_POSTS_SUCCESS = 'LOAD_MORE_POSTS_SUCCESS';
export const LOAD_MORE_POSTS_FAILURE = 'LOAD_MORE_POSTS_FAILURE';

export const SEARCH_POSTS = 'SEARCH_POSTS';


export const fetchPosts = (start = 0, limit = 10) => async dispatch => {
    dispatch({ type: FETCH_POSTS_START });

    try {
        const posts = await fetchPostsApi(start, limit);
        dispatch({
            type: FETCH_POSTS_SUCCESS,
            payload: posts
        })
    } catch (error) {
        dispatch({
            type: FETCH_POSTS_FAILURE,
            payload: error,
            error: true
        })
    }
};


export const loadMorePosts = (start = 0, limit = 10) => async dispatch => {
    dispatch({ type: LOAD_MORE_POSTS_START });

    try {
        const posts = await fetchPostsApi(start, limit);
        dispatch({
            type: LOAD_MORE_POSTS_SUCCESS,
            payload: {
                posts,
                start: start
            }
        })
    } catch (error) {
        dispatch({
            type: LOAD_MORE_POSTS_FAILURE,
            payload: error,
            error: true
        })
    }
}


export const searchPosts = value => dispatch => {
    dispatch({
        type: SEARCH_POSTS,
        payload: value
    });
};
