// types/index.ts

export interface User {
    email: string;
    name: string;
  }
  
  export interface UserLesson {
    id: number;
    title: string;
    count: number;
  }
  
  export interface Lesson {
    id: number;
    title: string;
    start: string;
    end: string;
  }
  
  export interface UpcomingLesson {
    id: number;
    date: string;
    month: string;
    title: string;
    time: string;
    teacher: string;
  }
  
  export interface UserData {
    user: User;
    lessons: UserLesson[];
    upcomingLessons: UpcomingLesson[];
  }
  
  export interface AuthState {
    user: User | null;
    error: string | null;
    loading: boolean;
  }
  
  export interface ScheduleState {
    lessons: Lesson[];
    loading: boolean;
    error: string | null;
  }
  
  
  export interface Offer {
    title: string;
    description: string;
    image: string;
  }