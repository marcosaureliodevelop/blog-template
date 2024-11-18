import React from "react";
import { BrowserRouter, Route, Routes as RouterDom } from "react-router-dom";

import Home from "../pages/HomePage";
import ViewPost from "../pages/ViewPost";

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <RouterDom>
                <Route path="/" element={<Home />} />
                <Route path="/view" element={<ViewPost />} />
            </RouterDom>
        </BrowserRouter>
    );
};

export default Routes;