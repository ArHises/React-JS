import { TOGGLE_THEME } from "../actions/themeModeAction";

// const initialState = {
//     theme: "dark",
// };

const initialState = "dark";

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            // return { ...state, theme: action.payload };
            return action.payload;
        default:
            return state;
    }
};
