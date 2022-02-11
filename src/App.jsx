import './App.css'
import { EntryProvider } from "./context/EntryContext";
import { UserProvider } from "./context/UserContext";
import { useTheme } from "./hooks/useTheme";
import Home from "./views/Home/Home";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`App ${theme}`}>

    <button type="button" onClick={toggleTheme}>switch wall</button>
  <UserProvider>
    <EntryProvider>
    <Home />
    </EntryProvider>
    </UserProvider>

    </div>

  )
  
}
