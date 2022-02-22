import { useState } from 'react';
import { useUser } from '../../context/UserContext'

export default function AuthForm() {
    const { setUser } = useUser();
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

  return (
    <><div>AuthForm</div>
    <form>
          <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder="email" />
          <input value={password} onChange={(e) => {setPassword(e.target.value)}}type="password" placeholder="password" />
          <button type="submit">login</button>
      </form>
      </>
  )
}
