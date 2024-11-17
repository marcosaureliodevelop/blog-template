import React from "react";

import Header from "../../components/organisms/Header";
import TopPosts from "../../components/organisms/TopPosts";
import Showcase from "../../components/organisms/Showcase";

const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <TopPosts />
            <Showcase />
        </>
    );
};

export default HomePage;