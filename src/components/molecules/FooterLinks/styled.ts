import styled from "styled-components";

interface FooterLinksProps {
    centered?: boolean;
};

export const FooterLinksStyled = styled.div<FooterLinksProps>`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.centered ? "center" : "flex-start"};
    align-items: ${props => props.centered ? "center" : "flex-start"};
    gap: 24px;
`;