import './EntryInput.css'
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
  {user && <h1>Tagging as {user}</h1>}
  {!user && <h1>Tag it up!</h1>}
  <form> 
      {user ? null :
      <label >
                 <h4>
        
          Name:
        </h4>
          <input type="text" value={userName} onChange={(e) => {setUserName(e.target.value)}} placeholder="your name"/>
      </label>
      }
      <label>
          <h4>
        Message:
        </h4>
      <textarea value={userMessage} onChange={(e) => {setUserMessage(e.target.value)}} placeholder="your message"/>
      </label>
      <button onClick={handleSubmit}>Submit</button>
      {user && 
      
      <button               
      onClick={() => {
          setUser('')
          setName('')
      }}>Not {user}?</button>
      
      }
      
  </form></>
  ;
}
