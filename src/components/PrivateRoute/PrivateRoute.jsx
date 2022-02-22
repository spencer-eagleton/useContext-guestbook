import { Route } from "react-router-dom";


export default function PrivateRoute({children}) {
  return (
    <>
        <div>PrivateRoute</div>
        <Route>
            {/* {children} */}
        </Route>
    </>
  )
}
