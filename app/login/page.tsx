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
          <div className='py-8'><p className="text-xl font-extrabold">Tell us a little more about your financial personality.</p></div>
        </div>
      </div>
      <div className="flex grow flex-col gap-4 md:flex-row justify-center">
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
            <label style={{ marginLeft: 80 }} className="text-black-600 font-semibold">Income</label>
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
            <label className="text-black-600 font-semibold">Relationship Status</label>
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
          <div className="flex p-3">
            <Image
              src={two}
              width={63}
              alt="logo"
            />
            <label className="text-black-600 p-4 font-bold">My Financial Interests</label>
          </div>
          <div style={{ marginLeft: 90 }}>
            <div style={{ flexDirection: "row" }} className="flex py-4 option-container">
              <label className="option-1 py-6 text-black w-40 rounded-lg bg-crisp-100 p-4 cursor-pointer">
                Budgeting
                <input style={{ marginLeft: 10 }} type="radio" id="option-1" className="input-radio" />
              </label>
              <label style={{ marginLeft: 20 }} className="option-1 py-6 text-black w-40 rounded-lg bg-crisp-100 p-4 cursor-pointer">
                Investing
                <input style={{ marginLeft: 10 }} type="radio" id="option-1" className="input-radio" />
              </label>
              <label style={{ marginLeft: 20 }} className="option-1 py-4 text-black w-40 rounded-lg bg-crisp-100 p-4 cursor-pointer">
                Credit
                <input style={{ marginLeft: 10 }} type="radio" id="option-1" className="input-radio" />
                Management
              </label>
            </div>
            <div style={{ flexDirection: "row" }} className="flex py-4 option-container">
              <label className="option-1 py-6 text-black w-40 rounded-lg bg-crisp-100 p-4 cursor-pointer">
                Debt Management
                <input style={{ marginLeft: 10 }} type="radio" id="option-1" className="input-radio" />
              </label>
              <label style={{ marginLeft: 20 }} className="option-1 py-6 text-black w-40 rounded-lg bg-crisp-100 p-4 cursor-pointer">
                Retirement Planning
                <input style={{ marginLeft: 10 }} type="radio" id="option-1" className="input-radio" />
              </label> </div>
            <div className="py-6" style={{ flexDirection: "row" }}>
              <label className="option-1 py-4 text-black w-40 rounded-lg bg-crisp-100 p-4 cursor-pointer">
                Tax Planning
                <input style={{ marginLeft: 10 }} type="radio" id="option-1" className="input-radio" />
              </label>
              <label style={{ marginLeft: 30 }} className="option-1 py-4 text-black w-40 rounded-lg bg-crisp-100 p-4 cursor-pointer">
                Goal Setting
                <input style={{ marginLeft: 10 }} type="radio" id="option-1" className="input-radio" />
              </label>
              <label style={{ marginLeft: 30 }} className="option-1 py-4 text-black w-40 rounded-lg bg-crisp-100 p-4 cursor-pointer">
                Estate Planning
                <input style={{ marginLeft: 10 }} type="radio" id="option-1" className="input-radio" />
              </label>
            </div>
          </div>
          <div style={{ marginLeft: 490 }} className=' flex grow flex-col gap-4 md:flex-row justify-center py-4'>
            <Link
              className="grow text-center text-white rounded-lg bg-blue-400 p-4 cursor-pointer"
              key="complete"
              href={'complete'}
            >
                Next 
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
