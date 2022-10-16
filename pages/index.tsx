import type { NextPage } from 'next';
import Image from 'next/image';
import { PresentationCard } from '../components/ui';


const HomePage: NextPage = () => {
  return (
    <>
      <div className='grid grid-cols-2 bg-sizzling-red h-screen p-8'> {/* Presentation <Div> */}
        
        {/* Message and presentation card */}
        <div className='columns-1 p-5 space-y-10'> 
          
          {/* Entry Message */}
          <div className='flex items-center'>
            <p className='text-5xl text-center text-white'>
              <span className='text-8xl text-cerulean-blue'>Coding</span> is a power with which we can do <span className='text-8xl text-cerulean-blue'>whatever</span> we want
            </p>
          </div>

          {/* Presentation Card */}
          <PresentationCard />
          
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
