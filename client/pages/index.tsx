import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Index = () => {
  return (
    <>
      <MainLayout>
        <div className='center'>
          <h1>Добро пожаловать</h1>
          <h3>Здесь собраны лучшие треки</h3>
        </div>
      </MainLayout>

      <style jsx>
        {`
          .center {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            margin-top: 150px;
          }
        `}
      </style>
    </>
  );
};

export default Index;