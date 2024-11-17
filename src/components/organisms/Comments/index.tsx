import React from "react";

import {
    CommentsStyled,
    CommentsHeadlineStyled,
    LineDivision,
    CommentsContainer
} from "./styled";

import CapterLeadComment from "../../molecules/CapterLeadComment";
import Comment from "../../molecules/Comment";
import Headline from "../../atoms/Headline";
import CommentFilter from "../../molecules/CommentFilter";

interface CommentsProps {
    firstLetter: string;
    username: string;
    content: string;
    likeAmount: number;
};

const Comments: React.FC<{ comments: CommentsProps[] }> = ({ comments }) => {
    return (
        <CommentsStyled>
            <CapterLeadComment />

            <CommentsHeadlineStyled>
                <Headline variant="tertiary" content="Comentários" />
                <CommentFilter />
            </CommentsHeadlineStyled>

            <LineDivision />

            <CommentsContainer>
                {comments.map(item => (
                    <Comment
                        firstLetter={item.firstLetter}
                        username={item.username}
                        content={item.content}
                        likeAmount={item.likeAmount} />
                ))}
            </CommentsContainer>
        </CommentsStyled>
    );
};

export default Comments;