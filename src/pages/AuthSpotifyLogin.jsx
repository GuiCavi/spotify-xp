import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useSpotifyAuthData } from "../hooks";
import { setData } from "../redux/slices/Auth";

const AuthSpotifyLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, spotifyAuthData } = useSpotifyAuthData();

  useEffect(() => {
    if (error) {
      // TODO: Show error
      console.log(error);
    } else {
      localStorage.setItem("auth_data", JSON.stringify(spotifyAuthData));
      dispatch(setData(spotifyAuthData));
    }
    setTimeout(() => navigate("/"), 1500);
  }, []);

  return <span>Carregando...</span>;
};

export default AuthSpotifyLogin;
