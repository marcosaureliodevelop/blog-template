import React, { useState } from "react";
import PostLine from "../../components/organisms/PostLine";

import Post from "../../components/molecules/Post";

const HomePage: React.FC = () => {
    return (
        <>
            <PostLine />
            <Post
                postImage={require("./image.png")}
                postDate="17 de Novembro de 2024"
                headline={{variant: "primary", content: "O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"}}
                description="Explore as principais tendências tecnológicas que estão impactando o mercado de trabalho e descubra como se preparar para as profissões do futuro."
                postCategory={["Tecnologia", "Trabalho"]}
                variant="vertical" />
        </>
    );
};

export default HomePage;