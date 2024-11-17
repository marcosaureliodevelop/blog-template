import React from "react";
import { PaginationStyled, PageButtons } from "./styled";

import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";

import Button from "../../atoms/Button";

interface PaginationProps { };

/**
 * array de itens
 * setar os posts no layout
 */

const Pagination: React.FC<PaginationProps> = ({ }) => {
    return (
        <PaginationStyled>

            <Button
                variant="lighter"
                content="Anterior"
                method={() => { }}
                iconLeft={<ArrowLeft size={20} />} />

            <PageButtons>
                <Button
                    variant="primary"
                    content="1"
                    method={() => { }} />
                <Button
                    variant="secondary"
                    content="2"
                    method={() => { }} />
                <Button
                    variant="secondary"
                    content="3"
                    method={() => { }} />
                <Button
                    variant="secondary"
                    content="4"
                    method={() => { }} />
            </PageButtons>

            <Button
                variant="lighter"
                content="Próximo"
                method={() => { }}
                iconRight={<ArrowRight size={20} />} />
        </PaginationStyled>
    );
};

export default Pagination;