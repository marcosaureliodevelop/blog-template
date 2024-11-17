import React from "react";

import Posts from "../../components/molecules/Posts";

const HomePage: React.FC = () => {
    return (
        <>
            <Posts
                postImage={{ path: require("./image.png"), alt: "Imagem do Post", title: "Imagem do Post" }}
                postDate="17 de Novembro de 2024"
                headline={{ variant: "primary", content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro" }}
                description="Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro."
                postCategory={["Tecnologia", "Trabalho"]}
                variant="large" />

            <Posts
                postImage={{ path: require("./image.png"), alt: "Imagem do Post", title: "Imagem do Post" }}
                postDate="17 de Novembro de 2024"
                headline={{ variant: "primary", content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro" }}
                description="Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro."
                postCategory={["Tecnologia", "Trabalho"]}
                variant="medium" />

            <Posts
                postImage={{ path: require("./image.png"), alt: "Imagem do Post", title: "Imagem do Post" }}
                postDate="17 de Novembro de 2024"
                headline={{ variant: "primary", content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro" }}
                description="Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro."
                postCategory={["Tecnologia", "Trabalho"]}
                variant="small" />
        </>
    );
};

export default HomePage;