"use client";
import { useState } from 'react';
import React from 'react'
import Image from 'next/image';
import SectionModify from '../modal/SectionModify';

const SectionFolder: React.FC = () => {
  const [showModify, setShowModify] = useState(false);

  const handleMenuClick = () => {
    setShowModify(!showModify);
    console.log('clicked')
  };

  return (
    <div>
        <div className = "relative">
          <Image src="/folder.svg" alt="logo" width={500} height={500} />
          <div className = "absolute w-full mb-[12px] ml-[12px] mt-[-52px] pr-[20px] ">
            <div className = "flex justify-between">
              <div className = "flex flex-col">
                <p className = "text-mainBlack font-Pretendard font-medium text-[18px] ">
                    캡스톤디자인
                </p>
                <p className="text-[#1D1D1D]/[0.5] font-Pretendard font-normal text-[11px]">
                    김대원
                </p>
              </div>
              <div className="mt-[4px]">
              <Image
                src="kebab-menu.svg"
                alt="menu"
                width={20}
                height={20}
                onClick={handleMenuClick}
                className="cursor-pointer"
              />
            </div>
            </div>
          </div>
          {showModify && (
        <div className="absolute right-0 top-10 bg-[#343434] rounded-[8px] shadow-2xl">
          <SectionModify />
        </div>
        )}
        </div>
  
      
    </div>
  )
}

export default SectionFolder