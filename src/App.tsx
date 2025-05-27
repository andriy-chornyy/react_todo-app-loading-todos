/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { UserWarning } from './UserWarning';
import { USER_ID } from './api/todos';
import { Header } from './components/Header/Header';
import { Section } from './components/Section/Section';
import { Footer } from './components/Footer/Footer';
import { ErrorNotification } from './components/ErrorNotification/ErrorNotification';

export const App: React.FC = () => {
  // if (!USER_ID) {
  //   return <UserWarning />;
  // }

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>

      <div className="todoapp__content">
        <Header />

        <Section />

        <Footer />
      </div>

      <ErrorNotification />
    </div>
  );
};
