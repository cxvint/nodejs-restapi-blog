import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import AppRouter from './components/Routes/AppRouter';
import { Context } from '.';
import { check } from './http/userAPI';

const App = observer(() => {
  const { user } = useContext(Context);

  check().then((data) => {
    user.setUser(true);
    user.setIsAuth(true);
  });

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
