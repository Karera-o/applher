import React from 'react'
import FeatureBox from './FeatureBox';
import feat1 from './Ellipse 21.png';
import feat2 from './Ellipse1.png';
import feat3 from './Ellipse2.png';
function Feature() {
  return (
    <div id='features'> 
<div className='a-container'>
<FeatureBox image={feat1}  title='Anitha Flower'/>
<FeatureBox image={feat2}  title='Saloon'/>
<FeatureBox image={feat3}  title='Cabbages Farming '/>
</div>
    </div>
  )
}

export default Feature;