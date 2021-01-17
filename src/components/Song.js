import React from "react";

export const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="song">
      <img className={`song__cover ${isPlaying ? 'rotate' : ''}`} src={currentSong.cover} alt={currentSong.name} />
      <h1 className="song__name">{currentSong.name}</h1>
      <h2 className="song__artist">{currentSong.artist}</h2>
    </div>
  );
};