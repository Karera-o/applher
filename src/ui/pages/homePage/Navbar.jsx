import React , {useState} from 'react'
import Logo from '../../components/logo/logo'
 
function Navbar() {
    const [nav, setnav] = useState(false);
    const changeBackground =()=>{
        if(window.scrollY >= 50){
            setnav(true);
        }else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
  return (
  <nav className={nav ? 'nav active' : 'nav'}>
<Logo/>
<input type='checkbox' className='menu-btn' id='menu-btn'/>
<label className='menu-icon' for="menu-btn">
    <span className='nav-icon'></span>
</label>
<ul className='menu'>
    <li><a href='/' className='active'>Home</a></li>
    <li><a href='/'>Project</a></li>
    <li><a href='/'>About</a></li>
    <li><a href='/'>Sponsors</a></li>
  
</ul>
  </nav>
  )
}
 

export default Navbar 