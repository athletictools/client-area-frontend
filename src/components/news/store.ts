import {Entry} from "./models";


export class NewsStore {
    private baseUrl = 'http://localhost:3000';

    private async fetch(url: string, init?: RequestInit): Promise<Response> {
        return fetch(this.baseUrl + url)
    }

    async list(): Promise<Entry[]> {
        return this.fetch('/news').then(res => res.json())
    }

    async detail(id: number): Promise<Entry> {
        return this.fetch(`/news/${id}`).then(res => res.json())
    }
}
