import { useState } from 'react';
import { useUser } from '../../context/UserContext';

export default function EntryInput() {
    
    const [userName, setUserName] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const { user, setUser } = useUser()
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setUser(userName);
      setUserMessage('');
    };


  return <><div>Entry Input</div><form>
      <input type="text" value={userName} onChange={(e) => {setUserName(e.target.value)}} placeholder="your name"/>
      <textarea value={userMessage} onChange={(e) => {setUserMessage(e.target.value)}} placeholder="your message"/>
      <button onClick={handleSubmit}>Submit</button>
      
  </form></>
  ;
}
