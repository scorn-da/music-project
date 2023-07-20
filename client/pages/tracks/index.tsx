import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import TrackList from '../../components/TrackList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchTracks, searchTracks } from '../../store/action-creators/track';
import { useDispatch } from 'react-redux';

const Index = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector(state => state.tracks);
  const [ query, setQuery ] = useState<string>('');
  const [ timer, setTimer ] = useState<NodeJS.Timeout>(null);
  const dispatch = useDispatch() as NextThunkDispatch;

  const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(async () => {
        await dispatch(await searchTracks(value));
      }, 500)
    )
  };

  if (error) {
    return (<MainLayout>
      <h1>{error}</h1>
    </MainLayout>)
  }

  return (
    <MainLayout title={'Список треков — музыкальная платформа'}>
      <Grid container justifyContent='center'>
        <Card style={{width: '900px'}}>
          <Box p={3}>
            <Grid container justifyContent='space-between'>
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TextField
            fullWidth
            value={query}
            onChange={search}
          />
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(await fetchTracks());
  return {
    props: {},
  };
});