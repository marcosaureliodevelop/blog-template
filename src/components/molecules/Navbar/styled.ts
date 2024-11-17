import styled from "styled-components";
import { Devices } from "../../../styles/helpers/Devices";

export const NavbarStyled = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    background-color: transparent;
    width: 100%;
`;

export const NavbarListStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;

    @media screen and (max-width: ${Devices.smallDesktop}) {
        gap: 16px;
    };

    @media screen and (max-width: 900px) {
        display: none;
    };
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 900px) {
        display: none;
    };
`;

export const MenuIcon = styled.div`
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 900px) {
        display: flex;
    };
`;