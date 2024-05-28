import React from 'react'
import Image from 'next/image'
import CreateNewFile from '../button/CTANewFile'
import Link from 'next/link'
const SectionInfo = () => {
  return (
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
        <div className = "flex flex-row gap-3">
             <Link href="/createNotes">
              <CreateNewFile />
            </Link>
            <Image src = "kebab-menu.svg" alt = "logo" width = {24} height = {24} className=' invert' />
        </div>
    </div>
  )
}

export default SectionInfo