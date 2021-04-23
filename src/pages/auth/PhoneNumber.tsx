import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonImg,
    IonInput,
    IonLabel,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from "react";
import "./Auth.css"


const PhoneNumberInput: React.FC = () => {
    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar>
                    <IonTitle>ДФШ Чемпион</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonImg src="https://via.placeholder.com/150x50" />
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol offset="1" size="10">
                            <IonInput inputmode="tel" placeholder="Введите номер телефона"/>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol offset="1" size="10">
                            <IonButton expand="full">Войти</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};


export default PhoneNumberInput;
