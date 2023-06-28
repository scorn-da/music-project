import React from 'react';
import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material';

interface StepWrapperProps {
  activeStep: number
}

const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите трек']

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          return (
            <Step
              key={index}
              completed={activeStep > index}
            >
              <StepLabel>{step}</StepLabel>
            </Step>
            );
          })
        }
      </Stepper>
      <Grid container justifyContent="center" style={{margin: '70px 0', minHeight: 270}}>
        <Card style={{width: 600}}>
          {children}
        </Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;