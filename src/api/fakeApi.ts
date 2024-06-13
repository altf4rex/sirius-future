import { User, UserData, CalendarDay } from '../types';

export const fakeAuthApi = async (email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password123') {
        resolve({ email, name: 'Михаил' });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 600);
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
          { id: 1, date: '1', month: 'мая', title: 'Ментальная Арифметика', time: '14:00-14:25', teacher: 'Белкина Инна' },
          { id: 2, date: '30', month: 'октября', title: 'Программирование', time: '11:00-11:45', teacher: 'Животновская Оксана' },
          { id: 3, date: '16',month: 'ноября', title: 'Скорочтение', time: '09:00-09:45', teacher: 'Мин Елена' },
        ],
      });
    }, 600);
  });
};

export const fetchLessons = async (): Promise<CalendarDay[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { date: '2024-02-27', lessons: [] },
        { date: '2024-03-28', lessons: [{ id: 39, title: 'Ментальная арифметика', start: '2024-03-04T13:00:00', end: '2024-03-04T13:45:00' }, { id: 40, title: 'Ментальная арифметика', start: '2024-03-04T14:00:00', end: '2024-03-04T14:45:00' }] },
        { date: '2024-03-29', lessons: [{ id: 41, title: 'Ментальная арифметика', start: '2024-03-05T13:00:00', end: '2024-03-05T13:45:00' }, { id: 42, title: 'Ментальная арифметика', start: '2024-03-05T14:00:00', end: '2024-03-05T14:45:00' }] },
        { date: '2024-02-30', lessons: [{ id: 3, title: 'Ментальная арифметика', start: '2024-02-28T13:00:00', end: '2024-02-28T13:45:00' }, { id: 4, title: 'Ментальная арифметика', start: '2024-02-28T14:00:00', end: '2024-02-28T14:45:00' }] },
        { date: '2024-03-01', lessons: [{ id: 5, title: 'Ментальная арифметика', start: '2024-03-01T13:00:00', end: '2024-03-01T13:45:00' }, { id: 6, title: 'Ментальная арифметика', start: '2024-03-01T14:00:00', end: '2024-03-01T14:45:00' }] },
        { date: '2024-03-02', lessons: [{ id: 7, title: 'Ментальная арифметика', start: '2024-03-02T13:00:00', end: '2024-03-02T13:45:00' }, { id: 8, title: 'Ментальная арифметика', start: '2024-03-02T14:00:00', end: '2024-03-02T14:45:00' }] },
        { date: '2024-03-03', lessons: [{ id: 9, title: 'Ментальная арифметика', start: '2024-03-03T13:00:00', end: '2024-03-03T13:45:00' }, { id: 10, title: 'Ментальная арифметика', start: '2024-03-03T14:00:00', end: '2024-03-03T14:45:00' }] },
        { date: '2024-03-04', lessons: [{ id: 11, title: 'Ментальная арифметика', start: '2024-03-04T13:00:00', end: '2024-03-04T13:45:00' }] },
        { date: '2024-03-05', lessons: [{ id: 12, title: 'Ментальная арифметика', start: '2024-03-05T13:00:00', end: '2024-03-05T13:45:00' }] },
        { date: '2024-03-06', lessons: [{ id: 13, title: 'Ментальная арифметика', start: '2024-03-06T13:00:00', end: '2024-03-06T13:45:00' }] },
        { date: '2024-03-07', lessons: [] },
        { date: '2024-03-08', lessons: [] },
        { date: '2024-03-09', lessons: [] },
        { date: '2024-03-10', lessons: [{ id: 17, title: 'Ментальная арифметика', start: '2024-03-10T13:00:00', end: '2024-03-10T13:45:00' }] },
        { date: '2024-03-11', lessons: [{ id: 18, title: 'Ментальная арифметика', start: '2024-03-11T13:00:00', end: '2024-03-11T13:45:00' }] },
        { date: '2024-03-12', lessons: [{ id: 19, title: 'Ментальная арифметика', start: '2024-03-12T13:00:00', end: '2024-03-12T13:45:00' }] },
        { date: '2024-03-13', lessons: [{ id: 20, title: 'Ментальная арифметика', start: '2024-03-13T13:00:00', end: '2024-03-13T13:45:00' }] },
        { date: '2024-03-14', lessons: [] },
        { date: '2024-03-15', lessons: [{ id: 22, title: 'Ментальная арифметика', start: '2024-03-15T13:00:00', end: '2024-03-15T13:45:00' }] },
        { date: '2024-03-16', lessons: [{ id: 23, title: 'Ментальная арифметика', start: '2024-03-16T13:00:00', end: '2024-03-16T13:45:00' }] },
        { date: '2024-03-17', lessons: [] },
        { date: '2024-03-18', lessons: [] },
        { date: '2024-03-19', lessons: [{ id: 26, title: 'Ментальная арифметика', start: '2024-03-19T13:00:00', end: '2024-03-19T13:45:00' }] },
        { date: '2024-03-20', lessons: [{ id: 27, title: 'Ментальная арифметика', start: '2024-03-20T13:00:00', end: '2024-03-20T13:45:00' }] },
        { date: '2024-03-21', lessons: [{ id: 28, title: 'Ментальная арифметика', start: '2024-03-21T13:00:00', end: '2024-03-21T13:45:00' }] },
        { date: '2024-03-22', lessons: [{ id: 29, title: 'Ментальная арифметика', start: '2024-03-22T13:00:00', end: '2024-03-22T13:45:00' }] },
        { date: '2024-03-23', lessons: [{ id: 30, title: 'Ментальная арифметика', start: '2024-03-23T13:00:00', end: '2024-03-23T13:45:00' }] },
        { date: '2024-03-24', lessons: [] },
        { date: '2024-03-25', lessons: [] },
        { date: '2024-03-26', lessons: [] },
        { date: '2024-03-27', lessons: [] },
        { date: '2024-03-28', lessons: [{ id: 35, title: 'Ментальная арифметика', start: '2024-03-28T13:00:00', end: '2024-03-28T13:45:00' }] },
        { date: '2024-03-29', lessons: [{ id: 36, title: 'Ментальная арифметика', start: '2024-03-29T13:00:00', end: '2024-03-29T13:45:00' }] },
        { date: '2024-03-30', lessons: [{ id: 37, title: 'Ментальная арифметика', start: '2024-03-30T13:00:00', end: '2024-03-30T13:45:00' }] },
        { date: '2024-03-31', lessons: [{ id: 38, title: 'Ментальная арифметика', start: '2024-03-31T13:00:00', end: '2024-03-31T13:45:00' }] },
      ]);
    }, 600);
  });
};
