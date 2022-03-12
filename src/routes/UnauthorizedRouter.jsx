import { Route, Routes } from "react-router-dom";

import { Layout } from "../components";
import { AuthSpotifyLogin, Login } from "../pages";

const UnauthorizedRouter = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/spotify-login" element={<AuthSpotifyLogin />} />
    </Routes>
  </Layout>
);

export default UnauthorizedRouter;
