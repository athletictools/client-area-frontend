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

enum AuthScreen {
    PHONE_INPUT,
    PHONE_CONFIRMATION = 1,
}

const SignInPage: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [currentScreen, setCurrentScreen] = useState(AuthScreen.PHONE_INPUT);

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
                                <IonIcon icon={arrowBack}></IonIcon>Назад
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
                                    <PhoneNumber phoneNumber={phoneNumber} onPhoneEntered={(num) => {
                                        setPhoneNumber(num);
                                        setCurrentScreen(AuthScreen.PHONE_CONFIRMATION)
                                    }}/> : <ConfirmationCode phoneNumber={phoneNumber} onCodeEntered={(code) => {
                                        setCurrentScreen(AuthScreen.PHONE_CONFIRMATION)
                                    }}/>
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
    onPhoneEntered: (num: string) => void;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({onPhoneEntered, phoneNumber}) => {
    return (
        <>
            <IonRow>
                <IonCol>
                    <IonInput inputmode="tel" value={phoneNumber} placeholder="Введите номер телефона"/>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol>
                    <IonButton expand="full" onClick={() => {
                        onPhoneEntered("")
                    }}>Войти</IonButton>
                </IonCol>
            </IonRow>
        </>
    )
}


interface ConfirmationCodeProps {
    phoneNumber: string;
    onCodeEntered: (code: string) => void;
}

const ConfirmationCode: React.FC<ConfirmationCodeProps> = ({onCodeEntered, phoneNumber}) => {
    return (
        <>
            <IonRow>
                <IonCol>
                    <IonInput inputmode="tel" value={phoneNumber} placeholder="Введите код из смс"/>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol>
                    <IonButton expand="full" onClick={() => {
                        onCodeEntered("")
                    }}>Войти</IonButton>
                </IonCol>
            </IonRow>
        </>
    )
}


export default SignInPage;