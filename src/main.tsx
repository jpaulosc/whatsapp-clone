import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ConversationProvider } from "./context/ConversationContext"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConversationProvider>
      <App />
    </ConversationProvider>
  </React.StrictMode>,
)
