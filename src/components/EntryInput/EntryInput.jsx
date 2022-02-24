import './EntryInput.css'
import { useState } from 'react';
import { useMessages } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';

export default function EntryInput() {
    
    // const [userName, setUserName] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const { setUser, user: { email }  } = useUser()
    const { messages, setMessages } = useMessages()
    console.log(user);
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // setUser(userName);
      setMessages([...messages, { email, message: userMessage} ])
      setUserMessage('');
    };



  return <>
  {email && <h1>Tagging as {email.split('@')[0]}</h1>}
  {!email && <h1>Tag it up!</h1>}
  <form> 
      {/* {user ? null :
      <label >
        <h4>
        
          Name:
        </h4>
          <input type="text" value={userName} onChange={(e) => {setUserName(e.target.value)}} placeholder="your name"/>
      </label>
      } */}
      <label htmlFor="Message">
          <h4>
        Message:
        </h4>
      <textarea value={userMessage} onChange={(e) => {setUserMessage(e.target.value)}} placeholder="your message"/>
      </label>
      <button onClick={handleSubmit}>Submit</button>
      {email && 
      
      <button               
      onClick={() => {
          setUser('')
      }}>Not {email.split('@')[0]}?</button>
      
      }
      
  </form></>
  ;
}
