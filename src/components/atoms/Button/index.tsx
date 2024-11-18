import React, { ReactElement } from "react";
import { motion } from "framer-motion";

import {
    PrimaryButton,
    LighterButton,
    SecondaryButton,
    TertiaryButton
} from "./styled";

interface ButtonProps {
    variant: "primary" | "lighter" | "secondary" | "tertiary";
    content: string;
    method: () => void;
    iconRight?: ReactElement;
    iconLeft?: ReactElement;
};

const AnimPrimaryButton = motion(PrimaryButton);
const AnimSecondaryButton = motion(SecondaryButton);
const AnimTertiaryButton = motion(TertiaryButton);
const AnimLighterButton = motion(LighterButton);

const Button: React.FC<ButtonProps> = ({ content, variant, method, iconRight, iconLeft }) => {

    let button: React.ReactElement =
        <AnimPrimaryButton onClick={method}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}>
            {iconLeft}
            {content}
            {iconRight}
        </AnimPrimaryButton>;

    switch (variant) {
        case "lighter":
            button =
                <AnimLighterButton onClick={method}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}>
                    {iconLeft}
                    {content}
                    {iconRight}
                </AnimLighterButton>
            break;

        case "secondary":
            button =
                <AnimSecondaryButton onClick={method}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}>
                    {iconLeft}
                    {content}
                    {iconRight}
                </AnimSecondaryButton>
            break;

        case "tertiary":
            button =
                <AnimTertiaryButton onClick={method}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}>
                    {iconLeft}
                    {content}
                    {iconRight}
                </AnimTertiaryButton>
            break;
    };

    return button;
};

export default Button;