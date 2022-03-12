import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const PlayerSlice = createSlice({
  name: "player",
  initialState: {
    playlist: [],
    currentSong: null,
    currentSongIndex: 0,
    isPlaying: false,
  },
  reducers: {
    setPlaylist: (state, action) => {
      state.playlist = action.payload;
      state.currentSong = action.payload[0];
      state.isPlaying = true;
    },
    pausePlaylist: (state) => {
      state.isPlaying = false;
    },
    playPlaylist: (state) => {
      state.isPlaying = true;
    },
    nextSong: (state) => {
      if (state.currentSongIndex + 1 >= state.playlist.length) {
        state.isPlaying = false;
      } else {
        state.currentSongIndex += 1;
        state.currentSong = state.playlist[state.currentSongIndex];
      }
    },
    prevSong: (state) => {
      if (state.currentSongIndex - 1 < 0) {
        state.isPlaying = false;
      } else {
        state.currentSongIndex -= 1;
        state.currentSong = state.playlist[state.currentSongIndex];
      }
    },
  },
});

export const {
  setPlaylist, pausePlaylist, playPlaylist, nextSong, prevSong,
} = PlayerSlice.actions;

export default PlayerSlice.reducer;

export const useCurrentSong = () => useSelector((state) => state.player.currentSong);
export const useIsPlaying = () => useSelector((state) => state.player.isPlaying);
export const useHasPlayer = () => useSelector((state) => !!state.player.currentSong);
