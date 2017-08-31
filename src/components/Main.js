import React from 'react';
import TodoList from './TodoList';
import NavigationBar from './NavigationBar';

const Main = props => (
  <div>
    <NavigationBar />
    <TodoList {...props} />
  </div>
);

export default Main;
