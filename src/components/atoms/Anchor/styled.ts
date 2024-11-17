import styled from "styled-components";
import { Colors } from "../../../styles/helpers/Colors";
import { Devices } from "../../../styles/helpers/Devices";
import { 
    FontFamilies,
    FontSpacings,
    FontWeights
} from "../../../styles/helpers/Typography";

interface AnchorStyledProps {
    color: string;
    weight: string;
};

export const AnchorStyled = styled.div<AnchorStyledProps>`
    a {
        font-family: ${FontFamilies.primary};
        font-weight: ${props => props.weight ? props.weight : FontWeights.stronger};
        color: ${props => props.color ? props.color : Colors.black};
        letter-spacing: ${FontSpacings.letterSpacing};
        line-height: 100%;
        text-decoration: none;
        font-size: 16px;

        &:hover {
            cursor: pointer;
        };

        @media screen and (max-width: ${Devices.largePhone}) {
            font-size: 14px;
        };
    };
`;