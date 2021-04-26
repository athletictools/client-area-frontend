import {Membership} from "../components/memberships/models";


class MembershipStore {
    private baseUrl = 'http://localhost:3000';

    private async fetch(url: string, init?: RequestInit): Promise<Response> {
        return fetch(this.baseUrl + url)
    }

    async active(): Promise<Membership[]> {
        return this.fetch('/memberships').then(res => res.json())
    }
}

export default MembershipStore;
