import styled from "styled-components";
import { Devices } from "../../styles/helpers/Devices";

export const ViewPostStyled = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
    width: 100%;
`;

export const MainContainer = styled.section`
    position: relative;
    display: grid;
    grid-template-columns: 60% 36%;
    width: 90%;
    gap: 52px;

    @media screen and (min-width: ${Devices.largeDesktop}) {
        width: 1220px;
    };

    @media screen and (max-width: 970px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    };
`;

export const CapterFooter = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const MotionSection = styled.div`
    width: 100%;
`;