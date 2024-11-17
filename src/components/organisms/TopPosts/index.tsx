import React from "react";

import {
    TopPostsStyled,
    TopPostsContainer
} from "./styled";

import Posts from "../../molecules/Posts";

const TopPosts: React.FC = () => {
    return (
        <TopPostsStyled>
            <TopPostsContainer>
                <Posts
                    postImage={{
                        path: require("./image.png"),
                        alt: "Imagem do post",
                        title: "Imagem do post"
                    }}
                    postDate="26 Outubro 2024"
                    headline={{
                        variant: "secondary",
                        content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"
                    }}
                    description="Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro."
                    postCategory={["Tecnologia", "Desenvolvimento", "Trabalho"]}
                    variant="large" />

                <Posts
                    postImage={{
                        path: require("./image.png"),
                        alt: "Imagem do post",
                        title: "Imagem do post"
                    }}
                    postDate="26 Outubro 2024"
                    headline={{
                        variant: "secondary",
                        content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"
                    }}
                    description="Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro."
                    postCategory={["Tecnologia", "Desenvolvimento", "Trabalho"]}
                    variant="large" />
            </TopPostsContainer>
        </TopPostsStyled >
    );
};

export default TopPosts;