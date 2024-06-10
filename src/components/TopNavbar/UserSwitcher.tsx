import React from 'react';
import styles from './TopNavbar.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { logout } from '../../features/authSlice';

interface UserSwitcherProps {
    onClose: () => void;
  }

export default function UserSwitcher({ onClose }: UserSwitcherProps){
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.userSwitcher}>
      <button className={styles.closeButton} onClick={onClose}>X</button>
      <h2>Смена пользователя</h2>
      <div className={styles.userList}>
        <div className={styles.user}>
          <img src="/path-to-user-avatar.png" alt="Михаил" />
          <div>
            <p>Михаил</p>
            <span>Это вы</span>
          </div>
        </div>
        <div className={styles.user}>
          <img src="/path-to-other-user-avatar.png" alt="Анна" />
          <div>
            <p>Анна</p>
          </div>
        </div>
      </div>
      <button className={styles.logoutButton} onClick={() => dispatch(logout())}>
        Выход
      </button>
    </div>
  );
};

