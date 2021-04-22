import React from "react";
import {IonButton, IonCard, IonCardContent, IonItem, IonLabel, IonList, IonNote} from "@ionic/react";
import {Membership} from "./models";

interface MembershipCardProps {
    membership: Membership;
    showVisits: (membership: Membership) => void;
}

const MembershipCard: React.FC<MembershipCardProps> = ({membership, showVisits}) => {
    return (
        <IonCard key={membership.id}>
            <IonCardContent>
                <IonList>
                    <IonItem>
                        <IonLabel>{membership.title}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Действует в группах</IonLabel>
                        <IonNote slot="end">1300р</IonNote>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Стоимость</IonLabel>
                        <IonNote slot="end">{membership.price}р</IonNote>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Остаток посещений</IonLabel>
                        <IonNote slot="end">{membership.remainVisits} из {membership.totalVisits}</IonNote>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Срок действия</IonLabel>
                        <IonNote slot="end">с {membership.validFrom} до {membership.validUntil}</IonNote>
                    </IonItem>
                </IonList>

                <IonButton expand="block" onClick={() => {
                    showVisits(membership)
                }}>
                    История посещений
                </IonButton>
            </IonCardContent>
        </IonCard>
    )
};

export default MembershipCard;
