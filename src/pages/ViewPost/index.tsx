import React from "react";
import { useParams } from "react-router-dom";

const ViewPost: React.FC = () => {
    const { post } = useParams();
    return (
        <h1>Hello from view post page! {post} </h1>
    );
};

export default ViewPost;