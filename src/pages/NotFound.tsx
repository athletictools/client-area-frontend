import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './HomePage.css';
import React from "react";

const PageNotFound: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Страница не найдена</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

            </IonContent>
        </IonPage>
    );
};


export default PageNotFound;
