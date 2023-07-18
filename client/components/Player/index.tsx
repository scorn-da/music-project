import React, { useEffect } from 'react';
import { Grid, IconButton } from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import styles from './Player.module.scss';
import TrackProgress from '../TrackProgress';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

interface PlayerProps {
}

let audio;

const Player = () => {
  const { pause, active, duration, volume, currentTime } = useTypedSelector(state => state.player);
  const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack } = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio;
    } else {
      setAudio();
    }
  }, [active])

  const setAudio = () => {
    if (active) {
      audio.src = 'http://localhost:5000/' + active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      }
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      }
      audio.play();
    }
  }

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

  const changeCurrentTime = ((e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime =  Number(e.target.value);
  })

  if (!active) {
    return null;
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {pause
          ? <PlayArrow/>
          : <Pause />
        }
      </IconButton>
      <img src={`http://localhost:5000/${active?.picture}`} alt={`${active?.artist} — ${active?.name}`} style={{width: 40, height: 40}} />
      <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
        <strong>{active?.name}</strong>
        <i>{active?.artist}</i>
      </Grid>
      <TrackProgress current={currentTime} end={duration} onChange={changeCurrentTime} />
      <VolumeUp style={{marginLeft: 'auto'}} />
      <TrackProgress current={volume} end={100} onChange={changeVolume} />
    </div>
  );
};

export default Player;