import './App.css'
import { BrowserRouter, Switch, Route, PrivateRoute } from 'react-router-dom';
import { EntryProvider } from "./context/EntryContext";
import { UserProvider } from "./context/UserContext";
import { useTheme } from "./hooks/useTheme";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";


export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`App ${theme}`}>
    <BrowserRouter>
    
      <button type="button" onClick={toggleTheme}>switch wall</button>
      <Switch>

      <UserProvider>
          <Route path="/login">
            <Login />
          </Route>
        <EntryProvider>
          <Route exact path="/">
            <Home />
          </Route>
        </EntryProvider>
      </UserProvider>
    
      </Switch>
    </BrowserRouter>

    </div>

  )
  
}
