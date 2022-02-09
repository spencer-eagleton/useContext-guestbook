import { useState } from 'react';

export default function EntryInput() {
    
    const [userName, setUserName] = useState('');
    const [userMessage, setUserMessage] = useState('');
    
  
  
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
