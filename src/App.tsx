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
import {Provider} from "react-redux";
import store from "./store";
import User from "./auth/models";
import {useUser} from "./services/auth";
import PageNotFound from "./pages/NotFound";

const App: React.FC = () => {
    const {user, setUser} = useUser()

    if (!user) {
        return (
            <SignInPage setUser={setUser}/>
        )
    }

    return (
        <Provider store={store}>
            <IonApp>
                <IonReactRouter>
                    <IonRouterOutlet>
                        <Route path="/" render={() => <ClientArea setUser={setUser}/>}/>
                    </IonRouterOutlet>
                </IonReactRouter>
            </IonApp>
        </Provider>
    );
}

const ClientArea: React.FC<{ setUser: (user: User | null) => void }> = ({setUser}) => {
    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/">
                        <HomePage setUser={setUser}/>
                    </Route>
                    <Route exact path="/contacts">
                        <ContactsPage/>
                    </Route>
                    <Route exact path="/news" component={NewsListPage}/>
                    <Route exact path="/news/:id" component={NewsDetailPage}/>
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
