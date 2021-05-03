import React, {useEffect, useState} from "react";
import {Membership, Visit} from "./models";
import MembershipCard from "./MembershipCard";
import MembershipService from "../../services/memberships";
import {IonButton, IonModal} from "@ionic/react";
import VisitsCard from "./VisitsCard";

interface ActiveMembershipsProps {
    memberships: Membership[];

}
const ActiveMemberships: React.FC<{ memberships: Membership[]; }> = ({memberships}) => {
    const [visitsToShow, setVisitsToShow] = useState([] as Visit[])

    return (
        <div>
            {memberships.map(membership => MembershipCard({
                membership: membership,
                showVisits: (membership: Membership) => {
                    setVisitsToShow(membership.visits)
                }
            }))}

            <IonModal isOpen={visitsToShow.length !== 0}>
                <VisitsCard visits={visitsToShow}/>
                <IonButton onClick={() => setVisitsToShow([])}>Закрыть</IonButton>
            </IonModal>

        </div>
    )
};

export default ActiveMemberships;
