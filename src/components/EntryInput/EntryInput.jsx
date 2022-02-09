import { useState } from 'react';
import { useMessages } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';

export default function EntryInput() {
    
    const [userName, setUserName] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const { user, setUser } = useUser()
    const { messages, setMessages } = useMessages()
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setUser(userName);
      setMessages([...messages, { userName, message: userMessage} ])
      setUserMessage('');
    };


  return <>
  <h1>Posting as {user}</h1>
  <form>
      <input type="text" value={userName} onChange={(e) => {setUserName(e.target.value)}} placeholder="your name"/>
      <textarea value={userMessage} onChange={(e) => {setUserMessage(e.target.value)}} placeholder="your message"/>
      <button onClick={handleSubmit}>Submit</button>
      
  </form></>
  ;
}
