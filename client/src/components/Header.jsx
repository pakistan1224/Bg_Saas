import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
return (
<div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>



    {/* ------------LEFT SIDE--------- */}



    <div >
        <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight '>Remove the <br className='max-md:hidden' /> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background</span>  from <br className='max-md:hidden' /> images for free.</h1>
        <p className='my-6 text-[15px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br className='max-sm:hidden' />Sequi facilis sunt enim saepe quod non aspernatur ad in iste error!</p>
        <div>
            <input type="file" name="" id="upload1" hidden/>
            <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to bg-fuchsia-500 m-auto hover:scale-105 trasnsition-all duration-700' htmlFor="upload1"><img width={20} src={assets.upload_btn_icon} alt="" />
            <p className='text-white text-sm'>Upload your Image</p>
            </label>
        </div>
    </div>


    {/* ------------RIGHT SIDE--------- */}



    <div className='w-full max-w-md'>
<img src={assets.header_img} alt="" />
    </div>
</div>
)
}

export default Header