import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Massage from "./Massage.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Massage Massage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus modi ipsam reprehenderit a eligendi aperiam quo vitae omnis officiis quaerat sequi vel facilis, fuga animi! Atque facere fuga saepe beatae!" />
    </StrictMode>
);
