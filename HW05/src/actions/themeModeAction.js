export const TOGGLE_THEME = "TOGGLE_THEME";

export const setThemeColor = (color) => ({
    type: TOGGLE_THEME,
    payload: color,
});
