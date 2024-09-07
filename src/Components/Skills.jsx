import React from 'react'
import '../assets';
import { skill } from './../assets'
import './../Constants'
import { skillsList, workDetail } from './../Constants'
import fast from '../assets/fast-forward.png';



const Skills = () => {
  return (
     <div className='mt-10' id="skills">
        <div className='flex flex-row justify-center items-center'>
        <img src={skill} alt='' className="w-[70px] hover:animate-bounce "/>
        <h1 className='text-[40px] font-bold'>Skills & <span className='text-purple-600'>Experties</span></h1>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-row justify-evenly px-8 md:px-0 mt-8 '>
          <div className='grid grid-cols-4 md:grid-cols-4 gap-8  items-center'>
            {skillsList.map((item, index)=>(
                <div className='w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full' >
                    <img src={item.icon} alt='' className="w-[60px]"/>
                </div>
               
            ))}
          </div>
                <div className='flex mt-5 flex-col justify-end  md:mt-0 lg:mt-0'>
                    {workDetail.map((item,index)=>(
                        <div className='flex flex-row p-2 mb-6'>
                            <div className='mt-2 w-[15px]'>
                                 <img src={fast} alt='' />
                            </div>
                            <div>
                                <h3 className='font-bold text-[20px] w-full'>{item.position}</h3>
                                <h3 className='font-thin text-[15px] text-gray-400'>{item.details}</h3>
                                </div>
                        </div>
                       
                    ))}
                 
                </div>
        </div>
    </div>

  )
}

export default Skills


