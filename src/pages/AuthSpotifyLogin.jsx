import { useEffect } from "react";
import Lottie from "react-lottie";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import loadingAnimationData from "../assets/lotties/loading-page.json";
import { useRandomMessage, useSpotifyAuthData } from "../hooks";
import { setData } from "../redux/slices/Auth";

import styles from "./styles/AuthSpotifyLogin.module.scss";

const AuthSpotifyLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { error, spotifyAuthData } = useSpotifyAuthData(location);

  useEffect(() => {
    if (error) {
      // TODO: Show error
      console.log(error);
      navigate("/");
    } else {
      const saveData = {
        ...spotifyAuthData,
        login_at: +new Date(),
      };

      localStorage.setItem("auth_data", JSON.stringify(saveData));
      setTimeout(() => {
        dispatch(setData(saveData));
        navigate("/");
      }, Math.max(3000, Math.ceil(Math.random() * 6000)));
    }
  }, []);

  const randomMessage = useRandomMessage();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />

      <div className={styles.LoadingText}>{randomMessage}</div>
    </div>
  );
};

export default AuthSpotifyLogin;
