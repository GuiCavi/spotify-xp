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
      const saveData = {
        ...spotifyAuthData,
        login_at: +new Date(),
      };

      localStorage.setItem("auth_data", JSON.stringify(saveData));
      dispatch(setData(saveData));
    }
    setTimeout(() => navigate("/"), 1500);
  }, []);

  return <span>Carregando...</span>;
};

export default AuthSpotifyLogin;
