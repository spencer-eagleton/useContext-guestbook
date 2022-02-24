import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function AuthForm() {
    const { setUser } = useUser();
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState(null)
    
    const location = useLocation()
    const history = useHistory()

    const handleSignIn = (e) => {
        e.preventDefault();
        if (email === process.env.AUTH_EMAIL && password === process.env.AUTH_PASSWORD) { 
            setUser({ email })
            const { from } = location.state || { from: { pathname: '/' }}
            history.replace(from.pathname)
    } else { setError('email or password invalid') }
        
    } 
    
    
  return (
    <>
    <form onSubmit={handleSignIn}>
          <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder="email" />
          <input value={password} onChange={(e) => {setPassword(e.target.value)}}type="password" placeholder="password" />
          <button type="submit">login</button>
      </form>
      {error && <h4>{error}</h4>}
      </>
  )
}
