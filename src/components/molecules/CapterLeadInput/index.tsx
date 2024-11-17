import React from "react";
import { CapterLeadInputStyled } from "./styled";

import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const CapterLeadInput: React.FC = () => {
    return (
        <CapterLeadInputStyled>
            <Input type="text" placeholder="Digite seu e-mail" />
            <Button variant="primary" content="Ficar por dentro!" method={() => {}} />
        </CapterLeadInputStyled>
    );
};

export default CapterLeadInput;