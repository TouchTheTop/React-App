import DashBoard from './pages/DashBoard'
import Button from './pages/Button'
import Index from './pages/Index'

const routeConfig = [
  {
    path: '/',
    exact: true,
    component: DashBoard
  },
  {
    path: '/app',
    component: Index,
    routes: [
      {
        path: '/app/button',
        component: Button
      }
    ]
  }
]

export default routeConfig
