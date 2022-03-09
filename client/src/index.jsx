import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BlogStore from './store/BlogStore';
import UserStore from './store/UserStore';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{ user: new UserStore(), blog: new BlogStore() }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
