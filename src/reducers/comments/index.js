import { FETCH_COMMENTS_BY_ID_POST_SUCCESS } from "../../actions/types";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_BY_ID_POST_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}