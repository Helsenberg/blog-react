import {
    LOAD_MORE_POSTS_SUCCESS
} from "../../actions/types";

const initialState = {
    start: 0,
    limit: 10
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MORE_POSTS_SUCCESS:
            const start = action.start;
            const limit = action.limit;
            return { ...state, start, limit};
        default:
            return state;
    }
}
