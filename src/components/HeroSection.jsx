import React from 'react'

const HeroSection = () => {
    return (
        <div className='mt-16 w-full flex flex-col  md:grid grid-cols-3  mx-auto text-center bg-[#F8F7F1] '>
            <div className='flex flex-col gap-6 space-y-1 md:space-y-20 my-6 mx-auto text-left'>
                <h1 className='text-[2.5rem] font-bold'>Hey There, <br /> I'm Aman</h1>
                <a href="mailto:amanofficialcoder01@gmail.com" className='hidden md:inline'>amanofficialcoder01@gmail.com</a>
                <div className='hidden items-center gap-1  md:flex'>
                    <div className='text-[2.5rem] font-bold leading-6'>1</div>
                    <div className='leading-6 text-left'>
                        <div>Years</div>
                        <div>Experience</div>
                    </div>
                </div>
            </div>

            <div className='mx-auto '>
                
                 <img src="./aman_prev_ui.png"  alt="" className='h-full '  />
               
            </div>


            <div className='flex flex-col gap-4 space-y-1 md:space-y-40 my-6 mx-auto'>
                <h1 className='text-xl md:text-2xl text-left leading-10 '>
                    <div>I design beautiful simple</div>
                    <div> things, And I love what i do</div>
                </h1>
                <div className='flex flex-row md:flex-col items-center gap-2 '>
                    <img src="./certificate.png" alt="" />
                    <div>MERN DEVELOPER</div>
                </div>
            </div>

        </div>
    )
}

export default HeroSection
