import './App.css'
import { EntryProvider } from "./context/EntryContext";
import { UserProvider } from "./context/UserContext";
import Home from "./views/Home/Home";

export default function App() {
  return <UserProvider>
    <EntryProvider>
    <Home />
    </EntryProvider>
    </UserProvider>;
}
