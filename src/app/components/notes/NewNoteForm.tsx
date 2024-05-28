"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import CTANewNote from '../button/CTANewNote';


const NewNoteForm = () => {
  const [form, setForm] = useState({
    folder: '',
    professor: '',
  });
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('folder', form.folder);
    formData.append('professor', form.professor);
    if (file) {
      formData.append('file', file);
    }

    await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <div className="w-full h-full bg-bgGray text-white p-8">
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-[15px] font-Pretendard font-normal text-mainWhite">노트 정보를 입력해 주세요</label>
        <input
          type="text"
          name="folder"
          value={form.folder}
          onChange={handleChange}
          placeholder="예) 캡스톤디자인 1주차"
          className="mt-1 block bg-bgGray text-mainWhite text-[22px] rounded-md py-1 pr-2 pl-0 "
        />
      </div>
      <div className = "flex flex-row gap-12">
        <label className="text-[16px] text-start font-normal font-Pretendard text-mainWhite justify-center flex flex-col items-center">폴더</label>
        <input
          type="text"
          name="folder"
          value={form.folder}
          onChange={handleChange}
          className="mt-1  bg-[#252424] text-white  h-[34px] w-[150px] rounded-[20px] px-3"
        />
      </div>
      <div className = "flex flex-row gap-9 ">
        <label className="text-[16px] font-normal font-Pretendard text-mainWhite justify-center flex flex-col text-center items-center">교수자</label>
        <input
          type="text"
          name="professor"
          value={form.professor}
          onChange={handleChange}
          className="mt-1  bg-[#252424] text-white  h-[34px] w-[120px] rounded-[20px] px-3"
        />
      </div>
      <div className = "flex flex-row gap-5" >
        <label className="text-[16px] mt-[8px] font-normal font-Pretendard text-mainWhite justify-start flex flex-col text-start items-start flex-shrink-0">강의 음성</label>
        <div className="mt-1 flex justify-between w-full">
          <label
            htmlFor="file-upload"
            className="flex flex-col justify-start w-[730px] h-32 rounded-[12px] p-5 cursor-pointer bg-[#252424] text-gray-400 hover:text-gray-500 hover:bg-bgDeepGray"
          >
            <div className="flex flex-col text-start items-start justify-start">
              <p className="mb-1 text-sm text-[#D9D9D9]">
                <span className="font-normal">파일을 업로드 하거나 클릭하세요</span>
              </p>
              <p className="text-xs text-gray-500">'파일 첨부'를 클릭하거나 음성 파일을 직접 끌어다 놓으세요.(파일 길이: 최대 120분, 지원 형식: m4a, mp3, wav)</p>
            </div>
            <div className="mt-3 flex flex-col justify-end items-end">
                <button className = "pr-3 pl-2 py-2 flex flex-row gap-1 rounded-md bg-[#5F5F5F]">
                  <Image src="icon_upload.svg" alt="file-upload" width={22} height={22} />
                  <span className="text-[14px] text-mainWhite">파일 첨부</span>
                </button>
              </div>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>
    </form>
  </div>
  );
};

export default NewNoteForm;
