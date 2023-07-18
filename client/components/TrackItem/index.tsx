import React from 'react';
import { ITrack } from '../../types/track';
import { Card, Grid, IconButton } from '@mui/material';
import styles from './TrackItem.module.scss';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useActions } from '../../hooks/useActions';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();
  const { playTrack, pauseTrack, setActiveTrack } = useActions();

  const play = (e) => {
    e.stopPropagation();
    setActiveTrack(track);
    playTrack();
  }

  return (
    <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
      <IconButton onClick={play}>
        {!active
          ? <PlayArrow/>
          : <Pause />
        }
      </IconButton>
      <img src={track.picture} alt={track.name} width={70} height={70} />
      <Grid container direction='column' className={styles.trackInfo}>
        <strong>{track.name}</strong>
        <i>{track.artist}</i>
      </Grid>
      {active && <p>03:24 / 04:12</p>}
      <IconButton onClick={(e) => e.stopPropagation()} className={styles.deleteBtn}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;