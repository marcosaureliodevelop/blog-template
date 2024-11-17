import React from "react";
import { PersuasiveWrappingContainer } from "./style";

import Headline from "../../atoms/Headline";
import Paragraph from "../../atoms/Paragraph";

const PersuasiveWrapping: React.FC = () => {
    return (
        <PersuasiveWrappingContainer>
            <Headline variant="secondary" content="Fique por dentro das últimas notícias!" />
            <Paragraph content="Quer estar sempre atualizado sobre as novidades do mercado? Digite seu e-mail e receba conteúdos exclusivos e personalizados para você." />
        </PersuasiveWrappingContainer>
    );
};

export default PersuasiveWrapping;