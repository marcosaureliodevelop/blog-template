import styled from "styled-components";

interface LargeBrandProps {
    centered?: boolean
};

export const LargeBrandStyled = styled.div<LargeBrandProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.centered ? "center" : "flex-start"};
    align-items: ${props => props.centered ? "center" : "flex-start"};
    gap: 8px;
    width: auto;
`;