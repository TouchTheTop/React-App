import DashBoard from './pages/DashBoard'
import Button from './pages/Button'
import Index from './pages/Index'
import Collapse from './pages/Collapse'

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
      },
      {
        path: '/app/collapse',
        component: Collapse
      }
    ]
  }
]

export default routeConfig
