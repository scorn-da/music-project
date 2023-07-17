import React, { useEffect } from 'react';
import { Grid, IconButton } from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import styles from './Player.module.scss';
import { ITrack } from '../../types/track';
import TrackProgress from '../TrackProgress';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

interface PlayerProps {

}

let audio;

const Player = () => {
  const track: ITrack = {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', listened: 0, picture: 'http://localhost:5000/image/06c9c5a3-2ebc-4dbc-b559-47f4eb66b254.webp', audio: 'http://localhost:5000/audio/f7ef3b6a-a0cb-4726-b5f0-492d4e4d28c1.mp3', text: 'Какой-то текст', comments: []};
  const { pause, active, duration, volume, currentTime } = useTypedSelector(state => state.player);
  const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack } = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio;
      audio.src = track.audio;
      audio.volume = volume / 100;
    }
  }, [])

  const play = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  }

  const changeVolume = ((e: React.ChangeEvent<HTMLInputElement>) => {
    const currentVolume = Number(e.target.value);
    audio.volume = currentVolume / 100;
    setVolume(currentVolume);
  })

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {pause
          ? <PlayArrow/>
          : <Pause />
        }
      </IconButton>
      <img src={track.picture} alt={`${track.artist} — ${track.name}`} style={{width: 40, height: 40}} />
      <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
        <strong>{track.name}</strong>
        <i>{track.artist}</i>
      </Grid>
      <TrackProgress current={0} end={100} onChange={() => {}} />
      <VolumeUp style={{marginLeft: 'auto'}} />
      <TrackProgress current={volume} end={100} onChange={changeVolume} />
    </div>
  );
};

export default Player;