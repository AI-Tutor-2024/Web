export interface SectionModalProps {
    onClose: () => void;
    addSection: (section: { subject: string; professor: string }) => void;
  }
  
  export interface CTANewSectionProps {
    addSection: (section: { subject: string; professor: string }) => void;
  }