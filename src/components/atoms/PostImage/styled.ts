import styled from "styled-components";

import { Borders } from "../../../styles/helpers/Borders";
import { Colors } from "../../../styles/helpers/Colors";

export const PostImageStyled = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: ${Borders.default};
    background-color: ${Colors.primary};
`;