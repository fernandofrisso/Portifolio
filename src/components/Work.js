import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';

const Work = () => {

  return (

    <section className='section' id='work'>

      <div className='container mx-auto'>

        <div className='flex flex-col lg:flex-row gap-x-10'>

          <motion.div 

            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView='show'
            viewport={{once: false, amount:0.3}}
            className='flex-1 flex flex-col gap-y-12 mb-110 lg:mb-0'

          >

            {/*text*/}

            <div>

              <h2 className='h2 leading-tight text-accent' >My Latest <br/>
                  Work
              </h2>

              <p className='max-w-sm mb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac eros lorem. Nulla facilisi</p>

              <button className='btn btn-sm'> View All Projects</button>

            </div >

            {/*img*/}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>

              <div className='group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300'> </div>

              <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt=''/>

              <div className='absolute -bottom-ful left left-12 group-hover:bottom-24 transition-all duration-300 z-50'> 
              
                <span className='text-gradient'>UI/UX Design</span>

              </div>

              <div className='absolute -bottom-ful left left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                
                <span className='text-3x1 text-white'>Project Tittle</span>

              </div>

            </div>

          </motion.div>

          <motion.div 

            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{once: false, amount:0.3}}
            className='flex-1 flex flex-col gap-y-10'
            
          >
            
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>

              <div className='group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300'> </div>

              <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt=''/>

              <div className='absolute -bottom-ful left left-12 group-hover:bottom-24 transition-all duration-300 z-50'> 
              
                <span className='text-gradient'>UI/UX Design</span>

              </div>

              <div className='absolute -bottom-ful left left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                
                <span className='text-3x1 text-white'>Project Tittle</span>

              </div>

            </div>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'>

              <div className='group-hover:bg-black/70 w-full absolute z-40 transition-all duration-300'> </div>

              <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt=''/>

              <div className='absolute -bottom-ful left left-12 group-hover:bottom-24 transition-all duration-300 z-50'> 
              
                <span className='text-gradient'>UI/UX Design</span>

              </div>

              <div className='absolute -bottom-ful left left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                
                <span className='text-3x1 text-white'>Project Tittle</span>

              </div>

            </div>
            
          </motion.div>

        </div>
        
      </div>;

    </section>

  )

};

export default Work;
