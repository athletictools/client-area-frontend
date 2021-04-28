import {
    IonAvatar,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
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
import React, {useEffect, useState} from "react";
import ActiveMemberships from "../components/memberships/ActiveMemberships";
import {logOut} from "ionicons/icons";
import User from "../auth/models";
import {Membership} from "../components/memberships/models";
import MembershipService from "../services/memberships";

interface HomePageProps {
    setUser: (user: User | null) => void;
    membershipService: MembershipService;
}


const HomePage: React.FC<HomePageProps> = ({setUser, membershipService}) => {
    const [memberships, setMemberships] = useState([] as Membership[])

    useEffect(() => {
        async function loadData() {
            setMemberships(await membershipService.active());
        }

        loadData()
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Личный кабинет</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => {
                            setUser(null)
                        }}>
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

                <ActiveMemberships memberships={memberships}/>

            </IonContent>
        </IonPage>
    );
};


export default HomePage;
