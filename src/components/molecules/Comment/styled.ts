import styled from "styled-components";

import { Colors } from "../../../styles/helpers/Colors";
import { Devices } from "../../../styles/helpers/Devices";
import {
    FontFamilies,
    FontWeights,
    FontSpacings
} from "../../../styles/helpers/Typography";

export const CommentStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    width: 100%;
`;

export const CommentWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
`;

export const UsernameStyled = styled.p`
    font-family: ${FontFamilies.primary};
    font-size: 16px;
    font-weight: ${FontWeights.stronger};
    letter-spacing: ${FontSpacings.letterSpacing};
    line-height: 140%;
    color: ${Colors.black};
    transition: .2s ease-in-out;

    @media screen and (max-width: ${Devices.largePhone}){
        font-size: 14px;
        line-height: 136%;
    };
`;