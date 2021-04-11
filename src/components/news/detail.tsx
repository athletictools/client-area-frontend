import {IonAvatar, IonItem, IonLabel, IonList} from "@ionic/react";



const EntryDetail: React.FC = () => {
    return (
        <IonList>
            <IonItem routerLink={''}>
                <IonAvatar slot={'start'}>
                    <img src="https://via.placeholder.com/150" alt=""/>
                </IonAvatar>
                <IonLabel>
                    <h2>С 1 мая изменяется расписание</h2>
                    <h3></h3>
                    <p></p>
                </IonLabel>
            </IonItem>
            <IonItem routerLink={''}>
                <IonAvatar slot={'start'}>
                    <img src="https://via.placeholder.com/150" alt=""/>
                </IonAvatar>
                <IonLabel>
                    <h2>Польза плавания после тренировок</h2>
                </IonLabel>
            </IonItem>
        </IonList>
    );
};

export default EntryDetail;
