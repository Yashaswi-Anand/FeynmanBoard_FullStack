import React, { useState } from 'react'
import '../src/App.css'


function Tooltip(props) {

  const {setHoverPosition, setDataValue, text } = props;
  const [isHover, setIsHover] = useState(false);

  const points = (action) =>{
    if(action === 'Understood')
      return 4
    else if(action === 'Somewhat understood')
      return 3
    else if(action === 'Not clear')
      return 2
    else if(action === 'What rubbish')
      return 1
    else return 0
  }


  // set action on each block of text
  const onSelectAction = (action) => {
    setIsHover(false)
    console.log(text, action);
    const obj = [text, action, points(action)]
    setDataValue(obj)
  }

  // create a hover and all four actions like Understood,Somewhat understood, not clear, what rubbish
  return (
    <>
      <div className='my-tooltip'>
        <h5 id='hover_over_me' onMouseOver={() => setIsHover(true)}>{text} &nbsp;</h5>
        {isHover && <span id={setHoverPosition} className='tooltiptext'>
        <h6>Any Call Action</h6>
          <button className='tooltipbtn bg-success' onClick={() => onSelectAction('Understood')}>Understood</button>
          <button className='tooltipbtn bg-warning' onClick={() => onSelectAction('Somewhat understood')}>Somewhat understood</button>
          <button className='tooltipbtn bg-info' onClick={() => onSelectAction('Not clear')}>Not clear</button>
          <button className='tooltipbtn bg-danger' onClick={() => onSelectAction('What rubbish')}>What rubbish</button>
        </span>}
      </div>
    </>
  )
}

export default Tooltip


