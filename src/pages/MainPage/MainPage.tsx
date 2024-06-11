import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainPage.module.css";
import { fetchUserData } from "../../features/userSlice";
import { RootState, AppDispatch } from "../../store/store";
import { Offer, UserLesson, UpcomingLesson } from "../../types";
import Button from "../../components/Button/Button";
import OfferImage from "../../assets/images/SF_2 1.png";
import Homework from "../../assets/images/homework-icon.svg";
import Reports from "../../assets/images/reports-icon.svg";
import UserProfile from "../../assets/images/UserProfile.svg";

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
      <h2 className={styles.nextLessonTitle}>
        Следующее занятие начнется через:
      </h2>
      <div className={styles.nextLessonTime}>
        <p>
          {" "}
          6 <span>д</span>
        </p>
        <p>
          {" "}
          12 <span>ч</span>
        </p>
        <p>
          {" "}
          24 <span>мин</span>
        </p>
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
            <p>{lesson.title}</p>{" "}
            <span className={styles.lessonInfoCount}>{lesson.count}</span>
          </li>
        ))}
      </ul>
      <button className={styles.lessonInfoButton} type="button">
        Button
      </button>
    </div>
  );
}

function UpcomingLessons({ lessons }: { lessons: UpcomingLesson[] }) {
  return (
    <div className={styles.upcomingLessonsContainer}>
      <h2 className={styles.upcomingLessonsTitle}>Ближайшие уроки</h2>
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id} className={styles.lessonItem}>
            <div className={styles.lessonDetails}>
              <div className={styles.lessonDetailsDate}>
                <p>{lesson.date}</p>
                <span>{lesson.month}</span>
              </div>
              <p className={styles.lessonDetailsTitle}>{lesson.title}</p>
            </div>
            <div className={styles.lessonDetails}>
              <p className={styles.lessonDetailsTime}>{lesson.time}</p>{" "}
              <p className={styles.lessonDetailsTeacher}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 12.3893C5.046 11.3726 6.46133 10.7473 8.01533 10.7473C9.554 10.7473 10.954 11.36 12 12.358C10.954 13.3746 9.53867 14 7.98467 14C6.446 14 5.046 13.3873 4 12.3893Z"
                    stroke="#79747F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.65 10.6833C2.24333 9.874 2 8.968 2 8C2 4.684 4.684 2 8 2C11.316 2 14 4.684 14 8C14 8.96667 13.758 9.87333 13.3487 10.682"
                    stroke="#79747F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.41421 5.25247C10.1953 6.03352 10.1953 7.29985 9.41421 8.0809C8.63316 8.86195 7.36683 8.86195 6.58579 8.0809C5.80474 7.29985 5.80474 6.03352 6.58579 5.25247C7.36683 4.47143 8.63316 4.47143 9.41421 5.25247"
                    stroke="#79747F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {lesson.teacher}
              </p>
            </div>
            <div className={styles.lessonDetailsButtons}>
              <button className={styles.lessonDetailsButtonLeft} type="button">
                Button
              </button>
              <button className={styles.lessonDetailsButtonRight} type="button">
                Button
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className={styles.upcomingLessonsButton} type="button">
        Button
      </button>
    </div>
  );
}

export default function MainPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.user
  );

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
      description:
        "До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!",
      image: OfferImage,
    },
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
