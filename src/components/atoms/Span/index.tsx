import React from "react";
import { SpanStyled } from "./styled";

interface SpanProps {
    content: string;
};

const Span: React.FC<SpanProps> = (
    { content }
) => {
    return (
        <SpanStyled>
            {content}
        </SpanStyled>
    );
};

export default Span;