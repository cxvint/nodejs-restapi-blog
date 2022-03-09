import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
import { Context } from '../..';
import { login, registration } from '../../http/userAPI';
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from '../../utils/consts';

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      console.log(data);
      user.setUser(user);
      user.setIsAuth(true);
      history.push(HOME_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Sign In' : 'Sign UP'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                No account? <NavLink to={REGISTRATION_ROUTE}>Sign UP!</NavLink>
              </div>
            ) : (
              <div>
                have an account? <NavLink to={LOGIN_ROUTE}>Sign In!</NavLink>
              </div>
            )}
            <Button variant={'outline-success'} onClick={click}>
              {isLogin ? 'Sign In' : 'Sign UP'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
