import React from "react";
import { CategoryTagStyled } from "./styled";

interface CategoryTagProps {
    name: string;
};

const CategoryTag: React.FC<CategoryTagProps> = (
    { name }
) => {
    return (
        <CategoryTagStyled>
            {name}
        </CategoryTagStyled>
    );
};

export default CategoryTag;