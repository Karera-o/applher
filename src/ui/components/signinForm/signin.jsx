import "./signin.css"

function Signin() {
  return (
    <form id="signin">
      <h1>Register Your Project Now</h1>
      <div>
        <label htmlFor="">First Name</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Last Name</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Project Name</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor=""> Address</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Description</label>
        <textarea name="" id="" cols="30" rows="5"></textarea>
      </div>
      <button>SUBMIT</button>
    </form>
  )
}

export default Signin