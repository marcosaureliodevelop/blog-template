import styled from "styled-components";
import { Colors } from "../../../styles/helpers/Colors";
import { FontWeights } from "../../../styles/helpers/Typography";

export const PostOwnerStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    width: auto;

    p {
        color: ${Colors.black};
        font-weight: ${FontWeights.stronger};
    }
`;