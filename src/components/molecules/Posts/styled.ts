import styled from "styled-components";

const PostStyled = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    padding: 24px;
    box-sizing: border-box;
    width: 100%;
`;

export const LargePostStyled = styled(PostStyled)`
    max-width: 600px;
`;

export const MediumPostStyled = styled(PostStyled)`
    max-width: 392px;
`;

export const SmallPostStyled = styled(PostStyled)`
    max-width: 288px;
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