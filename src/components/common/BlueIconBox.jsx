import React from 'react'
import Icons from '../icons/Icons'

const BlueIconBox = ({ text, className }) => {
    return (
        <div className={`p-px bg-border-gradient text-sm bg-opacity-10 rounded-md max-w-fit ${className}`}>
            <div className="bg-white rounded-md">
                <div className="bg-blue rounded-md bg-opacity-10 p-2 flex items-center gap-2">
                    <Icons iconName="blueBox" />
                    <div className='text-custom-base leading-100 font-semibold text-blue tracking-[-1%]'>{text}</div>
                </div>
            </div>
        </div>
    )
}

export default BlueIconBox;