import styled from "styled-components";

import { Colors } from "../../../styles/helpers/Colors";
import { Devices } from "../../../styles/helpers/Devices";
import {
    FontFamilies,
    FontWeights,
    FontSpacings
} from "../../../styles/helpers/Typography";

export const HeadlinePrimary = styled.h1`
    font-family: ${FontFamilies.primary};
    font-size: 32px;
    font-weight: ${FontWeights.stronger};
    letter-spacing: ${FontSpacings.letterSpacing};
    line-height: 120%;
    color: ${Colors.black};

    @media screen and (max-width: ${Devices.largePhone}){
        font-size: 28px;
    };
`;

export const HeadlineSecondary = styled.h2`
    font-family: ${FontFamilies.primary};
    font-size: 28px;
    font-weight: ${FontWeights.stronger};
    letter-spacing: ${FontSpacings.letterSpacing};
    line-height: 120%;
    color: ${Colors.black};

    @media screen and (max-width: ${Devices.largePhone}){
        font-size: 25px;
    };
`;

export const HeadlineTertiary = styled.h3`
    font-family: ${FontFamilies.primary};
    font-size: 25px;
    font-weight: ${FontWeights.stronger};
    letter-spacing: ${FontSpacings.letterSpacing};
    line-height: 120%;
    color: ${Colors.black};

    @media screen and (max-width: ${Devices.largePhone}){
        font-size: 22px;
    };
`;

export const HeadlineQuaternary = styled.h3`
    font-family: ${FontFamilies.primary};
    font-size: 22px;
    font-weight: ${FontWeights.stronger};
    letter-spacing: ${FontSpacings.letterSpacing};
    line-height: 120%;
    color: ${Colors.black};

    @media screen and (max-width: ${Devices.largePhone}){
        font-size: 19px;
    };
`;