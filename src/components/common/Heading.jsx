import React from 'react'

const Heading = ({ textName, blueText, className }) => {
    return (
        <h2 className={`text-5xl leading-120 font-semibold text-center font-geist mx-auto ${blueText ? 'text-blue' : 'text-black'} ${className}`}>
            {textName}
        </h2 >
    )
}

export default Heading