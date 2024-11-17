import styled from "styled-components";

import { Colors } from "../../../styles/helpers/Colors";
import {
    FontFamilies,
    FontWeights
} from "../../../styles/helpers/Typography";

interface UserImageProps {
    size: number;
};

export const UserImageStyled = styled.div<UserImageProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: ${props => props.size ? props.size : 64}px;
    height: ${props => props.size ? props.size : 64}px;
    border-radius: 50%;
    font-family: ${FontFamilies.primary};
    font-weight: ${FontWeights.stronger};
    line-height: 100%;
    font-size: 16px;
    color: ${Colors.primary};
    background-color: ${Colors.secondary};
    transition: .2s ease-in-out;
`;