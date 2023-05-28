import { useContext, useEffect, useState } from "react"
import './assets/app.css'
import './assets/main.css'
import { ConversationContext } from "./context/ConversationContext";
import Sidebar from './components/Sidebar'
import Inactive from "./components/Content/Inactive"
import Content from "./components/Content"
import Notification from "./components/Notification"
import Preloader from "./components/Preloader"
import Drawer from "./components/Drawer";

function App() {
  const { active } = useContext(ConversationContext);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <div id="app">
        <div className="_1Fm4m _1h2dM app-wrapper-web font-fix os-win">
          {loading ? <Preloader onFinish={() => setLoading(false)} /> : (
            <>
              <Notification />
              <div tabIndex={-1} className={`two _1jJ70`}>
                <div id="wa-popovers-bucket"></div>
                <Sidebar />
                {active ? <Content /> : <Inactive />}
                <Drawer />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default App
