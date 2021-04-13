import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import News from "../components/news/list";
import {Entry} from "../components/news/models";
import React, {useEffect, useState} from "react";
import {NewsStore} from "../components/news/store";


const NewsListPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar>
                    <IonButtons>
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Новости</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <News/>
            </IonContent>
        </IonPage>
    );
};

interface EntryDetailProps {
    id: number;
}

export const NewsDetailPage: React.FC<EntryDetailProps> = ({id}) => {
    const [entry, setEntry] = useState({} as Entry)
    useEffect( () => {
        async function loadEntry() {
            setEntry(await new NewsStore().detail(id));
        }
        loadEntry()
    }, [id, ])

    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar>
                    <IonButtons>
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>{entry.title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {entry.content}
            </IonContent>
        </IonPage>
    );
};

export default NewsListPage;
