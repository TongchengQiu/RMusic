import App from '../App';
import Index from '../components/Index/index.jsx';
import Home from '../components/Home/index.jsx';
import Login from '../components/Login';
import Register from '../components/Register';
import NotFound from '../components/NotFound';

export default [
  {
    path: '/',
    component: App,
    indexRoute: { component: Index },
    childRoutes: [
      {
        path: 'home', component: Home
      },
      {
        path: 'login', component: Register
      },
      {
        path: 'register', component: Login
      }
    ]
  },
  {
    path: '*',
    component: NotFound,
  }
];
