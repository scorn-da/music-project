import React from 'react';
import { Grid, IconButton } from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import styles from './Player.module.scss';
import { ITrack } from '../../types/track';
import TrackProgress from '../TrackProgress';

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
      <Grid container direction='column' style={{width: 200, margin: '0 20px'}}>
        <strong>{track.name}</strong>
        <i>{track.artist}</i>
      </Grid>
      <TrackProgress current={0} end={100} onChange={() => {}} />
      <VolumeUp style={{marginLeft: 'auto'}} />
      <TrackProgress current={0} end={100} onChange={() => {}} />
    </div>
  );
};

export default Player;