import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonImg,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './ContactsPage.css';
import React from "react";

const LogoUrl = 'https://via.placeholder.com/150x150';


const ContactsPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Контакты</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonImg src={LogoUrl}/>
                    <IonCardHeader>
                        <IonCardSubtitle>Мы не для всех, мы для тех, кто по-настоящему любит футбол!</IonCardSubtitle>
                        <IonCardTitle>Футбольный клуб "Вектор"</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        Достижения:
                        <ul>
                            <li>Дата основания: 2017</li>
                            <li>Чемпион ЛФЛ Кировской области - 2017</li>
                            <li>Серебряный призёр Чемпионата ЛФЛ Кировской области-2018</li>
                            <li>Вектор вошёл в ТОП-5 лучших команд ЛФЛ России на турнире в городе Сочи-2018</li>
                            <li>Обладатель Супер-кубка ЛФЛ Кировской области-2019</li>
                            <li>Победитель Чемпиона Кировской области 8х8-2019</li>
                            <li>Постоянный участник Чемпионатов России</li>
                            <li>Бронзовый призер Чемпионата ФЛК Кировской области-2020</li>
                            <li>Серебряный призер Чемпиона Кировской области 11х11 сезона 2020 года</li>
                        </ul>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default ContactsPage;
