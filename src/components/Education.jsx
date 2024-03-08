import React from 'react'

const Education = () => {

  const workExp = [
    {
      place: "School of Management Sciences",
      tenure: "Aug 2021 - Sep 2024",
      role: " Bachelors's in Computer Application",
      detail:
        "I am doing BCA from varanasi which is affiliated with Mahatma Gandhi Kashi Vidyapith University.I made many projects  ",
    },
    {
      place: "RPM Academy",
      tenure: "March 2021",
      role: "Inter College 12th Class",
      detail:
        "I passed my Inter from Kauriram Gorakhpur With 83.17 percentage . I am very happy to share it you . My School , Missing ❤️",
    },
    {
      place: "RPM Academy",
      tenure: "March 2019",
      role: "High School 10th Class",
      detail:
        "I passed my high schooling from Kauriram Gorakhpur With 82 percentage. I am very happy to share it you . My School , Missing ❤️",
    },
  ];

  return (
    <div className='py-12 mx-auto'>
      <h1 className='text-[2.5rem] font-bold text-center'>My Education</h1>

      {workExp.map((item) => (<div className='grid grid-cols-3 gap-4 mt-16 mx-auto w-10/12 '>
        <div className="min-w-[40%] ">
          <p className='text-[1.5rem] font-semibold'>{item.place}</p>
          <span>{item.tenure}</span>
        </div>  

        <div className='min-w-[0%] border-2 border-dashed max-h-fit md:h-20  w-0 mx-auto border-gray-800'>
        </div>

        <div className=' overflow-auto min-w-[40%]'>
          <p className='text-[1.5rem] font-semibold'>{item.role}</p>
          <span>{item.detail}</span>
        </div>
      </div>))}
    </div>
  )
}

export default Education
