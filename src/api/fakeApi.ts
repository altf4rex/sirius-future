import { User, UserData, Lesson } from '../types';

export const fakeAuthApi = async (email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password123') {
        resolve({ email, name: 'Михаил' });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 1000);
  });
};

export const fakeFetchUserData = async (): Promise<UserData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: { email: 'test@example.com', name: 'Михаил' },
        lessons: [
          { id: 1, title: 'Ментальная Арифметика', count: 32 },
          { id: 2, title: 'Программирование', count: 0 },
          { id: 3, title: 'Скорочтение', count: 4 },
        ],
        upcomingLessons: [
          { id: 1, date: '1 мая', title: 'Ментальная Арифметика', time: '14:00-14:25', teacher: 'Белкина Инна' },
          { id: 2, date: '30 октября', title: 'Программирование', time: '11:00-11:45', teacher: 'Животновская Оксана' },
          { id: 3, date: '16 ноября', title: 'Скорочтение', time: '09:00-09:45', teacher: 'Мин Елена' },
        ],
      });
    }, 1000);
  });
};

export const fetchLessons = async (): Promise<Lesson[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Ментальная арифметика', start: '2024-03-01T13:00:00', end: '2024-03-01T13:45:00' },
        { id: 2, title: 'Программирование', start: '2024-03-02T13:00:00', end: '2024-03-02T13:45:00' },
        { id: 3, title: 'Скорочтение', start: '2024-03-02T13:00:00', end: '2024-03-02T13:45:00' },
      ]);
    }, 1000);
  });
};
