import {Entry} from "./models";


export class NewsStore {
    baseUrl = 'http://localhost:3000/news';

    private async fetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
        return fetch(this.baseUrl)
    }

    async list(): Promise<Entry[]> {
        return this.fetch('').then(res => res.json())
    }
}
