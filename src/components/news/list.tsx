import {IonAvatar, IonContent, IonItem, IonLabel, IonList} from "@ionic/react";
import {useEffect, useState} from "react";
import {Entry} from "./models";
import {NewsStore} from "./store";

interface EntryItemProps {
    entry: Entry;
}

const News: React.FC = () => {
    const [news, setNews] = useState([] as Entry[])
    useEffect( () => {
        async function loadNews() {
            setNews(await new NewsStore().list());
        }
        loadNews()
    }, [])

    return (
        <IonList>
            {news.map(entry => EntryItem({entry}))}
        </IonList>
    );
};


const EntryItem: React.FC<EntryItemProps> = ({entry}) => {
    return (
        <IonItem routerLink={`/news/${entry.id}`}>
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

export default News;
