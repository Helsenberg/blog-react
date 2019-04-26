
import { fetchCommentsByPostId as fetchCommentsByPostIdApi } from '../../api';

export const FETCH_COMMENTS_BY_ID_POST_START = 'FETCH_COMMENTS_BY_ID_POST_START';
export const FETCH_COMMENTS_BY_ID_POST_SUCCESS = 'FETCH_COMMENTS_BY_ID_POST_SUCCESS';
export const FETCH_COMMENTS_BY_ID_POST_FAILURE = 'FETCH_COMMENTS_BY_ID_POST_FAILURE';
export const UNSET_COMMENTS = 'UNSET_COMMENTS';

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

export const unsetComments = () => dispatch => {
    dispatch({
        type: UNSET_COMMENTS,
        payload: []
    });
};
