import User from "../auth/models";
import {useState} from "react";
import {HttpClient} from "../types";

export const useUser = () => {
    const userKey = 'user';
    const getToken = () => {
        const tokenString = localStorage.getItem(userKey);
        if (tokenString === null) {
            return null
        }
        return JSON.parse(tokenString);
    };

    const [user, setUser] = useState(getToken());

    const saveUser = (user: User | null) => {
        localStorage.setItem(userKey, JSON.stringify(user));
        setUser(user);
    };

    return {
        setUser: saveUser,
        user
    }
};


export class AuthStore {
    private readonly baseUrl: string;
    private readonly http: HttpClient;

    constructor(http: HttpClient, baseUrl: string) {
        this.http = http;
        this.baseUrl = baseUrl;
    }

    async signIn(phoneNo: string, validationCode: string): Promise<User> {
        const req = {
            method: "POST",
            body: JSON.stringify({phoneNo, validationCode}),
        };
        const res = await this.http.post(this.baseUrl + '/login', req);
        return res.json();
    }

    async signOut(): Promise<void> {
        await this.http.post(this.baseUrl + '/logout', {});
    }
}
