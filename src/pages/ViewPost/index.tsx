import React from "react";
import { motion } from "framer-motion";

import {
    ViewPostStyled,
    CapterFooter,
    MotionSection,
    MainContainer
} from "./styled";

import Navbar from "../../components/molecules/Navbar";
import SubFooter from "../../components/organisms/SubFooter";
import Footer from "../../components/organisms/Footer";
import PostLine from "../../components/organisms/PostLine";
import MainPost from "../../components/organisms/MainPost";
import Comments from "../../components/organisms/Comments";

const AnimatedSection = motion(MotionSection);
const AnimatedMainContainer = motion(MainContainer);

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

const ViewPost: React.FC = () => {

    const posts: PostProps[] = [
        {
            postImage: {
                path: require("../HomePage/image.png"),
                alt: "Minha postagem",
                title: "Minha postagem"
            },
            postDate: "17 Nov 2024",
            headline: {
                variant: "tertinary",
                content: "Desenvolvimento sustentável: Criando um futuro mais verde com a tecnologia"
            },
            description: "Explore como a tecnologia pode ser utilizada para promover a sustentabilidade e criar um futuro...",
            postCategory: ["Tecnologia", "Inovação"]
        },
        {
            postImage: {
                path: require("../HomePage/image.png"),
                alt: "Minha postagem",
                title: "Minha postagem"
            },
            postDate: "17 Nov 2024",
            headline: {
                variant: "tertinary",
                content: "Desenvolvimento sustentável: Criando um futuro mais verde com a tecnologia"
            },
            description: "Explore como a tecnologia pode ser utilizada para promover a sustentabilidade e criar um futuro...",
            postCategory: ["Tecnologia", "Inovação"]
        },
        {
            postImage: {
                path: require("../HomePage/image.png"),
                alt: "Minha postagem",
                title: "Minha postagem"
            },
            postDate: "17 Nov 2024",
            headline: {
                variant: "tertinary",
                content: "Desenvolvimento sustentável: Criando um futuro mais verde com a tecnologia"
            },
            description: "Explore como a tecnologia pode ser utilizada para promover a sustentabilidade e criar um futuro...",
            postCategory: ["Tecnologia", "Inovação"]
        },
        {
            postImage: {
                path: require("../HomePage/image.png"),
                alt: "Minha postagem",
                title: "Minha postagem"
            },
            postDate: "17 Nov 2024",
            headline: {
                variant: "tertinary",
                content: "Desenvolvimento sustentável: Criando um futuro mais verde com a tecnologia"
            },
            description: "Explore como a tecnologia pode ser utilizada para promover a sustentabilidade e criar um futuro...",
            postCategory: ["Tecnologia", "Inovação"]
        }
    ];

    const comments: CommentsProps[] = [
        {
            firstLetter: "U",
            username: "Marcos Aurélio",
            content: "Artigo muito interessante! Acredito que a tecnologia, além de transformar o mercado de trabalho, também trará mais oportunidades.",
            likeAmount: 3
        },
        {
            firstLetter: "U",
            username: "Marcos Aurélio",
            content: "Artigo muito interessante! Acredito que a tecnologia, além de transformar o mercado de trabalho, também trará mais oportunidades.",
            likeAmount: 3
        },
        {
            firstLetter: "U",
            username: "Marcos Aurélio",
            content: "Artigo muito interessante! Acredito que a tecnologia, além de transformar o mercado de trabalho, também trará mais oportunidades.",
            likeAmount: 3
        },
        {
            firstLetter: "U",
            username: "Marcos Aurélio",
            content: "Artigo muito interessante! Acredito que a tecnologia, além de transformar o mercado de trabalho, também trará mais oportunidades.",
            likeAmount: 3
        },
        {
            firstLetter: "U",
            username: "Marcos Aurélio",
            content: "Artigo muito interessante! Acredito que a tecnologia, além de transformar o mercado de trabalho, também trará mais oportunidades.",
            likeAmount: 3
        }
    ];

    return (
        <ViewPostStyled>
            <AnimatedSection
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.0,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <Navbar />
            </AnimatedSection>

            <AnimatedMainContainer
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.0,
                    delay: 0.7,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <MainPost
                    categories={["Tecnologia", "Inovação"]}
                    title="O futuro do trabalho: Como a tecnologia está moldando as profissões do futuro"
                    postOwner={{
                        username: "Marcos Aurélio",
                        firstLetter: "M"
                    }}
                    postImage={{
                        path: require("../HomePage/image.png"),
                        alt: "Minha imagem",
                        title: "Minha imagem"
                    }}
                    postDate="17 Nov 2024"
                    description="Você já imaginou como será o mercado de trabalho daqui a 10 anos? A velocidade com que a tecnologia avança está transformando radicalmente as profissões, exigindo novas habilidades e criando oportunidades antes inimagináveis.

A inteligência artificial, a automação e a digitalização estão redefinindo a maneira como trabalhamos. Neste artigo, vamos explorar como essas tecnologias estão moldando o futuro do trabalho e quais profissões estão em alta.

Além da automação, a inteligência artificial está transformando diversas áreas, desde a saúde até o atendimento ao cliente. Ferramentas como chatbots e assistentes virtuais estão se tornando cada vez mais sofisticadas, exigindo profissionais capazes de desenvolvê-las e treiná-las.

A economia gig economy, impulsionada por plataformas digitais, também está redefinindo o mercado de trabalho. Profissionais autônomos e freelancers têm mais oportunidades de trabalho, mas precisam desenvolver habilidades de gestão de tempo, marketing pessoal e adaptação a diferentes projetos.

O futuro do trabalho é promissor para aqueles que estão dispostos a se adaptar e aprender novas habilidades. A tecnologia está criando um mundo de oportunidades, e aqueles que souberem aproveitar essas oportunidades estarão à frente." />
                <Comments comments={comments} />
            </AnimatedMainContainer>

            <AnimatedSection
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.0,
                    delay: 1.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <PostLine
                    title="Posts Relacionados"
                    posts={posts} />

            </AnimatedSection>

            <AnimatedSection
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.0,
                    delay: 1.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <CapterFooter>
                    <SubFooter />
                    <Footer />
                </CapterFooter>
            </AnimatedSection>
        </ViewPostStyled >
    );
};

export default ViewPost;