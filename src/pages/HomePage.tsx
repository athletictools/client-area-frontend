import {
    IonAvatar,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent, IonCardHeader, IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem, IonItemDivider, IonItemGroup,
    IonLabel,
    IonList, IonModal,
    IonNote,
    IonPage,
    IonTitle,
    IonToolbar, useIonModal
} from '@ionic/react';
import './HomePage.css';
import React, {useState} from "react";

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

                <IonTitle>Активные абонементы</IonTitle>

                <AbonementCard/>

            </IonContent>
        </IonPage>
    );
};

const AbonementCard: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <IonCard>
            <IonCardContent>
                <IonList>
                    <IonItem>
                        <IonLabel>Месяц 12 занятий</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Действует в группах</IonLabel>
                        <IonNote slot="end">1300р</IonNote>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Стоимость</IonLabel>
                        <IonNote slot="end">1800р</IonNote>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Остаток посещений</IonLabel>
                        <IonNote slot="end">10 из 12</IonNote>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Срок действия</IonLabel>
                        <IonNote slot="end">с 11.02.2020 до 12.03.2020</IonNote>
                    </IonItem>
                </IonList>

                <IonModal isOpen={showModal} cssClass='my-custom-class'>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>Списания с абонемента</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonList>
                                <IonItemGroup>
                                    <IonItemDivider color="secondary">
                                        <IonLabel>12.03.2020</IonLabel>
                                    </IonItemDivider>

                                    <IonItem>
                                        <IonLabel>Был</IonLabel>
                                    </IonItem>
                                    <IonItem lines="none">
                                        <IonLabel>Динамо 2008-2009 г.р.(1) /тр. Балезин ЛЕТО</IonLabel>
                                    </IonItem>
                                </IonItemGroup>
                                <IonItemGroup>
                                    <IonItemDivider color="secondary">
                                        <IonLabel>11.03.2020</IonLabel>
                                    </IonItemDivider>

                                    <IonItem>
                                        <IonLabel>Был</IonLabel>
                                    </IonItem>
                                    <IonItem lines="none">
                                        <IonLabel>Динамо 2008-2009 г.р.(1) /тр. Балезин ЛЕТО</IonLabel>
                                    </IonItem>
                                </IonItemGroup>
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                    <IonButton onClick={() => setShowModal(false)}>Закрыть</IonButton>
                </IonModal>

                <IonButton expand="block" onClick={() => {
                    setShowModal(true)
                }}>
                    История посещений
                </IonButton>
            </IonCardContent>
        </IonCard>
    )
}

export default HomePage;
