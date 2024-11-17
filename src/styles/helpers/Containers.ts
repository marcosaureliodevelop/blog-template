import styled from "styled-components";
import { Devices } from "../helpers/Devices";

interface FlexProps {
    direction: string;
    justify: string;
    align: string,
    gap?: number
};

export const FlexContainer = styled.div<FlexProps>`
    display: flex;
    width: 90%;
    flex-direction: ${props => props.direction ? props.direction : "flex-start"};
    justify-content: ${props => props.justify ? props.justify : "flex-start"};
    align-items: ${props => props.align ? props.align : "flex-start"};
    gap: ${props => props.gap ? props.gap : 0}px;

    @media screen and (min-width: ${Devices.largeDesktop}) {
        width: 1440px;
    };
`;