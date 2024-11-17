import styled from "styled-components";
import { Colors } from "../../../styles/helpers/Colors";
import { Borders } from "../../../styles/helpers/Borders";

export const CapterLeadCommentStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    height: auto;
    width: 100%;
    border: none;
    padding: 24px;
    border-radius: ${Borders.default};
    background-color: ${Colors.secondary};
    box-sizing: border-box;

    p {
       color: ${Colors.primary};
    };

    button, input {
        width: 100%;
    };
`;