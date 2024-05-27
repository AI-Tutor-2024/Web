export interface Note {
    title: string;
    status: string;
    step: string;
    date: string;
    duration: string;
    icon: string;
  }
  
  export const notes: Note[] = [
    {
      title: '캡스톤디자인_1주차',
      status: '학습 완료',
      step: '3단계 / 3단계',
      date: '2024.03.06',
      duration: '72분',
      icon: 'check_circle_filled',
    },
    {
      title: '캡스톤디자인_2주차',
      status: '1단계 진행중',
      step: '1단계 / 3단계',
      date: '2024.03.13',
      duration: '50분',
      icon: 'check_circle_outline',
    },
    {
      title: '캡스톤디자인_3주차',
      status: '2단계 진행중',
      step: '2단계 / 3단계',
      date: '2024.03.20',
      duration: '90분',
      icon: 'check_circle_outline',
    },
    {
      title: '캡스톤디자인_4주차',
      status: '3단계 진행중',
      step: '3단계 / 3단계',
      date: '2024.03.27',
      duration: '80분',
      icon: 'check_circle_outline',
    }
  ];
  