import React from "react";

import PostLine from "../../components/organisms/PostLine";

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

    return (
        <>
            <PostLine 
                title="Posts Relacionados"
                posts={posts} />
        </>
    );
};

export default HomePage;