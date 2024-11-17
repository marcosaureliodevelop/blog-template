import React from "react";
import { CapterLeadCommentStyled } from "./styled";

import Paragraph from "../../atoms/Paragraph";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const CapterLeadComment: React.FC = () => {
    return (
        <CapterLeadCommentStyled>
            <Paragraph content="Sua visão é importante para nós. Deixe um comentário e faça parte da conversa." />
            <Input type="text" placeholder="Digite o seu e-mail aqui..." />
            <Button 
                variant="primary" 
                content="Criar conta de graça" 
                method={() => console.log("Filter last comments...")} />
        </CapterLeadCommentStyled>
    );
};

export default CapterLeadComment;