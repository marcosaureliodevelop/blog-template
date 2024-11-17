import React, { ReactElement } from "react";
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

const Button: React.FC<ButtonProps> = ({ content, variant, method, iconRight, iconLeft }) => {
    let button: React.ReactElement =
        <PrimaryButton onClick={method}>
            {iconLeft}
            {content}
            {iconRight}
        </PrimaryButton>;

    switch (variant) {
        case "lighter":
            button =
                <LighterButton onClick={method}>
                    {iconLeft}
                    {content}
                    {iconRight}
                </LighterButton>
            break;

        case "secondary":
            button =
                <SecondaryButton onClick={method}>
                    {iconLeft}
                    {content}
                    {iconRight}
                </SecondaryButton>
            break;

        case "tertiary":
            button =
                <TertiaryButton onClick={method}>
                    {iconLeft}
                    {content}
                    {iconRight}
                </TertiaryButton>
            break;
    };

    return button;
};

export default Button;