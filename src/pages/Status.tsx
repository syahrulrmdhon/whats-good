import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import StatusContainer from "../components/StatusContainer"
import './Status.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Status</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <StatusContainer />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
