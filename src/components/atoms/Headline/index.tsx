import React from "react";
import {
    HeadlinePrimary,
    HeadlineSecondary
} from "./styled";

interface HeadlineProps {
    variant: "primary" | "secondary";
    content: string;
};

const Headline: React.FC<HeadlineProps> = (
    { variant, content }
) => {
    return (
        variant === "secondary" ? (
            <HeadlineSecondary>{content}</HeadlineSecondary>
        ) : (
            <HeadlinePrimary>{content}</HeadlinePrimary>
        )
    );
};

export default Headline;