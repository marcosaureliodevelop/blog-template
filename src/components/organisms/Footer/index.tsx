import React, { useState } from "react";
import { FooterStyled } from "./styled";

import { FlexContainer } from "../../../styles/helpers/Containers";
import LargeBrand from "../../molecules/LargeBrand";
import FooterLinks from "../../molecules/FooterLinks";

const Footer: React.FC = () => {

    const [cateogories, setCategories] = useState([
        { url: "/", content: "Home" },
        { url: "/tecnologia", content: "Tecnologia" },
        { url: "/inovacao", content: "Inovação" },
    ]);

    const [about, setAbout] = useState([
        { url: "/", content: "Termos de uso" },
        { url: "/tecnologia", content: "Comunidade" }
    ]);

    const [social, setSocial] = useState([
        { url: "/", content: "Instagram" },
        { url: "/tecnologia", content: "Twitter" },
        { url: "/inovacao", content: "Linkedin" },
        { url: "/inovacao", content: "Facebook" }
    ]);

    return (
        <FooterStyled>
            <FlexContainer
                direction="row"
                justify="space-between"
                align="flex-start">

                <LargeBrand />
                <FooterLinks links={cateogories} />
                <FooterLinks links={about} />
                <FooterLinks links={social} />

            </FlexContainer>
        </FooterStyled>
    );
};

export default Footer;