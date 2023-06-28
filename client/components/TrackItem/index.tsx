import React from 'react';
import { ITrack } from '../../types/track';
import { Card, Grid, IconButton } from '@mui/material';
import styles from './TrackItem.module.scss';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import Image from 'next/image'
import { useRouter } from 'next/router';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();

  return (
    <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {!active
          ? <PlayArrow/>
          : <Pause />
        }
      </IconButton>
      <Image src={track.picture} alt={track.name} width={70} height={70} />
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