import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { useSpotifyAuthData } from "../hooks";

const AuthSpotifyLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, spotifyAuthData } = useSpotifyAuthData();

  useEffect(() => {
    if (error) {
      // TODO: Show error
      console.log(error);
    }
    navigate("/");
  }, []);

  return <span>Carregando...</span>;
};

export default AuthSpotifyLogin;
