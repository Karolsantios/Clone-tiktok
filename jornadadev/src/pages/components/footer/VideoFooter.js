import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className="videofooter">
      <div className="videofooter__text"></div>
      <h3>@Paulo ebac</h3>
      <p>Descrição do Video</p>
      <div className="videofooter__music">
        <MusicNoteIcon className="videofooter__icon"/>
        <div className="videofootermusic__text">
        <p>Título da música</p>
        </div>
      </div>
      <img
      className="videofooter__record"
      alt="imagem de um vinil girando" 
      src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      />
    </div>
  );
}

export default VideoFooter;
