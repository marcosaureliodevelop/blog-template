import React from "react";
import { FooterLinksStyled } from "./styled";

import { Colors } from "../../../styles/helpers/Colors";
import { FontWeights } from "../../../styles/helpers/Typography";

import Anchor from "../../atoms/Anchor";

interface LinksProps {
    url: string,
    content: string
};

interface FooterLinksProps {
    links: LinksProps[];
};

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
    return (
        <FooterLinksStyled>
            {(links.map(item => (
                <Anchor 
                    url={item.url}
                    content={item.content}
                    color={Colors.white}
                    weight={FontWeights.stronger} />
            )))}
        </FooterLinksStyled>
    );
};

export default FooterLinks;