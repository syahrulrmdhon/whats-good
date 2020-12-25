import React from "react";
import {
  IonList,
  IonItem,
  IonItemGroup,
  IonItemDivider,
  IonAvatar,
  IonRippleEffect,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import { cameraOutline, pencilSharp } from "ionicons/icons";

const StatusContainer: React.FC = ({}) => {
  const dataListStatus = [
    {
      image: "https://source.unsplash.com/VDmh0kB1244",
      time: "7:08 PM",
      name: "Indah Puji",
    },
    {
      image: "https://source.unsplash.com/IlPwZyz-Pl0",
      time: "05:26 PM",
      name: "Tania SMA7",
    },
    {
      image: "https://source.unsplash.com/BN2VEGCf140",
      time: "03:12 PM",
      name: "Dandi Aprianta",
    },
    {
      image: "https://source.unsplash.com/Hz_jrBmN4rA",
      time: "01:57 PM",
      name: "Pak Marsono",
    },
    {
      image: "https://source.unsplash.com/Iu3PolhJ0zA",
      time: "01:12 PM",
      name: "Kang Amir",
    },
    {
      image: "https://source.unsplash.com/Haa4wzrIujw",
      time: "09:12 AM",
      name: "Tante Lidya",
    },
  ];
  return (
    <React.Fragment>
      <IonList>
        <IonItem>
          <IonAvatar slot="start">
            <img
              src="https://source.unsplash.com/jagYILIMvxw"
              alt=""
              className="header-image"
            />
            <IonRippleEffect />
          </IonAvatar>
          <IonLabel>
            <h2 className="text-height">
              <strong>My Status</strong>
            </h2>
            <p className="text-height">Tap to add Status</p>
          </IonLabel>
        </IonItem>
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Recent Updates</IonLabel>
          </IonItemDivider>
          {dataListStatus &&
            dataListStatus.length > 0 &&
            dataListStatus.map((item) => (
              <IonItem>
                <IonAvatar slot="start">
                  <img src={item.image} alt="" className="header-image" />
                  <IonRippleEffect />
                </IonAvatar>
                <IonLabel>
                  <h2 className="text-height">
                    <strong>{item.name}</strong>
                  </h2>
                  <p className="text-height">{item.time}</p>
                </IonLabel>
              </IonItem>
            ))}
        </IonItemGroup>
      </IonList>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton color="primary">
          <IonIcon icon={cameraOutline} />
        </IonFabButton>
      </IonFab>
    </React.Fragment>
  );
};

export default StatusContainer;
