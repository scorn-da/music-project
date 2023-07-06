import React from 'react';
import { IconButton } from '@mui/material';
import { Pause, PlayArrow } from '@mui/icons-material';
import styles from './Player.module.scss';

interface PlayerProps {

}

const Player = () => {
  const active = false;

  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {!active
          ? <PlayArrow/>
          : <Pause />
        }
      </IconButton>
    </div>
  );
};

export default Player;