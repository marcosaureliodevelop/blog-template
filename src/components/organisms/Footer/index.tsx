import React, { useState } from "react";
import { FooterStyled, FooterContainer } from "./styled";

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
            <FooterContainer>

                <LargeBrand centered={true} />
                <FooterLinks links={cateogories} centered={true} />
                <FooterLinks links={about} centered={true} />
                <FooterLinks links={social} centered={true} />

            </FooterContainer>
        </FooterStyled>
    );
};

export default Footer;