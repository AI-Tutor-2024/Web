import Sidebar from '@/app/components/layout/Sidebar'
import React from 'react'
import Image from 'next/image';
import CreateNewFile from '@/app/components/button/CTANewFile';

const classNotes = () => {
  return (
    <div className = "flex flex-row bg-bgGray">
        <Sidebar/>
        <div className = "w-full ">
            {/* 수강과목 제목 헤더 */}
            <div className = "flex flex-row justify-between px-8 py-6">
                <div className = "flex flex-col">
                    <p className = "font-Pretendard text-[20px] text-mainWhite">
                        캡스톤디자인
                    </p>
                    <div>
                        <p className = "font-Pretendard text-[14px] text-mainWhite/[0.4]">
                            김대원
                        </p>
                    </div>
                </div>
                <div>
                    <Image src = "kebab-menu.svg" alt = "logo" width = {20} height = {20} className=' invert' />
                </div>
            </div>
            {/* 목록 보여지는 페이지, 노트가 아무것도 없을 때 있을 때 다르게 보여지게 처리 */}
            <div className = "h-full mt-[-100px] flex flex-col justify-center items-center ">
                <div className = "text-center pb-3 flex-shrink-0">
                    <p className = "pretendard-font font-normal text-[20px] text-mainWhite">
                    노트를 만들어 보세요.
                    </p>
                    <p className = " pretendard-font font-light text-[18px] text-mainWhite/[0.3] leading-6">
                    녹음을 하거나 파일을 업로드하면 <br/>
                    텍스트로 확인할 수 있어요.
                    </p>
                </div>
                <CreateNewFile/>
            </div>
        </div>
    </div>
  )
}

export default classNotes