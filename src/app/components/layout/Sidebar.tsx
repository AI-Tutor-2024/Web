import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="w-[223px] h-screen justify-between flex flex-col bg-mainBlack">
        <div>
            <Link href="/home">
            <div className="px-8 py-8">
                <Image src="/icon.svg" alt="logo" width={100} height={100} />
            </div>
            </Link>
            {/* 요소 */}
            <div>
                <div className = "hover:bg-#3c3c3c active:#3c3c3c ">
                <Link href="/home">
                    <div className="bg- px-8 py-2 flex flex-row text-center gap-3">
                        <Image src="ic_side_home.svg" alt="logo" width={20} height={20} />
                        <p className="text-white">홈</p>
                    </div>
                </Link>
                </div>
                <div className = "flex flex-col">
                    <div className="px-8 py-2 flex flex-row text-center gap-3">
                        <Image src="ic_side_all.svg" alt="logo" width={20} height={20} />
                        <p className="text-white">수강과목</p>
                    </div>
                    <div className = "flex flex-">
                    </div>
                </div>
            </div>
        </div>
        {/* 로그아웃, 가이드보기 */}
        <div className = "pb-8">
            <div className = "flex flex-row px-9 py-2 gap-3 hover:bg-#3c3c3c">
                <Image src = "logout.svg" alt = "logo" width = {15} height = {15} />
                <p className = "text-white">로그아웃</p>
            </div>
            <div className = "flex flex-row px-[35px] py-2 gap-3 hover:bg-#3c3c3c">
                <Image src = "guide.svg" alt = "logo" width = {18} height = {18} />
                <p className = "text-white">가이드보기</p>
            </div>
        </div>
    </div>
  ) 
}

export default Sidebar;