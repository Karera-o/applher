import './transaction.css'
import woman from '../../../resources/woman.jpg'


const Card = () => {
  return (
    <div className='trans_Container'>
        <span><img src={woman} alt="" /></span>
        <div className='trans_names'>
            <h1>Alexander Williams </h1>
            <p>ABC limited</p>
        </div>
        <div className='trans_spans'>
            <span id='cost'>Paid</span>
            <span id='amount'>$1,200.87</span>
        </div>

    </div>
  )
}

const Transaction = ()=>{
  return(
    <div className='trans_holder'>
      
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Transaction