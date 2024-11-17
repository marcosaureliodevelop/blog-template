import { createGlobalStyle } from "styled-components";
import { Colors } from "./helpers/Colors";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;

        &::selection {
            color: ${Colors.white};
            background-color: ${Colors.primary};
        };
    };
`;

export default GlobalStyle;