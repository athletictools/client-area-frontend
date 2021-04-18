import React, {useEffect, useState} from "react";
import {Entry} from "../../components/news/models";
import {NewsStore} from "../../components/news/store";
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {RouteComponentProps} from "react-router";

interface EntryDetailPageProps extends RouteComponentProps<{
    id: string;
}> {}

const NewsDetailPage: React.FC<EntryDetailPageProps> = ({match}) => {
    const entryId = +match.params.id
    const [entry, setEntry] = useState({} as Entry)

    useEffect( () => {
        async function loadEntry() {
            setEntry(await new NewsStore().detail(entryId));
        }
        loadEntry()
    }, [entryId, ])

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

export default NewsDetailPage;
