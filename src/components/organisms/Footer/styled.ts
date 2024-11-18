import styled from "styled-components";
import { Colors } from "../../../styles/helpers/Colors";
import { Devices } from "../../../styles/helpers/Devices";

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
    width: 100%;

    p {
        color: ${Colors.white};
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 90%;

    @media screen and (min-width: ${Devices.largeDesktop}) {
        width: 1220px;
    };

    @media screen and (max-width: ${Devices.tablet}) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 48px;
        text-align: center;
    };
`;