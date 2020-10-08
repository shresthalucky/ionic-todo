import React from 'react';

import { IonItem, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonIcon } from '@ionic/react';
import { ellipse, closeSharp, checkmarkDoneSharp, trashSharp } from 'ionicons/icons';

const Todo = ({ todo, handleDeleteTodo, handleTodoActive }) => {

  /**
   * Call handleDeleteTodo with todo id.
   */
  const deleteTodo = () => handleDeleteTodo(todo.id);

  /**
   * Call handleTodoActive with todo id.
   */
  const toggleActive = () => handleTodoActive(todo.id);

  return (
    <IonItemSliding>
      <IonItemOptions side="start">
        {todo.active ?
          <IonItemOption color="success" onClick={toggleActive}>
            <IonIcon icon={checkmarkDoneSharp} slot="icon-only"></IonIcon>
          </IonItemOption>
          :
          <IonItemOption color="warning" onClick={toggleActive}>
            <IonIcon icon={closeSharp} slot="icon-only"></IonIcon>
          </IonItemOption>
        }
        <IonItemOption color="danger" onClick={deleteTodo}>
          <IonIcon icon={trashSharp} slot="icon-only"></IonIcon>
        </IonItemOption>
      </IonItemOptions>

      <IonItem>
        <IonIcon slot="start" icon={ellipse} color={todo.active ? 'success' : 'warning'}></IonIcon>
        <IonLabel>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </IonLabel>
      </IonItem>
    </IonItemSliding>
  );
}

export default Todo;
