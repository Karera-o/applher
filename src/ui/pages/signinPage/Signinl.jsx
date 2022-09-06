import Creavbar from "../../components/navbar/Creavbar";
 
import Login from "../../components/signinForm/Login";
import "./signinPage.css"

function Signinl() {
  return (
    <div id="signinpage">
      <div id="nav">
        <Creavbar />
      </div>
      <div id="signinn">
        <Login />
      </div>
    </div>
  )
}

export default Signinl