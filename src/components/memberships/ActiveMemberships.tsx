import React, {useEffect, useState} from "react";
import {Membership, Visit} from "./models";
import MembershipCard from "./MembershipCard";
import MembershipStore from "../../services/memberships";
import {IonButton, IonModal} from "@ionic/react";
import VisitsCard from "./VisitsCard";


const ActiveMemberships: React.FC = () => {
    const [memberships, setMemberships] = useState([] as Membership[])
    const [visitsToShow, setVisitsToShow] = useState([] as Visit[])

    useEffect(() => {
        async function loadData() {
            setMemberships(await new MembershipStore().active());
        }

        loadData()
    }, [])

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
