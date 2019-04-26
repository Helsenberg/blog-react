import { FETCH_AUTHOR_BY_ID_SUCCESS, UNSET_AUTHOR } from "../../actions/author";

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTHOR_BY_ID_SUCCESS:
        case UNSET_AUTHOR:
            return action.payload;
        default:
            return state;
    }
}
