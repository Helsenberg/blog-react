import { FETCH_COMMENTS_BY_ID_POST_SUCCESS, UNSET_COMMENTS } from "../../actions/comments";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_BY_ID_POST_SUCCESS:
        case UNSET_COMMENTS:
            return action.payload;
        default:
            return state;
    }
}
