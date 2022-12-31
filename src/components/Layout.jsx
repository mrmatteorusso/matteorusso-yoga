import Bio from "pages/Bio";
import Contatti from "pages/Contatti";
import Home from "pages/Home";
import Lezioni from "pages/Lezioni";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Footer } from "./Footer";
import Navbar from "./Navbar";


export function Layout() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="bio" element={<Bio />} />
                    <Route path="contatti" element={<Contatti />} />
                    <Route path="lezioni" element={<Lezioni />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
            <Footer />

        </>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Ops, qui non trovi niente!</h2>
            <p>
                <Link to="/">Vai alla pagina iniziale</Link>
            </p>
        </div>
    );
}