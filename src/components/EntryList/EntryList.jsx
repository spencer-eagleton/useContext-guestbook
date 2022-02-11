import './EntryList.css'
import { useMessages } from "../../context/EntryContext";
import EntryCard from "../EntryCard/EntryCard";

export default function EntryList() {
const { messages } = useMessages()

  return <>
  <ul>

  {messages.map((entry) => {
    return (
      <li key={entry.message}>
        <EntryCard entry={entry}/>

      </li>
    )
  })}
  </ul>
</>;
}
