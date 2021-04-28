import {Route} from 'react-router-dom';
import {IonApp, IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs,} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {callOutline, home, newspaper} from 'ionicons/icons';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/contacts/ContactsPage';
import NewsListPage from "./pages/news/List";
import NewsDetailPage from "./pages/news/Detail";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React from "react";
import SignInPage from "./pages/auth/Auth";
import User from "./auth/models";
import {AuthStore, useUser} from "./services/auth";
import MembershipService from "./services/memberships";
import FetchHttpClient from "./httpClient";
import NewsService from "./services/news";

const App: React.FC = () => {
    const baseApiUrl = 'http://localhost:3000';
    const fetchHttpClient = new FetchHttpClient()
    const membershipService = new MembershipService(fetchHttpClient, baseApiUrl);
    const authService = new AuthStore(fetchHttpClient, baseApiUrl);
    const newsService = new NewsService(fetchHttpClient, baseApiUrl);

    const {user, setUser} = useUser()

    if (!user) {
        return (
            <SignInPage setUser={setUser} authService={authService}/>
        )
    }

    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/">
                        <ClientArea setUser={setUser} membershipService={membershipService} newsService={newsService}/>
                    </Route>
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    );
}


interface ClientAreaProps {
    setUser: (user: User | null) => void;
    membershipService: MembershipService;
    newsService: NewsService;
}


const ClientArea: React.FC<ClientAreaProps> = ({setUser, membershipService, newsService}) => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/">
                        <HomePage setUser={setUser} membershipService={membershipService}/>
                    </Route>
                    <Route exact path="/contacts">
                        <ContactsPage/>
                    </Route>
                    <Route exact path="/news">
                        <NewsListPage newService={newsService}/>
                    </Route>
                    <Route exact path="/news/:id">
                        <NewsDetailPage newsService={newsService} />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="home" href="/">
                        <IonIcon icon={home}/>
                    </IonTabButton>
                    <IonTabButton tab="news" href="/news">
                        <IonIcon icon={newspaper}/>
                    </IonTabButton>
                    <IonTabButton tab="contacts" href="/contacts">
                        <IonIcon icon={callOutline}/>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
}


export default App;
