import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { ITrack } from '../../types/track';
import TrackList from '../../components/TrackList';

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', listened: 0, picture: '', audio: '', text: '', comments: []},
    {_id: '2', name: 'Трек 2', artist: 'Исполнитель 2', listened: 0, picture: '', audio: '', text: '', comments: []},
    {_id: '3', name: 'Трек 3', artist: 'Исполнитель 3', listened: 0, picture: '', audio: '', text: '', comments: []},
  ];

  return (
    <MainLayout>
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
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;