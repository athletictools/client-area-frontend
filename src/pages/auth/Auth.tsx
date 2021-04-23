import React, {useState} from "react";
import {
    IonBackButton,
    IonButton, IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader, IonIcon,
    IonImg,
    IonInput,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {arrowBack, backspace} from "ionicons/icons";

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
                            <IonButton onClick={()=>{setCurrentScreen(AuthScreen.PHONE_INPUT)}}>
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
                            {currentScreen }
                            <PhoneNumber phoneNumber={phoneNumber} onPhoneEntered={(num) => {
                                setPhoneNumber(num);
                                setCurrentScreen(AuthScreen.PHONE_CONFIRMATION);
                            }}/>
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


export default SignInPage;
