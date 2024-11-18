import React from "react";
import { motion } from "framer-motion";

import { PostImageStyled } from "./styled";

interface PostImageProps {
    path: string;
    alt: string;
    title: string;
};

const AnimatedPostImage = motion(PostImageStyled);

const PostImage: React.FC<PostImageProps> = (
    { path, alt, title }
) => {
    return (
        <AnimatedPostImage
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}

            src={path}
            alt={alt}
            title={title} />
    );
};

export default PostImage;