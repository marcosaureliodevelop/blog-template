import React from "react";

import { HeaderStyled } from "./styled";

import Navbar from "../../molecules/Navbar";
import SearchBox from "../../molecules/SearchBox";

const Header: React.FC = () => {
    return (
        <HeaderStyled>
            <Navbar />
            <SearchBox />
        </HeaderStyled>
    );
};

export default Header;