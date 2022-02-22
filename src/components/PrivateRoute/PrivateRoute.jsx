import { Route, Redirect, useLocation } from "react-router-dom";
import { useUser } from '../../context/UserContext'

export default function PrivateRoute({children, ...routeprops}) {
    const { user } = useUser()
    const location = useLocation()
    return (
    <>
        <Route {...routeprops}>
        <div>PrivateRoute</div>
            {user ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />} 
        </Route>
    </>
  )
}
