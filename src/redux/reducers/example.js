import { EXAMPLE } from '../constants/index'

const initialState = {
    text: "Lorem ipsum"
}

function example (state = initialState, action) {
    switch (action.type) {
        case EXAMPLE:
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    };
};

export default example;