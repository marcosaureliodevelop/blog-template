import styled from "styled-components";

import { Colors } from "../../../styles/helpers/Colors";
import { Borders } from "../../../styles/helpers/Borders";
import { Devices } from "../../../styles/helpers/Devices";
import {
    FontFamilies,
    FontSpacings,
    FontWeights
} from "../../../styles/helpers/Typography";

interface ButtonProps {
    direction?: string;
};

const StyledButton = styled.button<ButtonProps>`
    display: flex;
    flex-direction: ${props => props.direction === "column" ? props.direction : "row"};
    justify-content: center;
    align-items: center;
    font-family: ${FontFamilies.primary};
    font-weight: ${FontWeights.stronger};
    letter-spacing: ${FontSpacings.letterSpacing};
    font-size: 16px;
    gap: 8px;
    padding: 16px 24px;
    margin: 0;
    border: 2px solid ${Colors.black};
    border-radius: ${Borders.default};
    outline: 3px solid transparent;
    line-height: 100%;
    transition: .2s;
    box-sizing: border-box;

    &:hover {
        cursor: pointer;
    };

    @media screen and (max-width: ${Devices.largePhone}) {
        font-size: 14px;
        padding: 14px 18px;
        width: 100%;
    };
`;

export const PrimaryButton = styled(StyledButton)`
    border: 1px solid ${Colors.primary};
    color: ${Colors.white};
    background-color: ${Colors.primary};

    &:focus {
        outline: 3px solid ${Colors.primary}70;
    };
`;

export const LighterButton = styled(StyledButton)`
    border: 2px solid transparent;
    color: ${Colors.primary};
    background-color: ${Colors.secondary};
`;

export const SecondaryButton = styled(StyledButton)`
    border: 2px solid transparent;
    color: ${Colors.gray};
    background-color: ${Colors.whiteGray};

    &:hover {
        background-color: #e7e7e7;
    };
`;

export const TertiaryButton = styled(StyledButton)`
    border: 2px solid transparent;
    color: ${Colors.primary};
    background-color: transparent;

    &:hover {
        background-color: ${Colors.primary}10;
    };
`;