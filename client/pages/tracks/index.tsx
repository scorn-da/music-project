import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { ITrack } from '../../types/track';
import TrackList from '../../components/TrackList';

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {_id: '1', name: 'Трек 1', artist: 'Исполнитель 1', listened: 0, picture: 'http://localhost:5000/image/06c9c5a3-2ebc-4dbc-b559-47f4eb66b254.webp', audio: 'http://localhost:5000/audio/f7ef3b6a-a0cb-4726-b5f0-492d4e4d28c1.mp3', text: '', comments: []},
    {_id: '2', name: 'Трек 2', artist: 'Исполнитель 2', listened: 0, picture: 'http://localhost:5000/image/dc30e1a1-f9b6-4d1e-a7f4-598bccce784a.jpg', audio: 'http://localhost:5000/audio/92a2e46e-5568-4c2b-85a6-a43e005e59c9.mp3', text: '', comments: []},
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