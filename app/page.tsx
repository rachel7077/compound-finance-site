import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';
import logo from './logo.png'
import purpleCharacter from './purpleCharacter.png'
import yellowCharacter from './yellowCharacter.png'
import orangeCharacter from './orangeCharacter.png'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 items-end shrink-0 bg-crisp-100 p-4 md:h-20">
      <Image
        src={logo}
        alt="logo"
      />
        <label className="text-blue-600 font-bold">Compound</label>
      </div>
      <div className={styles.container}>
      <Image
        src={orangeCharacter}
        width={250}
        height={250}
        alt="logo"
      />
      </div>
      <div className="flex grow flex-col gap-4 md:flex-row justify-center">
          <div>
            <div><p className="text-xl font-bold">Your start to financial literacy.</p></div>
          <div className='py-4'>
       <label className="font-medium">Email address</label>
      <div>
        <input
          placeholder='Enter email address'
          className="bg-gray-200 size-full rounded-lg"
          type="text"
          //value={}
          // onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      </div>
      <div className='py-4'> 
      Password
      <div>
        <input 
          className="bg-gray-200 size-full rounded-lg"
          placeholder='Enter password'
          type="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
        </div>
      </div>
      <div className='py-4'>
      <Link 
      className="text-white flex w-40 rounded-lg bg-blue-400 p-4 cursor-pointer"
      key="Login"
      href={'login'}
      >
      Sign up now
      </Link>
      </div>
    </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <Image
        src={purpleCharacter}
        width={200}
        height={200}
        style={{ marginBottom: '50px', marginLeft: '0px', marginRight: '10px'}}
        alt="logo"
      />
      <Image
        src={yellowCharacter}
        width={300}
        height={300}
        alt="logo"
      />
      </div>
    </main>
  );
}
