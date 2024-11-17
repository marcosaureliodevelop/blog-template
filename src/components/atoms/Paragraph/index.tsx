import React from "react";
import { ParagraphStyled } from "./styled";

interface ParagraphProps {
    content: string;
};

const Paragraph: React.FC<ParagraphProps> = (
    { content }
) => {
    return (
        <ParagraphStyled>
            {content}
        </ParagraphStyled>
    );
};

export default Paragraph;