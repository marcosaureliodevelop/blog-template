import styled from "styled-components";

export const SearchBoxStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const SearchBoxWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100%;
    max-width: 808px;
    text-align: center;

    h1 {
        background-image: linear-gradient(
            90deg, rgba(68,53,180,1) 0%, rgba(231,178,63,1) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }

    @media screen and (max-width: 900px) {
        width: 90%;
        max-width: none;
    };
`;