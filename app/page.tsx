import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';
import logo from './logo.png'
import purpleCharacter from './purpleCharacter.png'
import yellowCharacter from './yellowCharacter.png'
import orangeCharacter from './orangeCharacter.png'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex w-full h-20 items-end shrink-0 bg-crisp-100 p-4 md:h-20">
        <Image
          src={logo}
          alt="logo"
        />
        <label className="text-blue-600 font-bold">Compound</label>
      </div>

      <div className="flex justify-center h-80 grow" >
        <div className='p-10 align-middle pt-40 '>
          <Image
            src={purpleCharacter}
            width={150}
            alt="logo"
          />
        </div>
        <div className="align-middle pt-40" >

          <div >
            <div>
              <div><p className="text-xl font-bold">Your start to financial literacy.</p></div>
              <div className='py-4'>
                <label className="font-medium">Email address</label>
                <div>
                  <input
                    placeholder='Enter email address'
                    className="w-80 bg-gray-200 size-full rounded-lg"
                    type="text"
                  />
                </div>
              </div>
              <div className='py-4'>
                Password
                <div>
                  <input
                    className="w-80 bg-gray-200 size-full rounded-lg"
                    placeholder='Enter password'
                    type="password"
                  />
                </div>
              </div>
              <div className=' flex grow flex-col gap-4 md:flex-row justify-center py-4'>
                <Link
              className="grow text-center text-white rounded-lg bg-blue-400 p-4 cursor-pointer"
              key="Login"
                  href={'login'}
                >
                    Sign up now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='py-20'>
          <div className="align-top p-4 b-20">
            <Image
              src={orangeCharacter}
              width={175}
              alt="logo"
            />
          </div>
          <div className="align-bottom pt-20">
            <Image
              src={yellowCharacter}
              width={200}
              alt="logo"
            />
          </div>
        </div>
      </div>



    </main>
  );
}
