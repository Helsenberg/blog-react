import {
    FETCH_POSTS_START,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    LOAD_MORE_POSTS_START,
    LOAD_MORE_POSTS_SUCCESS,
    LOAD_MORE_POSTS_FAILURE,
    SEARCH_POSTS,
    FETCH_POST_BY_ID_START,
    FETCH_POST_BY_ID_SUCCESS,
    FETCH_POST_BY_ID_FAILURE,
    FETCH_AUTHOR_BY_ID_START,
    FETCH_AUTHOR_BY_ID_SUCCESS,
    FETCH_AUTHOR_BY_ID_FAILURE,
    FETCH_COMMENTS_BY_ID_POST_START,
    FETCH_COMMENTS_BY_ID_POST_SUCCESS,
    FETCH_COMMENTS_BY_ID_POST_FAILURE
} from "./types";

import {
    fetchPosts as fetchPostsApi,
    fetchPostById as fetchPostByIdApi,
    fetchAuthorById as fetchAuthorByIdApi,
    fetchCommentsByPostId as fetchCommentsByPostIdApi,
} from "../api";

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
            payload: posts,
            start: start + limit,
            limit: limit,
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

export const fetchPostById = id => async dispatch => {
    dispatch({ type: FETCH_POST_BY_ID_START });

    try {
        const post = await fetchPostByIdApi(id);
        dispatch({
            type: FETCH_POST_BY_ID_SUCCESS,
            payload: post
        });
    } catch (error) {
        dispatch({
            type: FETCH_POST_BY_ID_FAILURE,
            payload: error,
            error: true
        })
    }
};

export const fetchAuthorById = id => async dispatch => {
    dispatch({ type: FETCH_AUTHOR_BY_ID_START });

    try {
        const author = await fetchAuthorByIdApi(id);
        dispatch({
            type: FETCH_AUTHOR_BY_ID_SUCCESS,
            payload: author
        });
    } catch (error) {
        dispatch({
            type: FETCH_AUTHOR_BY_ID_FAILURE,
            payload: error,
            error: true
        })
    }
};

export const fetchCommentsByPostId = id => async dispatch => {
    dispatch({ type: FETCH_COMMENTS_BY_ID_POST_START });

    try {
        const comments = await fetchCommentsByPostIdApi(id);
        dispatch({
            type: FETCH_COMMENTS_BY_ID_POST_SUCCESS,
            payload: comments
        });
    } catch (error) {
        dispatch({
            type: FETCH_COMMENTS_BY_ID_POST_FAILURE,
            payload: error,
            error: true
        })
    }
};
