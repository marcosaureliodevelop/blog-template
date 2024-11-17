import styled from "styled-components";
import { Colors } from "../../../styles/helpers/Colors";

export const FooterStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 92px 0;
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
    background-color: ${Colors.primary};

    p {
        color: ${Colors.white};
    }
`;