import React from "react";
import {
  IonList,
  IonItem,
  IonAvatar,
  IonRippleEffect,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import { chatbubblesOutline } from "ionicons/icons";

const ChatsContainer: React.FC = () => {
  const dataListChat = [
    {
      image: "https://source.unsplash.com/VDmh0kB1244",
      time: "7:08 PM",
      snippet: "hahaha iyaa....",
      name: "Indah Puji",
    },
    {
      image: "https://source.unsplash.com/IlPwZyz-Pl0",
      time: "05:26 PM",
      snippet: "hahaha aku ketawa 🤣🤣",
      name: "Tania SMA7",
    },
    {
      image: "https://source.unsplash.com/BN2VEGCf140",
      time: "03:12 PM",
      snippet: "Oke, siap ntar gue kesana",
      name: "Dandi Aprianta",
    },
    {
      image: "https://source.unsplash.com/Hz_jrBmN4rA",
      time: "01:57 PM",
      snippet: "Noted pak.",
      name: "Pak Marsono",
    },
    {
      image: "https://source.unsplash.com/Iu3PolhJ0zA",
      time: "01:12 PM",
      snippet: "Siapp",
      name: "Kang Amir"
    },
    {
      image: "https://source.unsplash.com/Haa4wzrIujw",
      time: "09:12 AM",
      snippet: "Jangan lupa titipan tante..",
      name: "Tante Lidya"
    },
    {
      image: "https://source.unsplash.com/bIV_ibBFPMQ",
      time: "08:45 AM",
      snippet: "Oke, ntar siang ya....",
      name: "Intan Permata",
    },
    {
      image: "https://source.unsplash.com/dZ6SQ0d-IVc",
      time: "Yesterday",
      snippet: "Baik, Kami akan proses....",
      name: "+628112112121",
    },
  ]; 

  return (
    <React.Fragment>
      {dataListChat &&
        dataListChat.length > 0 &&
        dataListChat.map((item) => (
          <IonList>
            <IonItem>
              <IonAvatar slot="start">
                <img src={item.image} alt="" className="header-image" />
                <IonRippleEffect />
              </IonAvatar>
              <IonLabel>
                <h2 className="text-height">
                  <strong>{item.name}</strong>
                  <p className="ion-float-end">{item.time}</p>
                </h2>
                <p className="text-height">{item.snippet}</p>
              </IonLabel>
            </IonItem>
          </IonList>
        ))}

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton color="primary">
          <IonIcon icon={chatbubblesOutline} />
        </IonFabButton>
      </IonFab>
    </React.Fragment>
  );
};

export default ChatsContainer;
