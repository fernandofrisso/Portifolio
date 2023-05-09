import React from 'react';

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const About = () => {

  const [ref, inView] = useInView()

  return (

    <section className='section' id='about' ref={ref}>
      
      <div className='container mx-auto'>

        <div>

          {/*img*/}
          <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></div>

          {/*txt*/}

          <div>

            <h2> About me.</h2>

            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>

            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet magna quis tellus vehicula maximus. Quisque vitae lectus sed leo dictum dictum at at ipsum.
            </p>

            {/*stats*/}

            <div>

              <div>

                <div className='text-[40px] font-tertiary text-gradient mb-2'>

                  <CountUp start={0} end={13} duration={3}/>

                </div>

                <div className='font-primary text-sm tracking-[2px] '>
                  
                  Years of <br/>
                  Experience</div>

              </div>

            </div>

          </div>

        </div>

      </div>
    
    </section>

  );

};

export default About;
