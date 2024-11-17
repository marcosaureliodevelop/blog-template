import React from "react";

import {
    SearchBoxStyled,
    SearchBoxWrapper
} from "./styled";

import Headline from "../../atoms/Headline";
import Paragraph from "../../atoms/Paragraph";
import InputSearch from "../../atoms/InputSearch";

const SearchBox: React.FC = () => {
    return (
        <SearchBoxStyled>
            <SearchBoxWrapper>
                <Headline
                    variant="primary"
                    content="Seu portal completo para o Universo da Tecnologia" />
                <Paragraph content="Com nossos tutoriais completos, notícias atualizadas e análises aprofundadas, você terá acesso a todas as informações necessárias para se destacar no mercado de trabalho." />
                <InputSearch
                    type="text"
                    placeholder="Digite aqui o que você deseja ver..."
                    iconMethod={() => console.log("Search input...")} />
            </SearchBoxWrapper>
        </SearchBoxStyled>
    );
};

export default SearchBox;