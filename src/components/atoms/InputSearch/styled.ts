import styled from "styled-components";

import { Colors } from "../../../styles/helpers/Colors";
import { Borders } from "../../../styles/helpers/Borders";
import { Devices } from "../../../styles/helpers/Devices";
import {
    FontFamilies,
    FontSpacings,
    FontWeights
} from "../../../styles/helpers/Typography";

export const InputSearchContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`;

export const StyledInputSearch = styled.input`
    width: 100%;
    border: 2px solid ${Colors.primary};
    border-radius: ${Borders.default};
    outline: 3px solid transparent;
    background-color: ${Colors.white};
    margin: 0;
    padding: 16px 24px 16px 16px;
    font-family: ${FontFamilies.primary};
    font-weight: ${FontWeights.regular};
    line-height: 100%;
    font-size: 16px;
    letter-spacing: ${FontSpacings.letterSpacing};
    color: ${Colors.primary};
    box-sizing: border-box;
    transition: .2s ease-in-out;

    &::placeholder {
        color: ${Colors.lightGray};
    };

    &:focus {
        outline: 3px solid ${Colors.primary}70;
    };

    @media screen and (max-width: ${Devices.largePhone}) {
        width: 100%;
        font-size: 14px;
        padding: 14px 18px 14px 14px;
    };
`;

export const IconContainerStyled = styled.div`
    position: absolute;
    z-index: 2;
    right: 16px;

    &:hover {
        cursor: pointer;
    };
`;