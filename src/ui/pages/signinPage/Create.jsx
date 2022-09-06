// import Creavbar from "../../components/navbar/Creavbar";
import Navbar from '../homePage/Navbar';
import Crea from "../../components/signinForm/Crea";
import "./signinPage.css"

function Create() {
  return (
    <div id="signinpage">
      <div id="nav">
        <Navbar />
      </div>
      <div id="signinn">
        <Crea />
      </div>
    </div>
  )
}

export default Create