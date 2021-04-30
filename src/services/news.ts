import {Entry} from "../components/news/models";
import {HttpClient} from "../types";


export default class NewsService {
    private readonly baseUrl: string;
    private readonly http: HttpClient;

    constructor(http: HttpClient, baseUrl: string) {
        this.http = http;
        this.baseUrl = baseUrl;
    }

    async list(): Promise<Entry[]> {
        const res = await this.http.get(this.baseUrl + '/news');
        return res.json();
    }

    async detail(id: number): Promise<Entry> {
        const res = await this.http.get(this.baseUrl + `/news/${id}`);
        return res.json();
    }
}
