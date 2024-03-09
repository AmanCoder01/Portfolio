import React from 'react'

const work = [
    {
        title: "ToDo App",
        description: "This is App where you can add your task and mark as completed .It is developed by MERN ",
        image: "./showCase1.png",
        url:"https://todo-app-frontend-two.vercel.app/"
    },
    {
        title: "Simon Game",
        description: "Simon is a classic electronic memory game where players follow a sequence of flashing lights and sounds. The game starts with a single light and progressively adds more. Players must replicate the pattern correctly to advance.",
        image: "./showCase2.png",
        url:"https://amancoder01.github.io/SimonGameAM/#"
    },
    {
        title: "Blog App",
        description: "A personal blog is an online platform where individuals share their thoughts, experiences, and interests with a global audience.  ",
        image: "./showCase3.png",
        url:"https://blog-app-ten-sage.vercel.app/"
    },

]

const Projects = () => {
    return (
       <div className='bg-[#F8F7F1] '>
         <div id='project' className=' py-8 flex flex-col w-full md:w-10/12 mx-auto gap-12'>
            <div className=' text-center'>
                <h1 className='text-[2.5rem] font-bold'>My Latest Projects</h1>
                <div className='text-md font-medium'>Perfect solution for digital experience</div>
            </div>

            <div className='flex items-center gap-6 justify-between flex-wrap'>
                {
                    work.map((item, i) => (
                        <a target='_bllank' href={item.url}>
                            <div key={i} className='w-[390px] group cursor-pointer  h-[400px]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-2 border-gray-900 mx-auto'>
                                <img src={item.image} alt="" className=' rounded-md group-hover:opacity-90 group-hover:p-2 transition-all duration-200' />
                                <div className='py-2 px-2 ' >
                                    <span className='font-semibold'>{item.title}</span>
                                    <p className='mt-2'>{item.description}</p>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
       </div>
    )
}

export default Projects
