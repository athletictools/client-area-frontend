import {Entry} from "../components/news/models";


export class NewsStore {
    private baseUrl = 'http://localhost:3000';

    private async fetch(url: string, init?: RequestInit): Promise<Response> {
        return await fetch(this.baseUrl + url)
    }

    async list(): Promise<Entry[]> {
        const res = await this.fetch('/news');
        return await res.json();
    }

    async detail(id: number): Promise<Entry> {
        const res = await this.fetch(`/news/${id}`);
        return await res.json();
    }
}
