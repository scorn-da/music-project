import React, { useState } from 'react';
import MainLayout from '../../../layouts/MainLayout';
import StepWrapper from '../../../components/StepWrapper';
import { Button, Grid, TextField } from '@mui/material';
import FileUpload from '../../../components/FileUpload';

const Index = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const back = () => {
      setActiveStep(prev => prev - 1);
  };
  const next = () => {
    if (activeStep !== 2) {
      setActiveStep(prev => prev + 1);
    }
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 &&
          <Grid container direction='column' style={{padding: 20}}>
            <TextField label='Название трека' style={{ marginTop: 10}} />
            <TextField label='Имя исполнителя' style={{ marginTop: 10}} />
            <TextField
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
        <Button disabled={activeStep === 2} onClick={next}>Далее</Button>
      </Grid>
    </MainLayout>
  );
};

export default Index;