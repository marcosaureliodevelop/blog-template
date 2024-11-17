import styled from "styled-components";

interface StyledProps {
    variant: "horizontal" | "vertical"
};

export const PostStyled = styled.div<StyledProps>`
    position: relative;
    display: flex;
    flex-direction: ${props => props.variant === "horizontal" ? "row" : "column"};
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    padding: 24px;
    box-sizing: border-box;
    width: 100%;
`;

export const PostWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
`;

export const CategoryBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 8px;
`;