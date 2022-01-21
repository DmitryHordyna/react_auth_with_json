import About from '../pages/About';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';
import { Navigate } from 'react-router-dom';
import Login from '../pages/Login';

const privateRoutes = [
  { path: '/about', element: <About />, exact: true },
  { path: '/posts', element: <Posts />, exact: true },
  { path: '/posts/:id', element: <PostIdPage />, exact: true },
  { path: '/error', element: <Error />, exact: false },
  { path: '*', element: <Navigate to="/posts" />, exact: false }
];

const publickRoutes = [
  { path: '/login', element: <Login />, exact: true },
  { path: '*', element: <Navigate to="/login" />, exact: false }
];

export { privateRoutes, publickRoutes };
