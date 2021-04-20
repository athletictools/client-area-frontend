import {
    IonAvatar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonContent,
    IonHeader,
    IonImg, IonItem, IonLabel, IonList, IonNote,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './HomePage.css';
import React from "react";

const HomePage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Личный кабинет</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardContent>
                        <IonList>
                            <IonItem>
                                <IonAvatar slot="start">
                                    <img
                                        src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                                </IonAvatar>
                                <IonLabel>
                                    <h3>Татаринцев Евгений Васильевич</h3>
                                    <p>dolor sit amet</p>
                                </IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Баланс</IonLabel>
                                <IonNote slot="end">1300р</IonNote>
                            </IonItem>
                        </IonList>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default HomePage;
