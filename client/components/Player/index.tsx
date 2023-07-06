import React from 'react';
import { Grid, IconButton } from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';
import styles from './Player.module.scss';
import { ITrack } from '../../types/track';

interface PlayerProps {

}

const Player = () => {
  const track: ITrack = {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', listened: 0, picture: '', audio: '', text: '', comments: []};
  const active = false;


  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {!active
          ? <PlayArrow/>
          : <Pause />
        }
      </IconButton>
      <Grid container direction='column' className={styles.trackInfo}>
        <strong>{track.name}</strong>
        <i>{track.artist}</i>
      </Grid>
    </div>
  );
};

export default Player;