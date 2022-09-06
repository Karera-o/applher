import "./Login.css"
import {Link} from 'react-router-dom';
function Login() {
  return (
    <form id="signin">
        
     <select class="classic" >
  <option>Sponsor</option>
  <option>User</option>
   
</select>
      <div>
        <label htmlFor="">Email</label>
        <input type="email" />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" />
      </div>
      
      <div >
        <h4 className="for">Forgot Password</h4>
      </div>
       
      <Link Link className=" button" to="/dash"  >Log In </Link>
    </form>
  )
}

export default Login