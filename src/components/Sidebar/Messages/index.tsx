import { useContext } from "react"
import Item from "./Item"
import { ConversationContext } from "../../../context/ConversationContext";

const Messages = () => {

  const { active, setActive } = useContext(ConversationContext);

  return (
    <div tabIndex={-1} data-tab="4">
      <div data-testid="chat-list" style={{ pointerEvents: 'auto' }}>
        <div className="_3YS_f _2A1R8" role="grid">
          <Item onClick={() => setActive(!active)}/>
        </div>
      </div>
    </div>
  )
}

export default Messages
