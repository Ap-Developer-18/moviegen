import React from 'react'
import BlueIconBox from './common/BlueIconBox'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='container max-w-[1094px] mt-16'>
            <BlueIconBox text='Welcome to Moviegen new version' className='mx-auto' />
            <Heading textName='Professional Videos in Just a Few Clicks' className='max-w-[600px] mt-6' />
            <Paragraph textName='Simple video editing for everyone. Add subtitles, text, music, and much more to your videos with just a few clicks.' className='max-w-[580px]' />
            <div className='flex justify-center relative'>
                <Image src="/assets/images/png/hero.png" className='mt-16 object-cover object-center' width={998} height={576} alt="hero bg" />
            </div>
        </div>
    )
}

export default Hero