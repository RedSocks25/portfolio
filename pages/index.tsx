import type { NextPage } from 'next';
import Image from 'next/image';

import { PresentationCard } from '../components/ui';


const HomePage: NextPage = () => {
  return (
    <>
      <div className='grid grid-cols-2 bg-sizzling-redp-8 h-screen'> {/* Presentation <Div> */}
        
        {/* Message and presentation card */}
        <div className='grid grid-row columns-1 p-5 space-y-10'> 
          
          {/* Entry Message */}
          <div className='flex items-center'>
            <p className='text-5xl text-center text-white'>
              <span className='text-8xl text-cerulean-blue inline-block align-baseline'>Coding </span> gives the power to do <span className='text-8xl inline-block align-b aseline text-cerulean-blue'> Whatever </span> we want
            </p>
          </div>

          {/* Presentation Card */}
          <div className='flex justify-center'>
            <PresentationCard />
          </div>
          
        </div>

        <div className='columns-1 flex items-center justify-center'>
          <Image
            src={'/img/iconv2.png'}
            height={ 150 }
            width={ 150 }
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
