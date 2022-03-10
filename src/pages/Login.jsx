import { useCallback } from "react";

const spotifyCallbackUrl = process.env.SPOTIFY_CALLBACK_URI;
const sporifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=token&redirect_uri=${spotifyCallbackUrl}`;

const LoginPage = () => {
  const handleLoginSpotify = useCallback(() => {
    window.location.href = sporifyAuthUrl;
  });

  return (
    <div>
      <h1>Login</h1>

      <button type="submit" onClick={handleLoginSpotify}>Entrar</button>
    </div>
  );
};

export default LoginPage;
