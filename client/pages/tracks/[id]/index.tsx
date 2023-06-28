import React from 'react';
import { ITrack } from '../../../types/track';
import MainLayout from '../../../layouts/MainLayout';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Index = () => {
  const track: ITrack = {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', listened: 0, picture: '', audio: '', text: '', comments: []};
  const router = useRouter();

  return (
    <MainLayout>
      <Button
        variant='outlined'
        onClick={() => router.push('/tracks')}
        style={{fontSize: 32}}
      >
        К списку
      </Button>
      <Grid container style={{margin: '20px 0'}}>
        <Image src={track.picture} alt={track.name} width={200} height={200} />
        <div style={{margin: 30}}>
          <h1>Название {track.name}</h1>
          <h2>Исполнитель {track.artist}</h2>
          <span>Кол-во прослушиваний {track.listened}</span>
        </div>
      </Grid>
      <h2>Текст песни</h2>
      <p>{track.text}</p>
      <Grid container>
        <h2>Комментарии</h2>
        <TextField
          label='Ваше имя'
          fullWidth
        />
        <TextField
          label='Комментарий'
          fullWidth
          multiline
          rows={4}
        />
        <Button>
          Отправить
        </Button>
      </Grid>
      <div>
        {track.comments.map((comment) => {
          return (<p key={comment._id}>
            <strong>Автор: {comment.username}</strong>
            <i>{comment.text}</i>
          </p>);
        })}
      </div>
    </MainLayout>
  );
};

export default Index;