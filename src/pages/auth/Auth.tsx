import React, {useState} from "react";
import {
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonInput,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {arrowBack} from "ionicons/icons";
import {AuthStore} from "../../services/auth";
import User from "../../auth/models";

enum AuthScreen {
    PHONE_INPUT,
    PHONE_CONFIRMATION = 1,
}

const SignInPage: React.FC<{ setUser: (user: User) => void }> = ({setUser}) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [code, setCode] = useState("");
    const [currentScreen, setCurrentScreen] = useState(AuthScreen.PHONE_INPUT);

    const codeEntered = () => {
        (new AuthStore()).signIn(phoneNumber, code);
        setUser({fullName: "Hi, Evgeny"})
    };

    return (
        <IonPage>
            <IonHeader translucent={true}>
                <IonToolbar>
                    {currentScreen === AuthScreen.PHONE_CONFIRMATION &&
                    (
                        <IonButtons slot="start">
                            <IonButton onClick={() => {
                                setCurrentScreen(AuthScreen.PHONE_INPUT)
                            }}>
                                <IonIcon icon={arrowBack}/>Назад
                            </IonButton>
                        </IonButtons>
                    )}

                    <IonTitle>ДФШ Чемпион</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonImg src="https://via.placeholder.com/150x50"/>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol offset="1" size="10">
                            {
                                currentScreen === AuthScreen.PHONE_INPUT ?
                                    <PhoneNumber phoneNumber={phoneNumber}
                                                 setPhoneNumber={setPhoneNumber}
                                                 onPhoneEntered={
                                                     () => setCurrentScreen(AuthScreen.PHONE_CONFIRMATION)
                                                 }/> :
                                    <ConfirmationCode code={code} setCode={setCode} onCodeEntered={codeEntered}/>
                            }
                        </IonCol>
                    </IonRow>

                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

interface PhoneNumberProps {
    phoneNumber: string;
    setPhoneNumber: (num: string) => void;
    onPhoneEntered: () => void;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({onPhoneEntered, phoneNumber, setPhoneNumber}) => {
    return (
        <>
            <IonRow>
                <IonCol>
                    <IonInput inputmode="tel"
                              value={phoneNumber}
                              onIonChange={e => setPhoneNumber(e.detail.value!)}
                              placeholder="Введите номер телефона"/>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol>
                    <IonButton expand="full" onClick={onPhoneEntered}>Выслать код</IonButton>
                </IonCol>
            </IonRow>
        </>
    )
}


interface ConfirmationCodeProps {
    code: string;
    setCode: (code: string) => void;
    onCodeEntered: () => void;
}

const ConfirmationCode: React.FC<ConfirmationCodeProps> = ({code, onCodeEntered, setCode}) => {
    return (
        <>
            <IonRow>
                <IonCol>
                    <IonInput inputmode="numeric"
                              value={code}
                              onIonChange={e => setCode(e.detail.value!)}
                              placeholder="Введите код из смс"/>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol>
                    <IonButton expand="full" onClick={() => {
                        onCodeEntered()
                    }}>Подтвердить</IonButton>
                </IonCol>
            </IonRow>
        </>
    )
}


export default SignInPage;
