"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from "next/image";
import { SectionModalProps } from '../../types/SectionModalProps';

const SectionModal = ({ onClose, addSection }: SectionModalProps) => {
  const [form, setForm] = useState({ subject: '', professor: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addSection({ subject: form.subject, professor: form.professor });
    onClose();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-20">
      <div className="bg-[#3E3E3E] w-[490px] h-[440px] py-4 px-6 rounded-[20px] shadow-lg relative">
        <Image src="/folder.svg" alt="folder" width={180} height={140} className="mx-auto m-4" />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="subject">과목명</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="과목명"
              className="w-full px-3 py-2 bg-[#2E2E2E] text-white rounded-md"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="professor">교수자명</label>
            <input
              type="text"
              name="professor"
              value={form.professor}
              onChange={handleChange}
              placeholder="교수자명"
              className="w-full px-3 py-2 bg-[#2E2E2E] text-white rounded-md"
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 text-white px-4 py-2 rounded-[10px]"
            >
              취소
            </button>
            <button
              type="submit"
              className="bg-mainGreen text-white px-4 py-2 rounded-[10px]"
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SectionModal;