import React from 'react'
import Sidebar from '@/app/components/layout/Sidebar'
import Link from 'next/link';
import Image from 'next/image';
import SectionFolder from '@/app/components/section/SectionFolder';

const home = () => {
  return (
    <div className = "flex flex-row bg-bgDeepGray ">
        <Sidebar />
        <div className = "w-full flex flex-col justify-between">
            <div className = "px-8 py-8 font-Pretendard font-semibold leading-[70px] text-[57px] text-custom-green">
                안녕하세요 상민님,<br/>
                오늘은 자기주도학습 <p className = "font-Pretendard font-semibold text-[57px] text-mainWhite inline-block"> 01일차</p>예요!
            </div>
            <div className = "border-t-2 h-[600px] border-r-2 border-l-2 border-[#929292]/[0.4] rounded-t-xl rounded-r-ml rounded-l-ml bg-[#242424]">
                <Link href="/home">
                <div className="mx-4 my-4 flex flex-row justify-between ">
                    <div className = "flex flex-row gap-2 ">  
                        <Image src="ic_side_all.svg" alt="logo" width={20} height={20} />
                        <p className="text-white">수강과목</p>
                    </div>
                    <div className = "invert">
                        <Image src="kebab-menu.svg" alt="logo" width={20} height={20} />
                    </div>
                </div>
                </Link>
                <div className="grid grid-cols-5 gap-3 px-4">
                    <SectionFolder/>
                    <SectionFolder/>
                    <SectionFolder/>
                    <SectionFolder/>
                    <SectionFolder/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default home