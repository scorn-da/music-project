import React, { useState } from 'react';
import MainLayout from '../../../layouts/MainLayout';
import StepWrapper from '../../../components/StepWrapper';
import { Button, Grid, TextField } from '@mui/material';
import FileUpload from '../../../components/FileUpload';
import { useInput } from '../../../hooks/useInput';
import axios from 'axios';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');

  const back = () => {
      setActiveStep(prev => prev - 1);
  };
  const next = () => {
    if (activeStep !== 2) {
      setActiveStep(prev => prev + 1);
    } else {
      const formData = new FormData();
      formData.append('name', name.value);
      formData.append('artist', artist.value);
      formData.append('text', text.value);
      formData.append('picture', picture);
      formData.append('audio', audio);
      axios.post('http://localhost:5000/tracks/', formData)
        .then(res => router.push('/tracks'))
        .catch((e) => {
          throw new Error(e.message);
        })
    }
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 &&
          <Grid container direction='column' style={{padding: 20}}>
            <TextField
              {...name}
              label='Название трека'
              style={{ marginTop: 10}}
            />
            <TextField
              {...artist}
              label='Имя исполнителя'
              style={{ marginTop: 10}}
            />
            <TextField
              {...text}
              label='Слова к треку'
              style={{ marginTop: 10}}
              multiline
              rows={3}
            />
          </Grid>
        }
        {activeStep === 1 &&
          <FileUpload
            file={''}
            setFile={setPicture}
            accept='image/*'
          >
            <Button>Загрузить обложку</Button>
          </FileUpload>
        }
        {activeStep === 2 &&
        <FileUpload
          file={''}
          setFile={setAudio}
          accept='audio/*'
        >
          <Button>Загрузить аудио</Button>
        </FileUpload>
        }
      </StepWrapper>
      <Grid container justifyContent='space-between'>
        <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
        <Button onClick={next}>Далее</Button>
      </Grid>
    </MainLayout>
  );
};

export default Index;