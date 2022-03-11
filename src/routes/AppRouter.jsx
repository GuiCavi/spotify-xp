import {
  Navigate, Route, Routes,
} from "react-router-dom";

import { Layout } from "../components";
import { Home, Album } from "../pages";

const AppRouter = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/albums/:artist" element={<Album />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Layout>
);

export default AppRouter;
