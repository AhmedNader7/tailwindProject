import img from '../assets/imgi_1_avataaars.svg'
import React from 'react'

function Home() {
    return (
            <section className='flex flex-col items-center justify-center py-4 bg-[#1ABC9C]'>
                <img className='w-sm' src={img} alt="" />
                <h1 className='font-bold text-white text-4xl py-4'>START FRAMEWORK</h1>
                <div>
                    <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </section>
    )
}

export default Home