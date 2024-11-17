import React from "react";

import PostLine from "../../components/organisms/PostLine";
import Comments from "../../components/organisms/Comments";

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

interface CommentsProps {
    firstLetter: string;
    username: string;
    content: string;
    likeAmount: number;
};

const HomePage: React.FC = () => {

    /** esta constante representa o retorno da api fictícia */
    const posts: PostProps[] = [
        {
            postImage: {
                path: require("./image.png"),
                alt: "Imagem do Post",
                title: "Imagem do Post"
            },
            postDate: "17 de Novembro de 2024",
            headline: {
                variant: "primary",
                content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"
            },
            description: "Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro.",
            postCategory: ["Tecnologia", "Trabalho"]
        },
        {
            postImage: {
                path: require("./image.png"),
                alt: "Imagem do Post",
                title: "Imagem do Post"
            },
            postDate: "17 de Novembro de 2024",
            headline: {
                variant: "primary",
                content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"
            },
            description: "Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro.",
            postCategory: ["Tecnologia", "Trabalho"]
        },
        {
            postImage: {
                path: require("./image.png"),
                alt: "Imagem do Post",
                title: "Imagem do Post"
            },
            postDate: "17 de Novembro de 2024",
            headline: {
                variant: "primary",
                content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"
            },
            description: "Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro.",
            postCategory: ["Tecnologia", "Trabalho"]
        },
        {
            postImage: {
                path: require("./image.png"),
                alt: "Imagem do Post",
                title: "Imagem do Post"
            },
            postDate: "17 de Novembro de 2024",
            headline: {
                variant: "primary",
                content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"
            },
            description: "Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro.",
            postCategory: ["Tecnologia", "Trabalho"]
        }
    ];

    /** esta constante representa o retorno da api fictícia */
    const comments: CommentsProps[] = [
        {
            firstLetter: "A",
            username: "Ana Clara Oliveira",
            content: "Artigo muito interessante! Acredito que a tecnologia, além de transformar o mercado de trabalho, também trará mais oportunidades.",
            likeAmount: 2
        },
        {
            firstLetter: "A",
            username: "Ana Clara Oliveira",
            content: "Artigo muito interessante! Acredito que a tecnologia, além de transformar o mercado de trabalho, também trará mais oportunidades.",
            likeAmount: 8
        },
        {
            firstLetter: "A",
            username: "Ana Clara Oliveira",
            content: "Artigo muito interessante! Acredito que a tecnologia, além de transformar o mercado de trabalho, também trará mais oportunidades.",
            likeAmount: 3
        },
        {
            firstLetter: "A",
            username: "Ana Clara Oliveira",
            content: "Artigo muito interessante! Acredito que a tecnologia, além de transformar o mercado de trabalho, também trará mais oportunidades.",
            likeAmount: 1
        }
    ];

    return (
        <>
            <PostLine
                title="Posts Relacionados"
                posts={posts} />

            <Comments comments={comments} />
        </>
    );
};

export default HomePage;