import React from 'react';
import AppFab from '../components/AppFab';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonFooter } from '@ionic/react';

const withLayout = (Component) => {
  return ({ pageTitle, toggleModal, ...props }) => (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{pageTitle}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <AppFab handleClick={toggleModal} />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{pageTitle}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Component {...props} />
      </IonContent>
      <IonFooter>
        <IonText>
          <p style={{ textAlign: 'center' }}>Slide todo to right for action</p>
        </IonText>
      </IonFooter>
    </IonPage >
  )
}

export default withLayout;
