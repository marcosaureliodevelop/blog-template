import React from "react";

import MainPost from "../../components/organisms/MainPost";

const HomePage: React.FC = () => {
    return (
        <>
            <MainPost
                categories={['Tecnologia', 'Mercado de Trabalho', 'Inovação']}
                title="O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"
                postDate="17 Nov 20247"
                postOwner={{ 
                    firstLetter: "U",
                    username: "Marcos Aurélio" 
                }}
                postImage={{ 
                    path: "./image.png",
                    alt: "Imagem do post",
                    title: "Imagem do post" 
                }}
                description="Você já imaginou como será o mercado de trabalho daqui a 10 anos? A velocidade com que a tecnologia avança está transformando radicalmente as profissões, exigindo novas habilidades e criando oportunidades antes inimagináveis.

A inteligência artificial, a automação e a digitalização estão redefinindo a maneira como trabalhamos. Neste artigo, vamos explorar como essas tecnologias estão moldando o futuro do trabalho e quais profissões estão em alta.

Além da automação, a inteligência artificial está transformando diversas áreas, desde a saúde até o atendimento ao cliente. Ferramentas como chatbots e assistentes virtuais estão se tornando cada vez mais sofisticadas, exigindo profissionais capazes de desenvolvê-las e treiná-las.

A economia gig economy, impulsionada por plataformas digitais, também está redefinindo o mercado de trabalho. Profissionais autônomos e freelancers têm mais oportunidades de trabalho, mas precisam desenvolver habilidades de gestão de tempo, marketing pessoal e adaptação a diferentes projetos.

O futuro do trabalho é promissor para aqueles que estão dispostos a se adaptar e aprender novas habilidades. A tecnologia está criando um mundo de oportunidades, e aqueles que souberem aproveitar essas oportunidades estarão à frente." />
        </>
    );
};

export default HomePage;