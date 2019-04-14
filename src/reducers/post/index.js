import { FETCH_POST_BY_ID_SUCCESS } from "../../actions/types";

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST_BY_ID_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
