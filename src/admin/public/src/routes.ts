import { IRouterConfig} from 'ice';
import { BasicLayout } from '@/layouts/BasicLayout';
import { LoginLayout } from '@/layouts/LoginLayout';

import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Create from '@/pages/Create';
import Details from '@/pages/Details';
import TaskDetails from '@/pages/TaskDetails';
import Auth from '@/pages/Auth';
import Tokens from '@/pages/Tokens';
import Secrets from '@/pages/Secrets';


const routerConfig: IRouterConfig[] = [
  {
    path: "/login",
    component: LoginLayout,
    children: [
      {
        path: "/",
        exact: true,
        component: Login,
      },
    ],
  },
  {
    path: "/signUp",
    component: LoginLayout,
    children: [
      {
        path: "/",
        exact: true,
        component: Signup,
      },
    ],
  },
  {
    path: "/auth",
    component: LoginLayout,
    children: [
      {
        path: "/:provider/callback",
        exact: true,
        component: Auth,
      },
    ],
  },
  {
    path: "/settings",
    component: BasicLayout,
    children: [
      {
        path: "/tokens",
        exact: true,
        component: Tokens,
      },
      {
        path: "/secrets",
        exact: true,
        component: Secrets
      },
    ],
  },
  {
    path: "/application/:appId",
    component: BasicLayout,
    children: [
      {
        path: "/detail",
        exact: true,
        component: Details,
      },
      {
        path: "/detail/:taskId",
        exact: true,
        component: TaskDetails,
      },
      {
        path: '/application/:appId',
        // 重定向
        redirect: '/application',
      },
    ],
  },
  {
    path: "/",
    component: BasicLayout,
    children: [
      {
        path: "/application",
        exact: true,
        component: Dashboard,
      },
      {
        path: "/create",
        exact: true,
        component: Create,
      },
      {
        path: '/',
        // 重定向
        redirect: '/application',
      },
    ],
  }
];
export default routerConfig;