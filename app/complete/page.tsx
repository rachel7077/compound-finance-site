import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';
import page3_header from './page3_header.png'
import final_page from './final_page.png'

export default function Page() {
    return (
        <main>
        <div>
        <Image
          src={page3_header}
          style={{width: '100%'}}
          alt="logo"
        />
        </div>
        <div className="flex grow flex-col gap-4 md:flex-row justify-center">
            <div className='py-4'>
              <p className="flex grow flex-col gap-4 md:flex-row justify-center text-xl font-bold">Welcome to Compound.</p>
            <div className='py-4'>
         <p className="flex grow flex-col gap-4 md:flex-row justify-center font-medium">Congrats on finishing your onboarding! As a reward, you've earned your first badge:</p> 
         <p className="flex grow flex-col gap-4 md:flex-row justify-center font-medium font-bold">Profile Perfection!</p>
        </div>
        <div className='flex grow flex-col gap-4 md:flex-row justify-center py-4'>
        <Image
          src={final_page}
          width={600}
          alt="logo"
        />
        </div>
        <div className='py-4'> 
        <p className="p-4 flex grow flex-col gap-4 md:flex-row justify-center font-medium">You've earned it for taking the first step towards financial empowerment. We're here to support you every step of the way. Start exploring more features to continue your financial journey!</p> 
        </div>
        <div className='flex grow flex-col gap-4 md:flex-row justify-center py-4'>
        <Link 
        className="text-white flex w-40 rounded-lg bg-blue-400 p-4 cursor-pointer"
        key="Login"
        href={'login'}
        >
        Go to Dashboard
        </Link>
        </div>
      </div>
      </div>
    </main>
  );
}

  {/* <div className="flex grow flex-col gap-4 md:flex-row justify-center">
          <div className='py-4'>
            <p className="text-xl font-bold">Welcome to Compound.</p>
            </div>
            <div className='py-4'>
            <p className="text-xl">Congrats on finishing your onboarding! As a reward, you've earned your first badge: Profile Perfection!</p>
            </div>
            </div> */}