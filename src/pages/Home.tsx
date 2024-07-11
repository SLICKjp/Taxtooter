// src/pages/HomePage.tsx

import React, { useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonButton } from '@ionic/react';
import {Sidebar} from '../components/Sidebar';

const Home: React.FC = () => {


  return (
    <>
    <IonPage>
      <Sidebar/>
    </IonPage>
    </>
  );
};

export default Home;
