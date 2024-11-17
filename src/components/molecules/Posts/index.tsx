import React from "react";
import {
    PostStyled,
    PostWrapper,
    CategoryBox
} from "./styled";

import PostImage from "../../atoms/PostImage";
import Span from "../../atoms/Span";
import Headline from "../../atoms/Headline";
import Paragraph from "../../atoms/Paragraph";
import CategoryTag from "../../atoms/CategoryTag";

interface PostImageProps {
    path: string;
    alt: string;
    title: string;
};

interface HeadlineProps {
    variant: "primary" | "secondary";
    content: string;
};

interface PostProps {
    postImage: PostImageProps;
    postDate: string;
    headline: HeadlineProps;
    description: string;
    postCategory: string[];
    variant: "horizontal" | "vertical";
};

const Post: React.FC<PostProps> = (
    {
        postImage,
        postDate,
        headline,
        description,
        postCategory,
        variant
    }
) => {
    return (
        <PostStyled variant={variant}>
            <PostImage
                path={postImage.path}
                alt={postImage.alt}
                title={postImage.title} />
            <PostWrapper>
                <Span content={postDate} />
                <Headline
                    variant="secondary"
                    content={headline.content} />
                <Paragraph content={description} />
                <CategoryBox>
                    {
                        postCategory.map(category => (
                            <CategoryTag name={category} />
                        ))
                    }
                </CategoryBox>
            </PostWrapper>
        </PostStyled>
    );
};

export default Post;