import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideNavbar.module.css';
import LogoName from '../../assets/images/logoName.svg';
import IconHome from '../../assets/images/icon-home.svg';
import IconSchedule from '../../assets/images/icon-schedule.svg';
import IconPayment from '../../assets/images/icon-payment.svg';
import IconAchievements from '../../assets/images/icon-achievements.svg';
import IconTrainers from '../../assets/images/icon-trainers.svg';
import IconLibrary from '../../assets/images/icon-library.svg';
import IconConnection from '../../assets/images/icon-connection.svg';
import IconSettings from '../../assets/images/icon-settings.svg';
import IconFaq from '../../assets/images/icon-faq.svg';

const navItems = [
  { to: '/main', icon: IconHome, label: 'Главная' },
  { to: '/schedule', icon: IconSchedule, label: 'Расписание' },
  { to: '/payments', icon: IconPayment, label: 'Оплата' },
  { to: '/achievements', icon: IconAchievements, label: 'Достижения' },
  { to: '/trainers', icon: IconTrainers, label: 'Тренажеры' },
  { to: '/library', icon: IconLibrary, label: 'Библиотека' },
  { to: '/connection-check', icon: IconConnection, label: 'Проверка связи' },
  { to: '/settings', icon: IconSettings, label: 'Настройки' },
  { to: '/faq', icon: IconFaq, label: 'Вопросы' },
];

const SideNavbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.sideNavbar}>
        <img src={LogoName} alt="Sirius Future" className={styles.logo} />
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                <img src={item.icon} alt={item.label} /> {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.promo}>
          <p>Учитесь бесплатно</p>
          <span>Приводите друзей с детьми занимайтесь в Sirius Future и получайте подарки!</span>
          <button>Узнать</button>
        </div>
      </nav>
    </div>
  );
};

export default SideNavbar;
