import React from 'react';
import { TodoItem } from '../TodoItem/TodoItem';

// type Props = {
//   todoFtomServer: Todo[];
// }

export const TodoList: React.FC = () => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      <TodoItem />
    </section>
  )
}

