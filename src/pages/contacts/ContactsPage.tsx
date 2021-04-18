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

const LogoUrl = 'https://s94vla.storage.yandex.net/rdisk/42fbfa113d8053b8f00325b90d25a629e83ed45f7265a4f823dbf6ae462fb885/607c3b98/24jckCfIY3PagHSP7qbglz68tdBsIJ2Zn-Vgsr3qSFlVUPAMBxMwcY8Q3cBptPjB11DcUGx3E2Zgah_9XXbWrQ==?uid=0&filename=b7YosPbyXGA.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&fsize=30197&hid=be84860f182651f4e0d13b25c0e31d3a&media_type=image&tknv=v2&etag=dd3b7557b5a74885e72eff0532739d9b&rtoken=oEfPP922sH1m&force_default=no&ycrid=na-f0faaa198b0747003a68ca8e415ee99d-downloader21h&ts=5c03fa4541600&s=64896664ddd72a194a890e15e7d8fefaa3df28da4cc2ef769cb883f9f75000e2&pb=U2FsdGVkX19ni5khTuXUhipKo5bOEIuJ9fiDQ0DxWhJHWAy0zxT3qMevSIDJtkKk7wtLBphWm1UoBn3R4q5Fc7fGNA0nB0OnzKr-e9ZoMyc';
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
