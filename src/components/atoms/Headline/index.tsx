import React from "react";
import {
    HeadlinePrimary,
    HeadlineSecondary,
    HeadlineTertiary,
    HeadlineQuaternary
} from "./styled";

interface HeadlineProps {
    variant: "primary" | "secondary" | "tertiary" | "quaternary";
    content: string;
};

const HeadlineHandler: React.FC<HeadlineProps> = ({ variant, content }) => {
    let structure = (
        <HeadlinePrimary>
            {content}
        </HeadlinePrimary>
    );

    switch (variant) {
        case "primary":
            structure = <HeadlinePrimary>{content}</HeadlinePrimary>;
            break;

        case "secondary":
            structure = <HeadlineSecondary>{content}</HeadlineSecondary>;
            break;

        case "tertiary":
            structure = <HeadlineTertiary>{content}</HeadlineTertiary>;
            break;

        case "quaternary":
            structure = <HeadlineQuaternary>{content}</HeadlineQuaternary>;
            break;

        default:
            structure = <HeadlinePrimary>{content}</HeadlinePrimary>;
            break;
    };

    return structure;
};

const Headline: React.FC<HeadlineProps> = ({ variant, content }) => {
    return <HeadlineHandler variant={variant} content={content} />;
};

export default Headline;