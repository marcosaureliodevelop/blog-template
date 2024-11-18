import React from "react";

import { LargeBrandStyled } from "./styled";

import BrandIcon from "../../atoms/BrandIcon";
import Paragraph from "../../atoms/Paragraph";

import { Colors } from "../../../styles/helpers/Colors";

interface LargeBrandProps {
    centered?: boolean
};

const LargeBrand: React.FC<LargeBrandProps> = ({ centered }) => {
    return (
        <LargeBrandStyled centered={centered}>
            <BrandIcon width={208} height={36} color={Colors.white} />
            <Paragraph content="© 2024 BlogTemplate. All rights reserved." />
        </LargeBrandStyled>
    );
};

export default LargeBrand;