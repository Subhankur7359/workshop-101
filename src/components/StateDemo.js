import React, {useState} from 'react'
import {CustomButton, ClickedHeader} from '../styles/StateDemo.style'

const StateDemo = () => { 
   const[clicked, updateClicked] = useState(0)

   const String = `Hello Guys. You clicked ${clicked} times`

   const clickHandler = () => {
        updateClicked(clicked + 1)
   }

    return (
        <>
            <ClickedHeader>{String}</ClickedHeader>
            <CustomButton onClick={clickHandler}>Click for Fun</CustomButton>
        </>
    )
}

export default StateDemo