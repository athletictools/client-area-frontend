import React, {useEffect, useState} from "react";
import {Entry} from "../../components/news/models";
import {NewsStore} from "../../services/news";
import {
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonContent,
    IonHeader,
    IonImg,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {RouteComponentProps} from "react-router";

interface EntryDetailPageProps extends RouteComponentProps<{
    id: string;
}> {
}

const NewsDetailPage: React.FC<EntryDetailPageProps> = ({match}) => {
    const entryId = +match.params.id
    const [entry, setEntry] = useState({} as Entry)

    useEffect(() => {
        async function loadEntry() {
            setEntry(await new NewsStore().detail(entryId));
        }

        loadEntry()
    }, [entryId,])

    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="home" text="Назад"/>
                    </IonButtons>
                    <IonTitle>Новости</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <EntryCard entry={entry}/>
            </IonContent>
        </IonPage>
    );
};


interface EntryItemProps {
    entry: Entry;
}


const EntryCard: React.FC<EntryItemProps> = ({entry}) => {
    return (
        <IonCard>
            <IonImg src="https://via.placeholder.com/150x50"/>
            <IonCardHeader>
                <IonCardSubtitle>{entry.title}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                {entry.content}
            </IonCardContent>
        </IonCard>
    )
};

export default NewsDetailPage;
