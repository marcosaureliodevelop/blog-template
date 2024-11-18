import React from "react";
import { SubFooterStyled, SubFooterContainer } from "./styled";

import PersuasiveWrapping from "../../molecules/PersuasiveWrapping";
import CapterLeadInput from "../../molecules/CapterLeadInput";

const SubFooter: React.FC = () => {
    return (
        <SubFooterStyled>
            <SubFooterContainer>
                <PersuasiveWrapping />
                <CapterLeadInput />
            </SubFooterContainer>
        </SubFooterStyled>
    );
};

export default SubFooter;