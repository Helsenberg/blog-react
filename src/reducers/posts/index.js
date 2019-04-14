import {
    FETCH_POSTS_SUCCESS,
    LOAD_MORE_POSTS_SUCCESS,
    SEARCH_POSTS
} from "../../actions/types";

import { uniquePosts } from "../../selectors";

const initialState = {
    data: [],
    search: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
        case LOAD_MORE_POSTS_SUCCESS:
            const data = uniquePosts(state.data.concat(action.payload));
            return { ...state, data};
        case SEARCH_POSTS:
            return { ...state, search: action.payload};
        default:
            return state;
    }
}
