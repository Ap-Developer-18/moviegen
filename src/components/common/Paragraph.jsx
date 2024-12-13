import React from 'react'

const Paragraph = ({ textName, className }) => {
  return (
    <p className={`text-lg leading-140 font-medium text-light-black text-center mx-auto max-w-[640px] mt-4 ${className}`}>
      {textName}
    </p>
  )
}

export default Paragraph
