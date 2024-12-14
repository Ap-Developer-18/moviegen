import React from 'react'
import BlueIconBox from './common/BlueIconBox'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='bg-hero-bg pb-20'>
            <div className='container max-w-[1094px] pt-16 max-md:px-4'>
                <BlueIconBox text='Welcome to Moviegen new version' className='mx-auto' />
                <Heading textName='Professional Videos in Just a Few Clicks' className='max-w-[600px] mt-6' />
                <Paragraph textName='Simple video editing for everyone. Add subtitles, text, music, and much more to your videos with just a few clicks.' className='max-w-[580px]' />
                <div className='bg-white bg-opacity-10 sm:p-2 p-1 rounded-2xl mt-16'>
                    <div className='flex justify-center relative shadow-hero bg-white bg-opacity-30 border border-border rounded-2xl sm:p-2 p-1'>
                        <Image src="/assets/images/png/hero.png"
                            className="object-cover object-center h-[300px] sm:h-[400px] md:h-[474px] lg:h-[555px] xl:h-[576px] rounded-2xl w-full"
                            width={936} height={576} alt="hero bg" priority />
                        <Image src="/assets/images/png/hero-men.png" className="sm:w-16 sm:h-[180px] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-5 xl:top-[145px] max-lg:hidden"
                            width={64} height={180} alt="hero men" priority />
                        <Image src="/assets/images/png/input.png"
                            className="absolute -bottom-4 md:-bottom-7 max-xl:left-1/2 max-xl:-translate-x-1/2 xl:-right-9 w-[180px] sm:w-[200px] md:w-[280px] lg:w-[351px]" width={351} height={84} alt="input" priority />
                        <Image
                            src="/assets/images/png/translator.png" className="xl:absolute xl:bottom-[118px] xl:-left-[104px] drop-shadow-hero-translator max-xl:hidden" width={224} height={255}
                            alt="translator" priority />
                        <Image src="/assets/images/png/blue-ball.png" className="max-lg:hidden lg:absolute max-xl:top-1/2 max-xl:-translate-y-1/2 xl:bottom-16 -left-4" width={48}
                            height={48} alt="blue ball" priority />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero