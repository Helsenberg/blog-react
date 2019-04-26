import { FETCH_POST_BY_ID_SUCCESS, UNSET_POST } from "../../actions/post";

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST_BY_ID_SUCCESS:
        case UNSET_POST:
            return action.payload;
        default:
            return state;
    }
}
