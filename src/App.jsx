import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EntryProvider } from "./context/EntryContext";
import { UserProvider } from "./context/UserContext";
import { useTheme } from "./hooks/useTheme";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`App ${theme}`}>
    <BrowserRouter>
    
      <button type="button" onClick={toggleTheme}>switch wall</button>
      <Switch>

      <UserProvider>
          <Route exact path="/login">
            <Login />
          </Route>
        <EntryProvider>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
        </EntryProvider>
      </UserProvider>
    
      </Switch>
    </BrowserRouter>

    </div>

  )
  
}
