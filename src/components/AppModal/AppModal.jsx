import React, { useState } from 'react';
import {
  IonModal,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFooter
} from '@ionic/react';

const AppModal = ({ isOpen, handleAddTodo, toggleModal }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  /**
   * Set value of title state. 
   *
   * @param {Event} event - Event object.
   */
  const handleTitleChange = (event) => setTitle(event.target.value);

  /**
   * Set value of description state. 
   *
   * @param {Event} event - Event object.
   */
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  /**
   * Clear values of title and description states. 
   */
  const clearInputs = () => {
    setTitle('');
    setDescription('');
  }

  /**
   * Create todo object and call handleAddTodo callback.
   */
  const handleSave = () => {
    const todo = {
      id: Date.now(),
      title,
      description,
      active: true
    };

    handleAddTodo(todo);
    toggleModal();
    clearInputs();
  }

  /**
   * Close modal and clear values of title and description states.
   */
  const handleCancel = () => {
    toggleModal();
    clearInputs();
  }

  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Todo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Title</IonLabel>
          <IonInput value={title} name="title" onIonChange={handleTitleChange} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Description</IonLabel>
          <IonTextarea
            value={description}
            name="description"
            onIonChange={handleDescriptionChange}
            placeholder="Optional"
            autoGrow />
        </IonItem>
      </IonContent>
      <IonFooter>
        <IonButton onClick={handleSave} expand="block" disabled={title ? false : true}>Save</IonButton>
        <IonButton onClick={handleCancel} expand="block" fill="clear">Cancel</IonButton>
      </IonFooter>
    </IonModal>
  );
};

export default AppModal;
