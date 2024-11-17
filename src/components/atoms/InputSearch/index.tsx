import React from "react";

import {
    InputSearchContainerStyled,
    StyledInputSearch,
    IconContainerStyled
} from "./styled";

import { Search } from "lucide-react";

import { Colors } from "../../../styles/helpers/Colors";

interface InputSearchProps {
    type: string;
    placeholder: string;
    iconMethod: () => void;
};

const InputSearch: React.FC<InputSearchProps> = ({ type, placeholder, iconMethod }) => {
    return (
        <InputSearchContainerStyled>
            <StyledInputSearch
                type={type}
                placeholder={placeholder} />
            <IconContainerStyled onClick={iconMethod} title="Clique para pesquisar no blog">
                <Search size={20} color={Colors.primary} />
            </IconContainerStyled>
        </InputSearchContainerStyled>
    );
};

export default InputSearch;