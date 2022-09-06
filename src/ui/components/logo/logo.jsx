import "./logo.css"
import logo from "../../resources/logo.png"
function Logo() {
  return (
    <div id="logoContainer">
        <img src={logo} alt="" />
        <span>AH</span>
    </div>
  )
}

export default Logo