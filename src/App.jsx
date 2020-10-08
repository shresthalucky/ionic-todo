import React from 'react';
import { withIonLifeCycle, IonApp } from '@ionic/react';

import Routes from './routes';
import AppModal from './components/AppModal';

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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.dummyTodos = [
      {
        id: 2,
        title: "Seize the day",
        description: "Do something great today!",
        active: true,
      },
      {
        id: 1,
        title: "Create Todo using Ionic Framework",
        description: "Its fun!",
        active: false,
      },
    ];

    this.state = {
      todos: JSON.parse(localStorage.getItem('todos')) || this.dummyTodos,
      searchText: '',
      isModalOpen: false
    }
  }

  /**
   * Update local storage todos value.
   */
  updateStore = () => {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  /**
   * Toggle isModalOpen state value.
   */
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  /**
   * Add todo to todos state and update store.
   *
   * @param {object} todo - Object with todo data
   */
  handleAddTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    }, this.updateStore);
  }

  /**
   * Delete todo from state and update store.
   * 
   * @param {number} id - Id of todo. 
   */
  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    }, this.updateStore);
  }

  /**
   * Toggle active value of todo and update store.
   * 
   * @param {number} id - Id of todo. 
   */
  handleTodoActive = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => todo.id === id ? { ...todo, active: !todo.active } : todo)
    }, this.updateStore);
  }

  render() {
    return (
      <IonApp>
        <AppModal
          isOpen={this.state.isModalOpen}
          handleAddTodo={this.handleAddTodo}
          toggleModal={this.toggleModal}
        />

        <Routes
          toggleModal={this.toggleModal}
          todos={this.state.todos}
          handleDeleteTodo={this.handleDeleteTodo}
          handleTodoActive={this.handleTodoActive}
        />
      </IonApp>
    );
  }
}

export default withIonLifeCycle(App);
