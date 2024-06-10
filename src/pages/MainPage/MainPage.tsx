import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './MainPage.module.css';
import { fetchUserData } from '../../features/userSlice';
import { RootState, AppDispatch } from '../../store/store';
import { Offer, UserLesson, UpcomingLesson } from '../../types';
import Button from '../../components/Button/Button';
import OfferImage from '../../assets/images/SF_2 1.png'; 
import Homework from '../../assets/images/homework-icon.svg'; 
import Reports from '../../assets/images/reports-icon.svg'; 


//навряд ли эти части где-то будут переиспользваться но, как вариант можно в отдельные компоненты

function Offers({ offers }: { offers: Offer[] }) {
  return (
    <div className={styles.offersContainer}>
      {offers.map((offer, index) => (
        <div key={index} className={styles.offer}>
          <div className={styles.offerText}>
            <h2 className={styles.offerTile}>{offer.title}</h2>
            <p className={styles.offerDescription}>{offer.description}</p>
          </div>
          <img src={offer.image} alt={offer.title} />
        </div>
      ))}
    </div>
  );
}

function NextLesson() {
  return (
    <div className={styles.nextLessonContainer}>
      <h2 className={styles.nextLessonTitle}>Следующее занятие начнется через:</h2>
      <div className={styles.nextLessonTime}>
        <p> 6 <span>д</span></p><p> 12 <span>ч</span></p><p> 24 <span>мин</span></p>
      </div>
      <Button text="Button" type="button" />
    </div>
  );
}

function HomeworkReports() {
  return (
    <div className={styles.homeworkReportsContainer}>
      <div className={styles.homework}>
        <h2 className={styles.homeworkReportsTitle}>Домашние задания</h2>
        <img src={Homework} alt="Домашние задания" />
      </div>
      <div className={styles.reports}>
        <h2 className={styles.homeworkReportsTitle}>Отчеты от учителей</h2>
        <img src={Reports} alt="Отчеты от учителей" />
      </div>
    </div>
  );
}

function LessonInfo({ lessons }: { lessons: UserLesson[] }) {
  return (
    <div className={styles.lessonInfoContainer}>
      <h2 className={styles.lessonInfoTitle}>Баланс занятий</h2>
      <ul>
        {lessons.map((lesson) => (
          <li className={styles.lessonInfoList} key={lesson.id}>
            <p>{lesson.title}</p> <span className={styles.lessonInfoCount}>{lesson.count}</span>
          </li>
        ))}
      </ul>
      <button className={styles.lessonInfoButton} type="button">Button</button>
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
      <button className={styles.upcomingLessonsButton} type="button">Button</button>
    </div>
  );
}

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
      image: OfferImage 
    }
  ];

  return (
    <div className={styles.mainPage}>
      <div className={styles.gridContainerUp}>
        <Offers offers={offers} />
        <NextLesson />
        <HomeworkReports />
      </div>
      <div className={styles.gridContainerDown}>
        <LessonInfo lessons={lessons} />
        <UpcomingLessons lessons={upcomingLessons} />
      </div>
    </div>
  );
}
