// src/components/Sidebar.tsx

import React from "react";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonMenuToggle,
  IonButtons,
  IonPage,
  IonMenuButton,
} from "@ionic/react";
import {
  menuOutline,
  homeOutline,
  personOutline,
  settingsOutline,
} from "ionicons/icons";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonIcon icon={homeOutline} slot="start" />
            Home
          </IonItem>
          <IonItem>
            <IonIcon icon={personOutline} slot="start" />
            Profile
          </IonItem>
          <IonItem>
            <IonIcon icon={settingsOutline} slot="start" />
            Settings
          </IonItem>
        </IonList>
        </IonContent>
      </IonMenu>

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Taxtooter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      
      
      </IonContent>
    </>
  );
};
