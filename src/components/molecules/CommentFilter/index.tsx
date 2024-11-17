import React from "react";
import { CommentFilterStyled } from "./styled";

import Button from "../../atoms/Button";

const CommentFilter: React.FC = () => {
    return (
        <CommentFilterStyled>
            <Button variant="lighter" content="Todos" method={() => console.log("Filter all...")} />
            <Button variant="secondary" content="Mais recentes" method={() => console.log("Filter last comments...")} />
        </CommentFilterStyled>
    );
};

export default CommentFilter;