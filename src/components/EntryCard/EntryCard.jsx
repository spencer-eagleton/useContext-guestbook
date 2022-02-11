import './EntryCard.css';

export default function EntryCard({entry}) {
    const { userName, message } = entry
  return <><p>
      {message}
  </p><h3>-{userName}</h3></>;
}
