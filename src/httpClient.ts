import {HttpClient} from "./types";

export default class FetchHttpClient implements HttpClient {
    get(url: string): Promise<Response> {
        return fetch(url);
    }

    post(url: string, body: object): Promise<Response> {
        const req = {
            method: "POST",
            body: JSON.stringify(body),
        };
        return fetch(url, req)
    }
}
