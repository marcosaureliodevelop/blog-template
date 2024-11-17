import React from "react";

import { 
    CommentStyled,
    UsernameStyled,
    CommentWrapper
} from "./styled";

import UserImage from "../../atoms/UserImage";
import Paragraph from "../../atoms/Paragraph";
import LikeButton from "../../atoms/LikeButton";

interface CommentProps {
    firstLetter: string,
    username: string,
    content: string,
    likeAmount: number
};

const Comment: React.FC<CommentProps> = ({ firstLetter, username, content, likeAmount }) => {
    return (
        <CommentStyled>
            <UserImage userFirstLetter={firstLetter} size={56} />
            <CommentWrapper>
                <UsernameStyled>{username}</UsernameStyled>
                <Paragraph content={content} />
                <LikeButton amount={likeAmount} />
            </CommentWrapper>
        </CommentStyled>
    );
};

export default Comment;