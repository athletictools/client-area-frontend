import React from "react";
import {Visit} from "./models";
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonItemDivider,
    IonItemGroup,
    IonLabel,
    IonList
} from "@ionic/react";


const VisitsCard: React.FC<{ visits: Visit[]; }> = ({visits}) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Списания с абонемента</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonList>
                    {visits.map(visit => VisitItem({visit}))}
                </IonList>
            </IonCardContent>
        </IonCard>
    )
};

const VisitItem: React.FC<{ visit: Visit }> = ({visit}) => {
    return (
        <IonItemGroup key={visit.id}>
            <IonItemDivider color="secondary">
                <IonLabel>{visit.date}</IonLabel>
            </IonItemDivider>

            <IonItem>
                <IonLabel>{visit.state}</IonLabel>
            </IonItem>

            <IonItem lines="none">
                <IonLabel>{visit.group}</IonLabel>
            </IonItem>
        </IonItemGroup>
    )
};

export default VisitsCard;
