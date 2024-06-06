"use client"
import React, { useState } from 'react';
import SectionModal from '../modal/SectionModal';
import { CTANewSectionProps } from '../../types/Section';

const CTANewSection = ({ addSection }: CTANewSectionProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => setShowModal(true);

  return (
    <>
      <button className="cursor-pointer" onClick={handleButtonClick}>
        <div className="h-[46px] flex justify-center items-center w-[160px] flex-shrink-0 bg-[#3F3F3F] border-2 border-[#565656] rounded-[27px] hover:bg-[#282828] text-mainWhite hover:text-[#878787]">
          <p className="font-Pretendard text-[18px] text-center">새 과목 만들기</p>
        </div>
      </button>
      {showModal && <SectionModal onClose={() => setShowModal(false)} addSection={({ subject, professor }) => addSection(subject, professor)} />}
    </>
  );
};

export default CTANewSection;