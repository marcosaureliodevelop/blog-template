import React from "react";
import { PostOwnerStyled } from "./styled";

import UserImage from "../../atoms/UserImage";
import Paragraph from "../../atoms/Paragraph";

interface PostOwnerProps {
    username: string,
    content: string
};

const PostOwner: React.FC<PostOwnerProps> = ({ username, content }) => {
    return (
        <PostOwnerStyled>
            <UserImage userFirstLetter={username} size={64} />
            <Paragraph content={content} />
        </PostOwnerStyled>
    );
};

export default PostOwner;