import Users from './pages/Users';
import Profile from './pages/Profile';
import Home from './pages/Home';
import NotFound from './components/NotFound';

export default [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/users', component: Users},
    {path: '/profile/:userId/edit/', component: Profile},

    //error not found route
    {path: '*', component: NotFound},
]