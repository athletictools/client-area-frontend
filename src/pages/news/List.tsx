import React, {useEffect, useState} from "react";
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonImg,
    IonPage,
    IonRouterLink,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {Entry} from "../../components/news/models";
import {NewsStore} from "../../components/news/store";

const NewsListPage: React.FC = () => {
    const [news, setNews] = useState([] as Entry[])
    useEffect(() => {
        async function loadData() {
            setNews(await new NewsStore().list());
        }

        loadData()
    }, [])

    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar>
                    <IonTitle>Новости</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {news.map(entry => EntryCard({entry}))}
            </IonContent>
        </IonPage>
    );
};


interface EntryItemProps {
    entry: Entry;
}

const EntryCard: React.FC<EntryItemProps> = ({entry}) => {
    return (
        <IonRouterLink routerLink={`/news/${entry.id}`} key={entry.id}>
            <IonCard>
                <IonImg src="https://via.placeholder.com/150x50"/>
                <IonCardHeader>
                    <IonCardTitle>{entry.title}</IonCardTitle>
                </IonCardHeader>
            </IonCard>
        </IonRouterLink>
    )
};


export default NewsListPage;
