import React from "react";
import { PostImageStyled } from "./styled";

interface PostImageProps {
    path: string;
    alt: string;
    title: string;
};

const PostImage: React.FC<PostImageProps> = (
    { path, alt, title }
) => {
    return (
        <PostImageStyled 
            src={path} 
            alt={alt} 
            title={title} />
    );
};

export default PostImage;