import { useCallback } from "react";

import { Button } from "../components";

import styles from "./styles/Login.module.scss";

const spotifyCallbackUrl = process.env.SPOTIFY_CALLBACK_URI;
const sporifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=token&redirect_uri=${spotifyCallbackUrl}`;

const LoginPage = () => {
  const handleLoginSpotify = useCallback(() => {
    window.location.href = sporifyAuthUrl;
  });

  return (
    <div className={styles.LoginContainer}>
      <div className={styles.TextContainer}>
        <h1 className={styles.LoginTitle}>Bem-vindo ao XPotify</h1>

        <h4 className={styles.LoginOnboarding}>
          Cansamos de só investir, agora tocamos música também.
        </h4>
      </div>

      <Button type="submit" onClick={handleLoginSpotify}>Entrar</Button>
    </div>
  );
};

export default LoginPage;
