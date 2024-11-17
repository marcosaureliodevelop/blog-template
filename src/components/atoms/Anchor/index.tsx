import React from "react";
import { Link } from "react-router-dom";

import { AnchorStyled } from "./styled";

interface AnchorProps {
    content: string;
    url: string;
    color: string;
    weight: string;
};

const Anchor: React.FC<AnchorProps> = ({ content, url, color, weight }) => {
    return (
        <AnchorStyled color={color} weight={weight}>
            <Link to={url}>{content}</Link>
        </AnchorStyled>
    );
};

export default Anchor;