import styled from "styled-components";
import { Devices } from "../../../styles/helpers/Devices";

export const CapterLeadInputStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    width: 100%;

    @media screen and (max-width: ${Devices.largePhone}){
        flex-direction: column;
    };
`;