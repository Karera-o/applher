import Creavbar from "../../components/navbar/Creavbar";
// import Navbar from "../../components/navbar/navbar";
// import Crea from "../../components/signinForm/Crea";
import Res from "../../components/signinForm/Res";
import "./signinPage.css"

function Reset() {
  return (
    <div id="signinpage">
      <div id="nav">
        <Creavbar />
      </div>
      <div id="signinn">
        <Res />
      </div>
    </div>
  )
}

export default Reset