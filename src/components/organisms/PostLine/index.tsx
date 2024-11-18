import React from "react";

import { 
    PostLineStyled,
    PostLineContainer,
    PostLineContainerWrapper
} from "./styled";

import Headline from "../../atoms/Headline";
import Posts from "../../molecules/Posts";

interface PostProps {
    postImage: {
        path: string;
        alt: string;
        title: string;
    };
    postDate: string;
    headline: {
        variant: "primary" | "secondary" | "tertinary";
        content: string;
    };
    description: string;
    postCategory: string[];
};

interface PostLineProps {
    title: string;
    posts: PostProps[]
};

const PostLine: React.FC<PostLineProps> = ({ title, posts }) => {
    return (
        <PostLineStyled>
            <PostLineContainer>
                <Headline variant="secondary" content={title} />
                <PostLineContainerWrapper>

                    {posts.map(item => (
                        <Posts
                            postImage={item.postImage}
                            postDate={item.postDate}
                            headline={item.headline}
                            description={item.description}
                            postCategory={item.postCategory}
                            variant="small" />
                    ))}

                </PostLineContainerWrapper>
            </PostLineContainer>
        </PostLineStyled>
    );
};

export default PostLine;