import React, { useState } from 'react';
import { ITrack } from '../../../types/track';
import MainLayout from '../../../layouts/MainLayout';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import axios from 'axios';

const Index = ({ serverTrack }) => {
  const router = useRouter();
  const [track, setTrack] = useState(serverTrack);

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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await axios.get('http://localhost:5000/tracks/' + params.id);

  return {
    props: {
      serverTrack: res.data,
    }
  };
}