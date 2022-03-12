import React from "react";
import {
  Navigate, Route, Routes,
} from "react-router-dom";

import { Layout, Player } from "../components";
import { Home, Album } from "../pages";

const AppRouter = () => (
  <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums/:artist" element={<Album />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
    <Player />
  </>
);

export default AppRouter;
