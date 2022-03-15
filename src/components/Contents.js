import React from 'react'

function Contents() {
  return (
    <>
    <div className="menu-card">
        <img src={ require('../images/egg.png')} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className='content-content'>
          <h2 className='text-2xl mb-2'>Egg Muffins</h2>
          <p className='mb-2'>Crispy, Delicious, and Nutritious</p>
          <span>$16</span>
        </div>
    </div>
    
    <div className="menu-card">
    <img src={ require('../images/egg-2.png')} alt="egg" className="h-full rounded mb-20 shadow" />
    <div className='content-content'>
      <h2 className='text-2xl mb-2'>Egg Salad</h2>
      <p className='mb-2'>Crispy, Delicious, and Nutritious</p>
      <span>$18</span>
    </div>
</div>
</>
    
  )
}

export default Contents