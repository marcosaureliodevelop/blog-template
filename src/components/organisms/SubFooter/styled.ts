import styled from "styled-components";
import { Colors } from "../../../styles/helpers/Colors";
import { Devices } from "../../../styles/helpers/Devices";

export const SubFooterStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 56px 0;
    background-color: ${Colors.whiteGray};
`;

export const SubFooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;

    @media screen and (min-width: ${Devices.largeDesktop}) {
        width: 1220px;
    };

    @media screen and (max-width: 950px) {
        flex-direction: column;
        gap: 16px;
    };
`;