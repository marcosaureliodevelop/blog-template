import React from "react";
import { UserImageStyled } from "./styled";

interface UserImageProps {
    userFirstLetter: string;
    size: number;
};

const UserImage: React.FC<UserImageProps> = ({ userFirstLetter, size }) => {
    return (
        <UserImageStyled size={size}>
            {userFirstLetter}
        </UserImageStyled>
    );
};

export default UserImage;