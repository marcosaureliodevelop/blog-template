import styled from "styled-components";

import { Colors } from "../../../styles/helpers/Colors";
import { 
    FontFamilies,
    FontWeights,
    FontSpacings
} from "../../../styles/helpers/Typography";

export const LikeButtonStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    &:hover {
        cursor: pointer;
    };
`;

export const CaptionStyled = styled.p`
    font-size: 14px;
    font-family: ${FontFamilies.primary};
    font-weight: ${FontWeights.regular};
    letter-spacing: ${FontSpacings.letterSpacing};
    color: ${Colors.black};
`;