import './Popup.css'
import settingIcon from '../assets/settings.png'

function App() {
  return (
    <div className="container">
      <div className="nav">
        <span className="logo">Keep In Mind</span>
        <span className="setting">
          <img src={settingIcon} alt="Logo" />
        </span>
      </div>
    </div>
  )
}

export default App
