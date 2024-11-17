import React from "react";

import { Colors } from "../../../styles/helpers/Colors";
import {
    LikeButtonStyled,
    CaptionStyled
} from "./styled";

import { ThumbsUp } from "lucide-react";

interface LikeButtonProps {
    amount: number;
};

const LikeButton: React.FC<LikeButtonProps> = ({ amount }) => {
    return (
        <LikeButtonStyled>
            <ThumbsUp size={20} color={Colors.primary} />
            <CaptionStyled>{amount}</CaptionStyled>
        </LikeButtonStyled>
    );
};

export default LikeButton;