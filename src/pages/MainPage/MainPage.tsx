import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './MainPage.module.css';
import { fetchUserData } from '../../features/userSlice';
import { RootState, AppDispatch } from '../../store/store';
import { Offer, UserLesson, UpcomingLesson } from '../../types';
import Button from '../../components/Button/Button';

export default function MainPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return null;
  }

  const { user, lessons, upcomingLessons } = data;

  const offers: Offer[] = [
    {
      title: "До 31 декабря любой курс со скидкой 20%",
      description: "До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!",
      image: "/path/to/image.png" // замените на путь к вашему изображению
    }
  ];

  return (
    <div className={styles.mainPage}>
      <div className={styles.gridContainer}>
        <Offers offers={offers} />
        <NextLesson />
        <HomeworkReports />
        <LessonInfo lessons={lessons} />
        <UpcomingLessons lessons={upcomingLessons} />
      </div>
    </div>
  );
}

function Offers({ offers }: { offers: Offer[] }) {
  return (
    <div className={styles.offersContainer}>
      {offers.map((offer, index) => (
        <div key={index} className={styles.offer}>
          <h2>{offer.title}</h2>
          <p>{offer.description}</p>
          <img src={offer.image} alt={offer.title} />
        </div>
      ))}
    </div>
  );
}

function NextLesson() {
  return (
    <div className={styles.nextLessonContainer}>
      <h2>Следующее занятие начнется через:</h2>
      <div className={styles.nextLessonTime}>
        <span>6 д</span> <span>12 ч</span> <span>24 мин</span>
      </div>
      <Button text="Button" type="button" />
    </div>
  );
}

function HomeworkReports() {
  return (
    <div className={styles.homeworkReportsContainer}>
      <div className={styles.homework}>
        <h2>Домашние задания</h2>
        <img src="/path-to-homework-icon.png" alt="Домашние задания" />
      </div>
      <div className={styles.reports}>
        <h2>Отчеты от учителей</h2>
        <img src="/path-to-reports-icon.png" alt="Отчеты от учителей" />
      </div>
    </div>
  );
}

function LessonInfo({ lessons }: { lessons: UserLesson[] }) {
  return (
    <div className={styles.lessonInfoContainer}>
      <h2>Баланс занятий</h2>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            {lesson.title}: {lesson.count}
          </li>
        ))}
      </ul>
      <Button text="Button" type="button" />
    </div>
  );
}

function UpcomingLessons({ lessons }: { lessons: UpcomingLesson[] }) {
  return (
    <div className={styles.upcomingLessonsContainer}>
      <h2>Ближайшие уроки</h2>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id} className={styles.lessonItem}>
            <div className={styles.lessonDetails}>
              <span>{lesson.date}</span> <span>{lesson.title}</span>
            </div>
            <div className={styles.lessonDetails}>
              <span>{lesson.time}</span> <span>{lesson.teacher}</span>
            </div>
            <Button text="Button" type="button" />
          </li>
        ))}
      </ul>
      <Button text="Button" type="button" />
    </div>
  );
}
