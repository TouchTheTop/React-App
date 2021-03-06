import React from 'react'
import { Switch, Route } from 'react-router'

function renderRoutes(routes, extraProps = {}, switchProps = {}) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          component={route.component}
        >
          {route.path && (
            <Route
              path={route.path}
              exact={true}
              component={route.component}
            ></Route>
          )}
          {route.routes &&
            route.routes.map((child, j) => (
              <Route
                key={child.key || j}
                path={child.path}
                exact={child.exact}
                component={child.component}
              ></Route>
            ))}
        </Route>
      ))}
    </Switch>
  ) : null
}

export default renderRoutes
