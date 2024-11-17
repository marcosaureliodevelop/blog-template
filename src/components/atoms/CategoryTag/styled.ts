import styled from "styled-components";

import { Borders } from "../../../styles/helpers/Borders";
import { Colors } from "../../../styles/helpers/Colors";
import { Devices } from "../../../styles/helpers/Devices";
import { 
    FontFamilies, 
    FontSpacings, 
    FontWeights 
} from "../../../styles/helpers/Typography";

export const CategoryTagStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 2px solid ${Colors.primary};
    border-radius: ${Borders.rounded};
    color: ${Colors.primary};
    font-weight: ${FontWeights.stronger};
    font-family: ${FontFamilies.primary};
    letter-spacing: ${FontSpacings.letterSpacing};
    font-size: 16px;
    padding: 8px 16px;

    @media screen and (max-width: ${Devices.tablet}) {
        padding: 8px 14px;
        font-size: 14px;
    };
`;