import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

const AppFab = ({ handleClick }) => (
  <IonFab vertical="top" horizontal="end" slot="fixed" edge>
    <IonFabButton onClick={handleClick}>
      <IonIcon icon={add} />
    </IonFabButton>
  </IonFab>
);

export default AppFab;
