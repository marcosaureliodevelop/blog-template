import React from "react";

import { MainPostStyled, CategoriesBox } from "./styled";

import CategoryTag from "../../atoms/CategoryTag";
import Span from "../../atoms/Span";
import PostOwner from "../../molecules/PostOwner";
import PostImage from "../../atoms/PostImage";
import Headline from "../../atoms/Headline";
import Paragraph from "../../atoms/Paragraph";

interface MainPostProps {
    categories: string[];
    title: string;
    postDate: string;
    postOwner: {
        firstLetter: string,
        username: string
    };
    postImage: {
        path: string,
        alt: string,
        title: string
    };
    description: string;
};

const MainPost: React.FC<MainPostProps> = (
    {
        categories,
        title,
        postDate,
        postOwner,
        postImage,
        description
    }
) => {
    return (
        <MainPostStyled>
            <CategoriesBox>
                {categories.map(item => (
                    <CategoryTag name={item} />
                ))}
            </CategoriesBox>

            <Headline
                variant="primary"
                content={title} />

            <Span content={postDate} />

            <PostOwner
                username={postOwner.firstLetter}
                content={postOwner.username} />

            <PostImage
                path={require("./image.png")}
                title={postImage.title}
                alt={postImage.alt} />

            <Paragraph content={description} />
        </MainPostStyled>
    );
};

export default MainPost;