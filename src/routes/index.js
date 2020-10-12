import App from '../pages/App/index'
import Login from '../pages/Login/index'
import EmailLogin from '../pages/Login/Email'

export const routes = {
  '/app': {
    component: App,
    meta: { needsAuth: true }
  },
  '/login': {
    component: Login,
    meta: { needsAuth: false }
  },
  '/login/email': {
    component: EmailLogin,
    meta: { needsAuth: false }
  },
}