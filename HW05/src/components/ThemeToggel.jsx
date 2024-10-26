import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setThemeColor } from "../actions/themeModeAction";

export const ThemeToggle = () => {
    // const themeColor = useSelector((state) => state.theme.theme);
    const themeColor = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        const newTheme = themeColor === "dark" ? "light" : "dark";
        dispatch(setThemeColor(newTheme));
    };

    const styles = {
        backgroundColor: themeColor === "dark" ? "black" : "white",
        color: themeColor === "dark" ? "white" : "black",
    };

    return (
        <div style={styles}>
            <button onClick={toggleTheme}>Theme Color</button>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis nostrum quo corrupti expedita consectetur earum dolorem
                repellendus totam, cupiditate, doloremque voluptatum asperiores!
                Laboriosam harum modi magnam illo! Quaerat, inventore eum.
            </p>
        </div>
    );
};
