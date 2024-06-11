import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchLessonsAsync } from "../../features/scheduleSlice";
import styles from "./SchedulePage.module.css";

export default function SchedulePage() {
  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const dispatch = useDispatch<AppDispatch>();
  const { lessons, loading, error } = useSelector(
    (state: RootState) => state.schedule
  );

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
          <option value="mental-arithmetic">Ментальная арифметика</option>
          <option value="programming">Программирование</option>
          <option value="speed-reading">Скорочтение</option>
        </select>
        <button className={styles.editScheduleButton}>
          Изменить расписание
        </button>
      </div>
      <div className={styles.controls}>
        <button className={styles.iconButton}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12L19 12"
              stroke="#79747F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 7L5 12"
              stroke="#79747F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 17L5 12"
              stroke="#79747F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <span className={styles.monthYear}>Март 2024</span>
        <button className={styles.iconButton}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12L5 12"
              stroke="#79747F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 17L19 12"
              stroke="#79747F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 7L19 12"
              stroke="#79747F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className={styles.todayButton}>Сегодня</button>
        <button className={styles.iconButton}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12.0002"
              cy="11.9997"
              r="9.00375"
              stroke="#7362BC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 12.7114L13.3276 11.9738C13.9901 11.6058 14.401 10.9075 14.401 10.1496C14.3225 8.88929 13.2417 7.92852 11.9808 7.99833C10.8543 7.95156 9.85385 8.71311 9.599 9.81149"
              stroke="#7362BC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.1002 15.9017C12.1001 15.957 12.0553 16.0017 12.0001 16.0016C11.9449 16.0016 11.9001 15.9569 11.9001 15.9016C11.9001 15.8464 11.9448 15.8016 12 15.8016C12.0266 15.8015 12.0521 15.8121 12.0709 15.8309C12.0897 15.8497 12.1002 15.8752 12.1002 15.9017"
              stroke="#7362BC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
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
                  .filter(
                    (lesson) =>
                      new Date(lesson.start).toDateString() ===
                      day.toDateString()
                  )
                  .map((filteredLesson) => (
                    <div key={filteredLesson.id} className={styles.lesson}>
                      <div className={styles.lessonTime}>
                        {new Date(filteredLesson.start).toLocaleTimeString(
                          "ru-RU",
                          { hour: "2-digit", minute: "2-digit" }
                        )}{" "}
                        -{" "}
                        {new Date(filteredLesson.end).toLocaleTimeString(
                          "ru-RU",
                          { hour: "2-digit", minute: "2-digit" }
                        )}
                      </div>
                      <div className={styles.lessonTitle}>
                        {filteredLesson.title}
                      </div>
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
