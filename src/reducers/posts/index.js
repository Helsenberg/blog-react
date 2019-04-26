import {
    FETCH_POSTS_SUCCESS,
    LOAD_MORE_POSTS_SUCCESS,
    SEARCH_POSTS
} from "../../actions/posts";

import { uniquePosts } from "../../helpers/selectors";

const initialState = {
    data: [],
    start: 0,
    limit: 10,
    search: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                data: uniquePosts(state.data.concat(action.payload))
            };
        case LOAD_MORE_POSTS_SUCCESS:
            return {
                ...state,
                data: uniquePosts(state.data.concat(action.payload.posts)),
                start: action.payload.start
            };
        case SEARCH_POSTS:
            return { ...state, search: action.payload};
        default:
            return state;
    }
}
