import {HttpClient} from "./types";

export default class FetchHttpClient implements HttpClient {
    async get(url: string): Promise<Response> {
        return await fetch(url);
    }

    async post(url: string, body: object): Promise<Response> {
        const req = {
            method: "POST",
            body: JSON.stringify(body),
        };
        const res = await fetch(url, req)
        return await res.json();
    }
}
