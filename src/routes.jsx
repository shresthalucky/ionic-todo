import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipseOutline, checkmarkDoneSharp, listOutline } from 'ionicons/icons';

import Tab from './pages/Tab';
import { ROUTES } from './constants';
import withLayout from './hoc/withLayout';

const EnhancedTab = withLayout(Tab);

const Routes = ({ todos, ...props }) => (
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route
          path={ROUTES.ALL}
          render={renderProps => <EnhancedTab {...renderProps} todos={todos} {...props} pageTitle="All" />}
          exact={true} />
        <Route path={ROUTES.ACTIVE}
          render={renderProps => <EnhancedTab {...renderProps} todos={todos.filter(todo => todo.active)} {...props} pageTitle="Active" />}
          exact={true} />
        <Route path={ROUTES.DONE}
          render={renderProps => <EnhancedTab {...renderProps} todos={todos.filter(todo => !todo.active)} {...props} pageTitle="Done" />}
          exact={true} />
        <Route path={ROUTES.HOME}
          render={() => <Redirect to={ROUTES.ALL} />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="all" href={ROUTES.ALL}>
          <IonIcon icon={listOutline} />
          <IonLabel>All</IonLabel>
        </IonTabButton>
        <IonTabButton tab="active" href={ROUTES.ACTIVE}>
          <IonIcon icon={ellipseOutline} />
          <IonLabel>Active</IonLabel>
        </IonTabButton>
        <IonTabButton tab="done" href={ROUTES.DONE}>
          <IonIcon icon={checkmarkDoneSharp} />
          <IonLabel>Done</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
);

export default Routes;
