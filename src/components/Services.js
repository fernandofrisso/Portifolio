import React from 'react';

import {BsArrowUpRight} from 'react-icons/bs';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const services = [

    {
      name: 'UI/UX Design',
      descripition:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac eros lorem. Nulla facilisi. In cursus, dui in varius ultrices, nisi dui sagittis dui, ac lobortis diam nunc ut enim',
      link: 'Learn More'
    },

    {
      name: 'Developer',
      descripition:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac eros lorem. Nulla facilisi. In cursus, dui in varius ultrices, nisi dui sagittis dui, ac lobortis diam nunc ut enim',
      link: 'Learn More'
    }

]


const Services = () => {

  return(

    <section className='section' id='service'>
      
      <div  className='container mx-auto'>

        <div className='flex flex-col lg:flex-row'> 

          {/*text & img */}

          <motion.div 

          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView='show'
          viewport={{once: false, amount:0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'

          >

              <h2 className='h2 text-accent mb-6'> What I do</h2>

              <h3 className='h3 max-w-[450px] m-16'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <button className='btn btn-sm'>See my work</button>
          </motion.div>

          {/*services*/}

          <motion.div 

          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView='show'
          viewport={{once: false, amount:0.3}}
          className='flex-1'
          
          > 

            {/*service list*/}
            <div>
              
              {services.map((service, index)=>{

                const {name, descripition, link} = service

                return(

                  <div 
                  
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                   
                   >
                    
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] trancking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tigh'>{descripition}</p>
                    </div>

                    <div className='flex flex-col flex-1 items-end'>

                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                       
                        <BsArrowUpRight/>

                      </a>

                      <a  className='text-gradient text-sm' href='#'>{link}</a>

                    </div>

                  </div>

                )

              })}
            
            </div>

          </motion.div>

        </div>
        
      </div>
      
    </section>
  )
};

export default Services;
