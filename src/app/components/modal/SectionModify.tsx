import React from 'react'

const SectionModify = () => {
  return (
    <div className="bg-darkGray py-[12px] px-[15px] w-[180px] rounded-md">
      <button className="block font-Pretendard font-regular text-[15px] text-left w-full text-mainWhite mb-2 hover:text-gray-300 transition-colors duration-200">
        정보
      </button>
      <button className="block font-Pretendard font-regular text-[15px] text-left w-full text-red-500 hover:text-red-700 transition-colors duration-200">
        삭제하기
      </button>
  </div>
  )
}

export default SectionModify