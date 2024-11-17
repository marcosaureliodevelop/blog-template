import React from "react";
import { StyledInput } from "./styled";

interface InputProps {
    type: string;
    placeholder: string
};

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
    return (
        <StyledInput
            type={type}
            placeholder={placeholder} />
    );
};

export default Input;