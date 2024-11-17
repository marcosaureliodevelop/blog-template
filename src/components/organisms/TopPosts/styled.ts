import styled from "styled-components";
import { Devices } from "../../../styles/helpers/Devices";

export const TopPostsStyled = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const TopPostsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    gap: 24px;

    @media screen and (min-width: ${Devices.largeDesktop}) {
        width: 1220px;
    };

    @media screen and (max-width: ${Devices.tablet}) {
        grid-template-columns: auto;
        grid-template-rows: repeat(2, 1fr);
    };
`;