import {
    IonAvatar, IonButton, IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader, IonIcon,
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonPage,
    IonRouterLink,
    IonSlide,
    IonSlides,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './HomePage.css';
import React from "react";
import ActiveMemberships from "../components/memberships/ActiveMemberships";
import {home, logOut} from "ionicons/icons";

const HomePage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Личный кабинет</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={()=>{alert("sign out")}}>
                            <IonIcon icon={logOut}/>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonSlides pager={true} options={{
                    initialSlide: 1,
                    speed: 400
                }}>
                    <IonSlide>
                        <IonRouterLink routerLink={`/news/1`}>
                            <IonCard>
                                <IonImg src="https://via.placeholder.com/650x150"/>
                                <IonCardHeader>
                                    <IonCardTitle>Новая новость 1</IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonRouterLink>
                    </IonSlide>
                    <IonSlide>
                        <IonRouterLink routerLink={`/news/2`}>
                            <IonCard>
                                <IonImg src="https://via.placeholder.com/650x150"/>
                                <IonCardHeader>
                                    <IonCardTitle>Новая новость 2</IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonRouterLink>
                    </IonSlide>
                </IonSlides>
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

                <IonTitle>Активные абонементы</IonTitle>

                <ActiveMemberships/>

            </IonContent>
        </IonPage>
    );
};


export default HomePage;
