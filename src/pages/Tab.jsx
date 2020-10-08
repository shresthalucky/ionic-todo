import React from 'react';
import './Tab.css';
import { IonList } from '@ionic/react';

import Todo from '../components/Todo';

const Tab = ({ todos, ...props }) => {
  return (
    <IonList>
      {todos.map((todo) =>
        <Todo key={todo.id} todo={todo} {...props}></Todo>
      )}
    </IonList>
  );
};

export default Tab;
