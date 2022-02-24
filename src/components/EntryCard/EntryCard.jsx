import './EntryCard.css';
import { useUser } from '../../context/UserContext';

export default function EntryCard({entry}) {
    const { message } = entry
    const { user: { email }  } = useUser()
  return <><p>
      {message}
  </p><h3>-{email.split('@')[0]}</h3></>;
}
