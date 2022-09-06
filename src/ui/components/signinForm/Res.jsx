import "./Login.css"

function Res() {
  return (
    <form id="signin">
 <h1>Reset Password</h1>
      <div>
        <label htmlFor="">New Passowrd</label>
        <input type="password" />
      </div>
      <div>
        <label htmlFor=""> Confirm Password</label>
        <input type="password" />
      </div>
      
       
       
      <button>Reset </button>
    </form>
  )
}

export default Res