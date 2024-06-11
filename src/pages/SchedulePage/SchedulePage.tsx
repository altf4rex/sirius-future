import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchLessonsAsync } from '../../features/scheduleSlice';
import styles from './SchedulePage.module.css';

export default function SchedulePage() {
  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  const dispatch = useDispatch<AppDispatch>();
  const { lessons, loading, error } = useSelector((state: RootState) => state.schedule);

  useEffect(() => {
    dispatch(fetchLessonsAsync());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!lessons) {
    return null;
  }

  const getDaysInMonth = (month: number, year: number) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const daysInMonth = getDaysInMonth(2, 2024);
  const weeks: Date[][] = [];
  let week: Date[] = [];

  daysInMonth.forEach((day) => {
    if (day.getDay() === 1 && week.length) {
      weeks.push(week);
      week = [];
    }
    week.push(day);
  });

  if (week.length) {
    weeks.push(week);
  }

  return (
    <div className={styles.schedulePage}>
      <div className={styles.header}>
        <select className={styles.subjectSelect}>
          <option value="">Выбрать предмет</option>
        </select>
        <button className={styles.editScheduleButton}>Изменить расписание</button>
      </div>
      <div className={styles.controls}>
          <button className={styles.controlButton}>{"<"}</button>
          <span className={styles.monthYear}>Март 2024</span>
          <button className={styles.controlButton}>{">"}</button>
          <button className={styles.todayButton}>Сегодня</button>
          <button className={styles.helpButton}>?</button>
        </div>
      <div className={styles.calendar}>
        <div className={styles.weekDays}>
        {daysOfWeek.map((day, index) => (
          <div key={index} className={styles.weekDay}>
            {day}
          </div>
        ))}
      </div>
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className={styles.week}>
            {week.map((day, dayIndex) => (
              <div key={dayIndex} className={styles.day}>
                <div className={styles.dayNumber}>{day.getDate()}</div>
                {lessons
                  .filter(lesson => new Date(lesson.start).toDateString() === day.toDateString())
                  .map(filteredLesson => (
                    <div key={filteredLesson.id} className={styles.lesson}>
                      <div className={styles.lessonTime}>
                        {new Date(filteredLesson.start).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })} - {new Date(filteredLesson.end).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                      </div>
                      <div className={styles.lessonTitle}>{filteredLesson.title}</div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
