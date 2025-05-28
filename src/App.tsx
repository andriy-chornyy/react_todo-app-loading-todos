/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { UserWarning } from './UserWarning';
import { USER_ID } from './api/todos';

import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';
import { Footer } from './components/Footer/Footer';
import { ErrorNotification } from './components/ErrorNotification/ErrorNotification';

import { Todo } from './types/Todo';
import { client } from './utils/fetchClient';

export const App: React.FC = () => {
  const [allTodos, setAllTodos] = useState<Todo[]>([]);
  const [isLoadind, setIsLoading] = useState(false);


  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    client.get<Todo[]>('/todos?userId=2999')
      .then(setAllTodos)
      .catch(() => {
        setIsError(true)

        setTimeout(() => {
          setIsError(false)
        }, 3000);
      })
      .finally(() => (setIsLoading(false)))
    }, []);

  useEffect(() => {
    console.log(allTodos);
  }, [allTodos])


  if (!USER_ID) {
    return <UserWarning />;
  }

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>

      <div className="todoapp__content">
        <Header />

        <TodoList allTodos={ allTodos } />

        { allTodos.length > 0 && (<Footer allTodos={ allTodos }/>) }
      </div>

      <ErrorNotification isError={isError} />
    </div>
  );
};
