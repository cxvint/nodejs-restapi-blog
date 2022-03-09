import Admin from './pages/Admin/Admin';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/BlogPage';
import {
  ADMIN_ROUTE,
  BLOG_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from './utils/consts';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: BLOG_ROUTE + '/:id',
    Component: Blog,
  },
];
