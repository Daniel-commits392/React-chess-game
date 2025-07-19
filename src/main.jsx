import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ChessBoard from '../ChessBoard/ChessBoard'
import App from '../ChessBoard/App'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ChessBoard></ChessBoard>
  <App></App>
  </StrictMode>,
)
