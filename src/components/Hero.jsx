import React from 'react'
import BlueIconBox from './common/BlueIconBox'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='bg-hero-bg pb-20'>
            <div className='container max-w-[1094px] pt-16'>
                <BlueIconBox text='Welcome to Moviegen new version' className='mx-auto' />
                <Heading textName='Professional Videos in Just a Few Clicks' className='max-w-[600px] mt-6' />
                <Paragraph textName='Simple video editing for everyone. Add subtitles, text, music, and much more to your videos with just a few clicks.' className='max-w-[580px]' />
                <div className='bg-white bg-opacity-10 p-2 rounded-2xl mt-16'>
                    <div className='flex justify-center relative shadow-hero bg-white bg-opacity-30 border border-border rounded-2xl p-2'>
                        <Image src="/assets/images/png/hero.png"
                            className="object-cover object-center md:h-[390px] lg:h-[480px] xl:h-[576px] rounded-2xl w-full"
                            width={936} height={576} alt="hero bg" priority />
                        <Image src="/assets/images/png/hero-men.png" className="sm:w-16 sm:h-[180px] absolute -right-5 top-[145px]"
                            width={64} height={180} alt="hero men" priority />
                        <Image
                            src="/assets/images/png/input.png"
                            className="absolute -bottom-7 -right-9" width={351} height={84} alt="input" priority />
                        <Image
                            src="/assets/images/png/translator.png" className="absolute bottom-[118px] -left-[104px] drop-shadow-hero-translator" width={224} height={255}
                            alt="translator" priority />
                        <Image src="/assets/images/png/blue-ball.png" className="absolute bottom-16 -left-4" width={48}
                            height={48} alt="blue ball" priority />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero