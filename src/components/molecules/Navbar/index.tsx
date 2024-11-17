import React from "react";

import { Colors } from "../../../styles/helpers/Colors";
import { FontWeights } from "../../../styles/helpers/Typography";

import { NavbarStyled, NavbarListStyled, ButtonContainer, MenuIcon } from "./styled";

import Anchor from "../../atoms/Anchor";
import BrandIcon from "../../atoms/BrandIcon";
import Button from "../../atoms/Button";
import { FlexContainer } from "../../../styles/helpers/Containers";

import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
    return (
        <NavbarStyled>
            <FlexContainer direction="row" justify="space-between" align="center">

                <BrandIcon width={116} height={18} color={Colors.primary} />

                <NavbarListStyled>
                    <Anchor
                        url="/"
                        content="Início"
                        color={Colors.black}
                        weight={FontWeights.stronger} />
                    <Anchor
                        url="view/ia"
                        content="Inteligência Artificial"
                        color={Colors.black}
                        weight={FontWeights.stronger} />
                    <Anchor
                        url="view/tecnologia"
                        content="Tecnologia"
                        color={Colors.black}
                        weight={FontWeights.stronger} />
                    <Anchor
                        url="view/inovacao"
                        content="Inovação"
                        color={Colors.black}
                        weight={FontWeights.stronger} />
                    <Anchor
                        url="view/ux-ui-desgin"
                        content="UX e UI Design"
                        color={Colors.black}
                        weight={FontWeights.stronger} />
                </NavbarListStyled>

                <ButtonContainer>
                    <Button
                        variant="primary"
                        content="Criar conta"
                        method={() => console.log("Create account path...")} />
                </ButtonContainer>

                <MenuIcon>
                    <Menu color={Colors.primary} />
                </MenuIcon>

            </FlexContainer>
        </NavbarStyled>
    );
};

export default Navbar;