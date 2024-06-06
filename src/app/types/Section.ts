export interface Section {
    id: number;
    name: string;
    professor: string;
  }
  
  export interface SectionModalProps {
    onClose: () => void;
    addSection: (name: string, professor: string) => void;
  }
  
  export interface CTANewSectionProps {
    addSection: (name: string, professor: string) => void;
  }