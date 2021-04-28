import {Membership} from "../components/memberships/models";
import {HttpClient} from "../types";


class MembershipService {
    private readonly baseUrl: string;
    private readonly http: HttpClient;

    constructor(http: HttpClient, baseUrl: string) {
        this.http = http;
        this.baseUrl = baseUrl;
    }

    get activeUrl(): string {
        return this.baseUrl + '/memberships';
    }

    async active(): Promise<Membership[]> {
        const res = await this.http.get(this.activeUrl);
        return await res.json();
    }
}

export default MembershipService;
