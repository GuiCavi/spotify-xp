import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { AuthSpotifyLogin, Login } from "../pages";

const UnauthorizedRouter = () => {
  const dispatch = useDispatch();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/spotify-login" element={<AuthSpotifyLogin />} />
    </Routes>
  );
};

export default UnauthorizedRouter;
