import React from 'react'

const ButtonClickDemo = () => {


    // function without parameter...
    const handlerClick = () => {
        alert("Button Clicked!")
    }
    return (
        <div>
            <center><p className='display-7'>
                Button Click Event
            </p>

                <button onClick={handlerClick}>
                    Click Me
                </button>
            </center>
        </div>


    )
}

export default ButtonClickDemo