import React from 'react';
import { Container } from '@mui/material';
import Navbar from '../components/Navbar';
import Player from '../components/Player';
import Head  from 'next/head';

interface MainLayoutProps {
  description?: string;
  keywords?: string;
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title,
  description,
  keywords
}) => {
  return (
    <>
      <Head>
        <title>
          {title || 'Музыкальная платформа'}
        </title>
        <meta name='description' content={'Музыкальная платформа. Треки на любой вкус. ' + description} />
        <meta name='robots' content='index, follow' />
        <meta name='keywords' content={keywords ?? 'Музыка, треки, исполнители'} />
        <meta name='viewport' media='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <Container style={{margin: '90px auto'}}>
        {children}
      </Container>
      <Player />
    </>
  );
};

export default MainLayout;