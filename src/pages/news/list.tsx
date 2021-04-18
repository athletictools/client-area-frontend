import React, {useEffect, useState} from "react";
import {
    IonAvatar,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {Entry} from "../../components/news/models";
import {NewsStore} from "../../components/news/store";

const NewsListPage: React.FC = () => {
    const [news, setNews] = useState([] as Entry[])
    useEffect( () => {
        async function loadNews() {
            setNews(await new NewsStore().list());
        }
        loadNews()
    }, [])

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
                <IonList>
                    {news.map(entry => EntryItem({entry}))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};


interface EntryItemProps {
    entry: Entry;
}

const EntryItem: React.FC<EntryItemProps> = ({entry}) => {
    return (
        <IonItem key={entry.id} routerLink={`/news/${entry.id}`}>
            <IonAvatar slot={'start'}>
                <img src="https://via.placeholder.com/150" alt=""/>
            </IonAvatar>
            <IonLabel>
                <h2>{entry.title}</h2>
                <h3></h3>
                <p></p>
            </IonLabel>
        </IonItem>
    )
};
export default NewsListPage;
