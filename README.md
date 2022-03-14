# spotify-xp

## Running the project

[READ THE ENVIRONMENT VARIABLES SECTION](#environment-variables)

After you finished setting up the environment variables, to run the project just use the commands

`yarn` - to install the dependencies

`sxp init` - it will ask for the environment variables needed to run the project

`sxp run (or yarn start)` - to run development env

## Environment variables

In order to access Spotify Web API, you will need to specify 2 keys in a `.env` file:

* CLIENT_ID: an ID found in your APP created in [Spotify Dashboard](https://developer.spotify.com/dashboard/login)
* CLIENT_SECRET: a secret key also found in your APP created in [Spotify Dashboard](https://developer.spotify.com/dashboard/login), below (and hidden) the CLIENT_ID.

Also, you'll will need to configure a third key:

* SPOTIFY_CALLBACK_URI: this is the url to the page that will handle the response from your login. This URI is also added in the [Spotify Dashboard](https://developer.spotify.com/dashboard/login) > Edit settings > **Redirect URIs**
section. For this project, it's set to the pathname `/spotify-login`, so in order to work okay in **dev mode** the recommended key should be:

  * `http://localhost:{port}/spotify-login`
