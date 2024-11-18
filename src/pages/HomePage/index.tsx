import React from "react";
import { motion } from "framer-motion";

import {
    HomePageStyled,
    CapterFooter,
    MotionSection
} from "./styled";

import Header from "../../components/organisms/Header";
import TopPosts from "../../components/organisms/TopPosts";
import Showcase from "../../components/organisms/Showcase";
import SubFooter from "../../components/organisms/SubFooter";
import Footer from "../../components/organisms/Footer";

/**
 * Aqui pode ficar as funcionalidades da página como:
 * uso os hooks
 * declaração de funções
 * consumo de API
 */

const AnimatedSection = motion(MotionSection);

const HomePage: React.FC = () => {
    return (
        <HomePageStyled>
            <AnimatedSection
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.0,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <Header />
            </AnimatedSection>

            <AnimatedSection
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.0,
                    delay: 0.7,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <TopPosts />
            </AnimatedSection>

            <AnimatedSection
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.0,
                    delay: 1.1,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                <Showcase />
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

        </HomePageStyled>
    );
};

export default HomePage;