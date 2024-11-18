import React from "react";

import { 
    HomePageStyled,
    CapterFooter
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

const HomePage: React.FC = () => {
    return (
        <HomePageStyled>
            <Header />
            <TopPosts />
            <Showcase />
            <CapterFooter>
                <SubFooter />
                <Footer />
            </CapterFooter>
        </HomePageStyled>
    );
};

export default HomePage;