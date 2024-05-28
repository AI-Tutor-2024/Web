import React from 'react';
import NewNoteForm from '@/app/components/notes/NewNoteForm';
import Sidebar from '@/app/components/layout/Sidebar';
import CTANewNote from '@/app/components/button/CTANewNote';

const NewNotePage: React.FC = () => {
  return (
    <div className="flex flex-row bg-bgGray h-full">
      <Sidebar />
      <div className = "justify-between flex flex-col items-end w-full ">
        <NewNoteForm />
        <div className = "p-8">
          <CTANewNote />
        </div>
      </div>
    </div>
  );
};

export default NewNotePage;
