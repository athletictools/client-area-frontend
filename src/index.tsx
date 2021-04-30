import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import FetchHttpClient from "./httpClient";
import MembershipService from "./services/memberships";
import {AuthStore} from "./services/auth";
import NewsService from "./services/news";


const baseApiUrl = 'http://localhost:3000';
const fetchHttpClient = new FetchHttpClient()
const membershipService = new MembershipService(fetchHttpClient, baseApiUrl);
const authService = new AuthStore(fetchHttpClient, baseApiUrl);
const newsService = new NewsService(fetchHttpClient, baseApiUrl);

ReactDOM.render(
    <React.StrictMode>
        <App membershipService={membershipService} authService={authService} newsService={newsService}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
