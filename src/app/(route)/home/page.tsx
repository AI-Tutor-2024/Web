"use client"
import { useState } from 'react';
import Image from "next/image"
import Sidebar from "@/app/components/layout/Sidebar"
import SectionFolder from '@/app/components/section/SectionFolder';
import CTANewSection from '@/app/components/button/CTANewSection';

const home = () => {
  const [sections, setSections] = useState<{ subject: string; professor: string }[]>([]);

  const addSection = (section: { subject: string; professor: string }) => {
    setSections([...sections, section]);
  };

  return (
    <div className = "flex flex-row bg-bgDeepGray ">
        <Sidebar />
        <div className = "w-full flex flex-col justify-between">
            <div className = "px-8 py-8 font-Pretendard font-semibold leading-[70px] text-[57px] text-custom-green">
                안녕하세요 상민님,<br/>
                오늘은 자기주도학습 <p className = "font-Pretendard font-semibold text-[57px] text-mainWhite inline-block"> 01일차</p>예요!
            </div>
            <div className = "border-t-2 h-[600px] border-r-2 border-l-2 border-[#929292]/[0.4] rounded-t-xl rounded-r-ml rounded-l-ml bg-[#242424]">
                <div className="mx-4 my-4 flex flex-row justify-between items-center ">
                    <div className = "flex flex-row gap-2 ">  
                        <Image src="ic_side_all.svg" alt="logo" width={24} height={24} />
                        <p className="text-white text-[18px]">수강과목</p>
                    </div>
                    <div>
                        <CTANewSection addSection={(name: string, professor: string) => addSection({ subject: name, professor })}/>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-3 px-4">
                    {sections.map((section, index) => (
                      <SectionFolder key={index} subject={section.subject} professor={section.professor} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default home;