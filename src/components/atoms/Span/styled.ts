import styled from "styled-components";

import { Colors } from "../../../styles/helpers/Colors";
import { Devices } from "../../../styles/helpers/Devices";
import {
    FontFamilies,
    FontWeights,
    FontSpacings
} from "../../../styles/helpers/Typography";

export const SpanStyled = styled.p`
    font-family: ${FontFamilies.primary};
    font-size: 14px;
    font-weight: ${FontWeights.stronger};
    letter-spacing: ${FontSpacings.letterSpacing};
    line-height: 140%;
    color: ${Colors.gray};
    transition: .2s ease-in-out;

    @media screen and (max-width: ${Devices.largePhone}){
        font-size: 12px;
    };
`;