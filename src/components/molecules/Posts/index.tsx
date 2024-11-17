import React from "react";

import {
    LargePostStyled,
    MediumPostStyled,
    SmallPostStyled,
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
    variant: "primary" | "secondary" | "tertinary";
    content: string;
};

interface PostProps {
    postImage: PostImageProps;
    postDate: string;
    headline: HeadlineProps;
    description: string;
    postCategory: string[];
    variant: "large" | "medium" | "small"
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

    let PostComponent =
        <LargePostStyled>
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
                        postCategory.map((category, index) => (
                            <CategoryTag key={index} name={category} />
                        ))
                    }
                </CategoryBox>
            </PostWrapper>
        </LargePostStyled>;

    switch (variant) {

        case "large":
            PostComponent =
                <LargePostStyled>
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
                                postCategory.map((category, index) => (
                                    <CategoryTag key={index} name={category} />
                                ))
                            }
                        </CategoryBox>
                    </PostWrapper>
                </LargePostStyled>;
            break;

        case "medium":
            PostComponent =
                <MediumPostStyled>
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
                                postCategory.map((category, index) => (
                                    <CategoryTag key={index} name={category} />
                                ))
                            }
                        </CategoryBox>
                    </PostWrapper>
                </MediumPostStyled>;
            break;

        case "small":
            PostComponent =
                <SmallPostStyled>
                    <PostImage
                        path={postImage.path}
                        alt={postImage.alt}
                        title={postImage.title} />
                    <PostWrapper>
                        <Span content={postDate} />
                        <Headline
                            variant="quaternary"
                            content={headline.content} />
                        <Paragraph content={description} />
                        <CategoryBox>
                            {
                                postCategory.map((category, index) => (
                                    <CategoryTag key={index} name={category} />
                                ))
                            }
                        </CategoryBox>
                    </PostWrapper>
                </SmallPostStyled>;
            break;

        default:
            PostComponent =
                <LargePostStyled>
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
                                postCategory.map((category, index) => (
                                    <CategoryTag key={index} name={category} />
                                ))
                            }
                        </CategoryBox>
                    </PostWrapper>
                </LargePostStyled>;
            break;
    };

    return PostComponent;
};

export default Post;