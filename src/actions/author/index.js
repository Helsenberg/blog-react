import { fetchAuthorById as fetchAuthorByIdApi } from '../../api';

export const FETCH_AUTHOR_BY_ID_START = 'FETCH_AUTHOR_BY_ID_START';
export const FETCH_AUTHOR_BY_ID_SUCCESS = 'FETCH_AUTHOR_BY_ID_SUCCESS';
export const FETCH_AUTHOR_BY_ID_FAILURE = 'FETCH_AUTHOR_BY_ID_FAILURE';
export const UNSET_AUTHOR = 'UNSET_AUTHOR';

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

export const unsetAuthor = () => dispatch => {
    dispatch({
        type: UNSET_AUTHOR,
        payload: null
    });
};
