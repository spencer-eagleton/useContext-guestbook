
export default function EntryCard({entry}) {
    const { userName, message } = entry
  return <><h3>{userName}</h3><p>
      {message}
  </p></>;
}
