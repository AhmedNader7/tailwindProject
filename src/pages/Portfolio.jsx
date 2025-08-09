import React from 'react'
import img1 from '../assets/imgi_1_poert1.png'
import img2 from '../assets/imgi_2_port2.png'
import img3 from '../assets/imgi_3_port3.png'

function Portfolio() {
    return (
        <div className="container ms-auto px-4 py-10">
            <h1 className='uppercase font-bold text-gray-800 text-4xl py-7 text-center'>portfolio component</h1>
            <div class="flex gap-4">
                <div class="w-1/3 p-4 ">
                    <img src={img1} alt="image" />
                </div>
                <div class="w-1/3 p-4">
                    <img src={img2} alt="image" />
                </div>
                <div class="w-1/3 p-4">
                    <img src={img3} alt="image" />
                </div>
            </div>
            <div class="flex gap-4">
                <div class="w-1/3 p-4">
                    <img src={img1} alt="image" />
                </div>
                <div class="w-1/3 p-4">
                    <img src={img2} alt="image" />
                </div>
                <div class="w-1/3 p-4">
                    <img src={img3} alt="image" />
                </div>
            </div>
        </div>
        
    )
}

export default Portfolio