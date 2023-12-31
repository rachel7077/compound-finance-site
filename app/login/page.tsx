import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';
import page2_header from './page2_header.png'
import one from './one.png'
import two from './two.png'
import React, { useState } from 'react';

export default function Page() {
  return (
    <main>
      <div>
        <Image
          src={page2_header}
          style={{ width: '100%' }}
          alt="logo"
        />
      </div>
      <div className="flex grow flex-col gap-4 md:flex-row justify-center">
        <div className='py-4'>
          <div><p className="text-xl font-bold">Tell us a little more about your financial personality.</p></div>
        </div>
      </div>
        <div className={styles.leftElement}>
          <div className="flex p-4">
            <Image
              src={one}
              width={50}
              alt="logo"
            />
            <label className="text-black-600 p-4 font-bold">Financial Information</label>
          </div>
          <div className="flex">
            <label style={{ marginLeft: 80 }} className="text-black-600 font-bold">Income</label>
          </div>
          <div style={{ marginLeft: 80 }} className="py-4 flex">
            <select>
              <option value="select">Select</option>
              <option value="otherOption">Under 15,000</option>
              <option value="otherOption">15,000 to 24,999</option>
              <option value="otherOption">25,000 to 34,999</option>
              <option value="otherOption">35,000 to 49,999</option>
              <option value="otherOption">50,000 to 74,999</option>
              <option value="otherOption">75,000 to 99,999</option>
              <option value="otherOption">100,000 to 149,999</option>
              <option value="otherOption">200,000 and over</option>
            </select>
          </div>
          <div style={{ marginLeft: 80 }} className="flex py-4">
            <label className="text-black-600 font-bold">Relationship Status</label>
          </div>
          <div style={{ marginLeft: 80 }} className="flex py-4 option-container">
            <input type="radio" name="select" id="option-1" className="input-radio" />
            <label className="option-1">
              <div className="dot"></div>
              <span className="p-4">Single</span>
            </label>
          </div>
          <div style={{ marginLeft: 80 }} className="flex py-4 option-container">
            <input type="radio" name="select" id="option-1" className="input-radio" />
            <label className="option-1">
              <div className="dot"></div>
              <span className="p-4">Married, filing taxes together</span>
            </label>
          </div>
          <div style={{ marginLeft: 80 }} className="flex py-4 option-container">
            <input type="radio" name="select" id="option-1" className="input-radio" />
            <label className="option-1">
              <div className="dot"></div>
              <span className="p-4">Married, filing taxes separately</span>
            </label>
          </div>
        </div>
      <div className={styles.rightElement}>
        <div className="flex p-4">
          <Image
            src={two}
            width={63}
            alt="logo"
          />
          <label className="text-black-600 p-4 font-bold">My Financial Interests</label>
        </div>
        <div style={{ marginLeft: 90}}>
          <div style={{ flexDirection: "row" }} className="flex py-4 option-container">
          <input  style={{ marginLeft: 10}} type="radio" id="option-1" className="input-radio" />
          <label className="option-1 py-4 text-black w-40 rounded-lg bg-crisp-100 p-4 cursor-pointe">
              Budgetting
            </label> 
            <input  style={{ marginLeft: 10}} type="radio" id="option-1" className="input-radio" />
            <label className="option-1 py-4 text-black w-40 rounded-lg bg-crisp-100 p-4 cursor-pointe">
              Investing
            </label>  
            <input  style={{ marginLeft: 10}} type="radio" id="option-1" className="input-radio" />
            <label className="option-1 py-4 text-black w-40 rounded-lg bg-crisp-100 p-4 cursor-pointe">
              Credit Management
            </label>     
          </div>
          <div style={{ flexDirection: "row" }} className="flex py-4 option-container">
          <input  style={{ marginLeft: 10}} type="radio" id="option-1" className="input-radio" />
          <label className="option-1 py-4 text-black w-40 rounded-lg bg-crisp-100 p-4 cursor-pointe">
              Debt Management
            </label> 
            <input  style={{ marginLeft: 10}} type="radio" id="option-1" className="input-radio" />
            <label className="option-1 py-4 text-black w-40 rounded-lg bg-crisp-100 p-4 cursor-pointe">
              Retirement Planning
            </label> </div>
          <div className="py-4" style={{ flexDirection: "row" }}>
          <input  style={{ marginLeft: 10}} type="radio" id="option-1" className="input-radio" />
          <label className="option-1 py-4 text-black w-40 rounded-lg bg-crisp-100 p-4 cursor-pointe">
              Tax Planning
            </label> 
            <input  style={{ marginLeft: 10}} type="radio" id="option-1" className="input-radio" />
            <label className="option-1 py-4 text-black w-40 rounded-lg bg-crisp-100 p-4 cursor-pointe">
              Goal Setting
            </label>  
            <input  style={{ marginLeft: 10}} type="radio" id="option-1" className="input-radio" />
            <label className="option-1 py-4 text-black w-40 rounded-lg bg-crisp-100 p-4 cursor-pointe">
              Estate Planning
            </label>
            </div>
        </div>
        <div style={{ marginLeft: 425 }} className="py-4">
          <Link
            className="text-white flex w-40 rounded-lg bg-blue-400 p-4 cursor-pointer"
            key="Login"
            href={'complete'}
          >
            Next
          </Link>
          </div>
        </div>
    </main>
  );
}

// <div className={styles.newContainer}>
//     <div className={styles.leftElement}>
//         left
//     </div>
//     <div className={styles.rightElement}>
//         right
//     </div>
// </div>