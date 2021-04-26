import store from "../store";

store.subscribe(() => {
    const user = store.getState().user;
    console.log(user);
});


export class AuthStore {
    private baseUrl = 'http://localhost:3000';

    private async fetch(url: string, init?: RequestInit): Promise<Response> {
        return fetch(this.baseUrl + url, init)
    }

    async signIn(phoneNo: string, validationCode: string): Promise<Response> {
        const req = {
            method: "POST",
            body: JSON.stringify({phoneNo, validationCode}),
        };
        return this.fetch('/login', req).then(res => res.json())
    }

    async signOut() {
        return this.fetch('/logout', {method: "POST"}).then(res => res.json())
    }
}
