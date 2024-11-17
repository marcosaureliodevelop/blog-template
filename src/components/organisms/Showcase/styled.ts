import styled from "styled-components";
import { Devices } from "../../../styles/helpers/Devices";

export const ShowcaseStyled = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const ShowcaseContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 90%;
    gap: 24px;

    @media screen and (min-width: ${Devices.largeDesktop}) {
        width: 1220px;
    };
`;

export const ShowcaseWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    width: 100%;
    gap: 40px 24px;

    @media screen and (max-width: 986px) {
        grid-template-columns: repeat(2, 1fr);
    };

    @media screen and (max-width: 550px) {
        grid-template-columns: repeat(1, 1fr);
    };
`;