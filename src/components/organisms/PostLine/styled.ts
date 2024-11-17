import styled from "styled-components";
import { Devices } from "../../../styles/helpers/Devices";

export const PostLineStyled = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: start;
`;

export const PostLineContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1224px;
    gap: 24px;

    @media screen and (max-width: ${Devices.largeDesktop}) {
        width: 90%;
    }
`;

export const PostLineContainerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 24px;
    flex-wrap: wrap;
`;