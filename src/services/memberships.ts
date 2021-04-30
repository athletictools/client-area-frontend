import {Membership} from "../components/memberships/models";
import {HttpClient} from "../types";


class MembershipService {
    private readonly baseUrl: string;
    private readonly http: HttpClient;

    constructor(http: HttpClient, baseUrl: string) {
        this.http = http;
        this.baseUrl = baseUrl;
    }

    async active(): Promise<Membership[]> {
        const res = await this.http.get(this.baseUrl + '/memberships');
        return res.json();
    }
}

export default MembershipService;
