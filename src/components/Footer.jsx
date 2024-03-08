import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#E7E7E7] py-16 '>
            <div className='w-full md:w-10/12 flex items-center justify-between flex-wrap mx-auto'>

                <div className='flex  flex-col  gap-8 text-[2.5rem] font-bold'>
                    <span >Let's make something <br />
                        amazing together.</span>
                    <span>Start by <a className='underline text-violet-500' href="mailto:amanofficialcoder01@gmail.com">saying hi</a></span>
                </div>


                <div className='flex flex-col gap-4 text-lg'>
                    <h1>Information</h1>
                    <p>Varanasi, Uttar Pradesh, INDIA</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
