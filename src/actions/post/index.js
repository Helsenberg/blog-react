import { fetchPostById as fetchPostByIdApi } from '../../api';

export const FETCH_POST_BY_ID_START = 'FETCH_POST_BY_ID_START';
export const FETCH_POST_BY_ID_SUCCESS = 'FETCH_POST_BY_ID_SUCCESS';
export const FETCH_POST_BY_ID_FAILURE = 'FETCH_POST_BY_ID_FAILURE';
export const UNSET_POST = 'UNSET_POST';

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

export const unsetPost = () => dispatch => {
    dispatch({
        type: UNSET_POST,
        payload: null
    });
};
