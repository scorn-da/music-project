import React, { useState } from 'react';
import { ITrack } from '../../../types/track';
import MainLayout from '../../../layouts/MainLayout';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useInput } from '../../../hooks/useInput';

const Index = ({ serverTrack }) => {
  const router = useRouter();
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const username = useInput('');
  const commentText = useInput('');

  const addComment = async () => {
    try {
      const res = await axios.post('http://localhost:5000/tracks/comment', {
        username: username.value,
        text: commentText.value,
        trackId: track._id
      });
      setTrack({...track, comments: [...track.comments, res.data]})
    } catch (e) {
      throw new Error(e.message);
    }
  }

  return (
    <MainLayout
      title={track.artist + ' — '+ track.name + ' — Музыкальная площадка'}
      keywords={'Музыка, треки, ' + track.artist + ', ' + track.name}
    >
      <Button
        variant='outlined'
        onClick={() => router.push('/tracks')}
        style={{fontSize: 32}}
      >
        К списку
      </Button>
      <Grid container style={{margin: '20px 0'}}>
        <img src={`http://localhost:5000/${track.picture}`} alt={track.name} width={200} height={200} />
        <div style={{margin: 30}}>
          <h1>Название: {track.name}</h1>
          <h2>Исполнитель: {track.artist}</h2>
          <span>Кол-во прослушиваний: {track.listened}</span>
        </div>
      </Grid>
      <h2>Текст песни</h2>
      <p>{track.text}</p>
      <Grid container>
        <h2>Комментарии</h2>
        <TextField
          label='Ваше имя'
          fullWidth
          {...username}
        />
        <TextField
          label='Комментарий'
          fullWidth
          multiline
          {...commentText}
          rows={4}
        />
        <Button onClick={addComment}>
          Отправить
        </Button>
      </Grid>
      {
        track.comments &&
          <ul>
            {track.comments?.map((comment) => {
              return (<li key={comment._id} style={{display: 'flex', flexFlow: 'column'}}>
                <strong>Автор: {comment.username}</strong>
                <i>{comment.text}</i>
              </li>);
            })}
          </ul>
      }
    </MainLayout>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await axios.get('http://localhost:5000/tracks/' + params.id);

  return {
    props: {
      serverTrack: res.data,
    }
  };
}