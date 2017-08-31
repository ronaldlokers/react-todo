import { v4 as uuid } from 'node-uuid';

const fakeDatabase = {
  todos: [
    {
      id: uuid(),
      title: 'This is a finished todo',
      tags: [ 'work' ],
      completed: true,
      user: 'ronaldlokers'
    },
    {
      id: uuid(),
      title: 'This is a todo',
      tags: [ 'work', 'front-end'],
      completed: false,
      user: 'ronaldlokers'
    },
    {
      id: uuid(),
      title: 'This is a another todo',
      tags: [],
      todos: [
        {
          id: uuid(),
          title: 'This is a sub todo',
          tags: [],
          completed: false
        },
        {
          id: uuid(),
          title: 'This is another sub todo',
          tags: [],
          completed: false
        },
        {
          id: uuid(),
          title: 'This is completed sub todo',
          tags: [],
          completed: true
        }
      ],
      completed: false,
      user: 'ronaldlokers'
    },
    {
      id: uuid(),
      title: 'This is a todo that has to be done',
      tags: [],
      completed: false,
      user: 'fake_user'
    }
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = filter =>
  delay(500).then(() => {
    //Uncomment below to simulate fetch error.
    // if (Math.random() > 0.5) {
    //   throw new Error();
    // }
    switch (filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter(todo => !todo.completed);
      case 'completed':
        return fakeDatabase.todos.filter(todo => todo.completed);
      default:
        throw new Error(`Unknown filter ${filter}`);
    }
  });

export const addTodo = (title, user) =>
  delay(500).then(() => {
    const todo = {
      id: uuid(),
      title,
      tags: [],
      completed: false,
      user
    };
    fakeDatabase.todos.push(todo);
    return todo;
  });

export const toggleTodo = id =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });
