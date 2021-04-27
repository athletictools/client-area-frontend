import User from "../auth/models";
import {useState} from "react";

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
