import './earnings.css'
import { BiBarChart } from 'react-icons/bi'
function Earnings() {
  return (
    <div id='earningsContainer'>
        <span><BiBarChart/></span>
        <p id='para1'>Earnings</p>
        <p id='para2'>$7,890</p>
        <p id='para3'>+10% since last month</p>
    </div>
  )
}

export default Earnings