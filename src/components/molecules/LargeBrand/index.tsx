import React from "react";

import { LargeBrandStyled } from "./styled";

import BrandIcon from "../../atoms/BrandIcon";
import Paragraph from "../../atoms/Paragraph";

import { Colors } from "../../../styles/helpers/Colors";

const LargeBrand: React.FC = () => {
    return (
        <LargeBrandStyled>
            <BrandIcon width={208} height={36} color={Colors.white} />
            <Paragraph content="© 2024 BlogTemplate. All rights reserved." />
        </LargeBrandStyled>
    );
};

export default LargeBrand;