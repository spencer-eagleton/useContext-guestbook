import './App.css'
import { BrowserRouter, Switch } from 'react-router-dom';
import { EntryProvider } from "./context/EntryContext";
import { UserProvider } from "./context/UserContext";
import { useTheme } from "./hooks/useTheme";
import Home from "./views/Home/Home";


export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`App ${theme}`}>
    <BrowserRouter>
    
      <button type="button" onClick={toggleTheme}>switch wall</button>
      <Switch>

      <UserProvider>
        <EntryProvider>
          <Home />
        </EntryProvider>
      </UserProvider>
    
      </Switch>
    </BrowserRouter>

    </div>

  )
  
}
