import Index from './pages/Index';
import Users from './pages/Users';
import Home from './pages/Home';
import NotFound from './components/NotFound';

export default [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/users', component: Users},

    //error not found route
    {path: '*', component: NotFound},
]