import {Membership, Visit} from "../components/memberships/models";
import MembershipService from "./memberships";


test('store return entry list', async () => {
    const store = new MembershipService()
    const expectedMemberships = [
        {
            id: 1,
            title: "Месяц 10 занятий",
            groups: [
                "Dinamo",
                "ЦСК"
            ],
            price: 1300,
            totalVisits: 10,
            remainVisits: 4,
            validFrom: "2021-04-21",
            validUntil: "2021-05-20",
            visits: [
                {
                    date: "2021-04-21",
                    group: "Dinamo",
                    state: "Был",
                } as Visit
            ]
        } as Membership,
    ]
    const memberships = await store.active()

    expect(memberships).toStrictEqual(expectedMemberships)
});
