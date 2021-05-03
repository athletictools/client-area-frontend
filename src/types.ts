
export interface HttpClient {
    get(input: string): Promise<Response>;
    post(input: string, body: object): Promise<Response>;
}
