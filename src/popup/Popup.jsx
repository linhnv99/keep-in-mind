import './Popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="container">
      <div className="nav">
        <span className="logo">Keep In Mind</span>
        <span className="setting">
          <FontAwesomeIcon icon={faGear} />
        </span>
      </div>
    </div>
  )
}

export default App
