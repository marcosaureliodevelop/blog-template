import React from "react";
import { SubFooterStyled } from "./styled";

import { FlexContainer } from "../../../styles/helpers/Containers";
import PersuasiveWrapping from "../../molecules/PersuasiveWrapping";
import CapterLeadInput from "../../molecules/CapterLeadInput";

const SubFooter: React.FC = () => {
    return (
        <SubFooterStyled>
            <FlexContainer
                direction="row"
                justify="space-between"
                align="center"
                gap={24}>

                    <PersuasiveWrapping />
                    <CapterLeadInput />

            </FlexContainer>
        </SubFooterStyled>
    );
};

export default SubFooter;