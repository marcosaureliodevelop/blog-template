import React from "react";

import {
    ShowcaseStyled,
    ShowcaseContainer,
    ShowcaseWrapper
} from "./styled";

import Posts from "../../molecules/Posts";
import Headline from "../../atoms/Headline";

const Showcase: React.FC = () => {
    return (
        <ShowcaseStyled>
            <ShowcaseContainer>
                <Headline variant="secondary" content="Todos os Posts" />
                <ShowcaseWrapper>
                    <Posts
                        postImage={{
                            path: require("./image.png"),
                            alt: "Imagem do post",
                            title: "Imagem do post"
                        }}
                        postDate="26 Outubro 2024"
                        headline={{
                            variant: "tertinary",
                            content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"
                        }}
                        description="Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro."
                        postCategory={["Tecnologia", "Desenvolvimento", "Trabalho"]}
                        variant="medium" />

                    <Posts
                        postImage={{
                            path: require("./image.png"),
                            alt: "Imagem do post",
                            title: "Imagem do post"
                        }}
                        postDate="26 Outubro 2024"
                        headline={{
                            variant: "tertinary",
                            content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"
                        }}
                        description="Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro."
                        postCategory={["Tecnologia", "Desenvolvimento", "Trabalho"]}
                        variant="medium" />

                    <Posts
                        postImage={{
                            path: require("./image.png"),
                            alt: "Imagem do post",
                            title: "Imagem do post"
                        }}
                        postDate="26 Outubro 2024"
                        headline={{
                            variant: "tertinary",
                            content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"
                        }}
                        description="Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro."
                        postCategory={["Tecnologia", "Desenvolvimento", "Trabalho"]}
                        variant="medium" />

                    <Posts
                        postImage={{
                            path: require("./image.png"),
                            alt: "Imagem do post",
                            title: "Imagem do post"
                        }}
                        postDate="26 Outubro 2024"
                        headline={{
                            variant: "tertinary",
                            content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"
                        }}
                        description="Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro."
                        postCategory={["Tecnologia", "Desenvolvimento", "Trabalho"]}
                        variant="medium" />

                    <Posts
                        postImage={{
                            path: require("./image.png"),
                            alt: "Imagem do post",
                            title: "Imagem do post"
                        }}
                        postDate="26 Outubro 2024"
                        headline={{
                            variant: "tertinary",
                            content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"
                        }}
                        description="Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro."
                        postCategory={["Tecnologia", "Desenvolvimento", "Trabalho"]}
                        variant="medium" />

                    <Posts
                        postImage={{
                            path: require("./image.png"),
                            alt: "Imagem do post",
                            title: "Imagem do post"
                        }}
                        postDate="26 Outubro 2024"
                        headline={{
                            variant: "tertinary",
                            content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"
                        }}
                        description="Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro."
                        postCategory={["Tecnologia", "Desenvolvimento", "Trabalho"]}
                        variant="medium" />

                    <Posts
                        postImage={{
                            path: require("./image.png"),
                            alt: "Imagem do post",
                            title: "Imagem do post"
                        }}
                        postDate="26 Outubro 2024"
                        headline={{
                            variant: "tertinary",
                            content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"
                        }}
                        description="Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro."
                        postCategory={["Tecnologia", "Desenvolvimento", "Trabalho"]}
                        variant="medium" />

                    <Posts
                        postImage={{
                            path: require("./image.png"),
                            alt: "Imagem do post",
                            title: "Imagem do post"
                        }}
                        postDate="26 Outubro 2024"
                        headline={{
                            variant: "tertinary",
                            content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"
                        }}
                        description="Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro."
                        postCategory={["Tecnologia", "Desenvolvimento", "Trabalho"]}
                        variant="medium" />

                    <Posts
                        postImage={{
                            path: require("./image.png"),
                            alt: "Imagem do post",
                            title: "Imagem do post"
                        }}
                        postDate="26 Outubro 2024"
                        headline={{
                            variant: "tertinary",
                            content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"
                        }}
                        description="Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro."
                        postCategory={["Tecnologia", "Desenvolvimento", "Trabalho"]}
                        variant="medium" />
                </ShowcaseWrapper>
            </ShowcaseContainer>
        </ShowcaseStyled>
    );
};

export default Showcase;