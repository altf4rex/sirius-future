import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./TopNavbar.module.css";
import UserSwitcher from "./UserSwitcher";
import { useLocation } from "react-router-dom";
import Notification from "../../assets/images/notification-icon.svg";
import Arrow from "../../assets/images/arrow-down.svg";

const TopNavbar = () => {
  const [showUserSwitcher, setShowUserSwitcher] = useState(false);
  const user = useSelector((state: RootState) => state.user.data?.user);
  const location = useLocation();

  const toggleUserSwitcher = () => {
    setShowUserSwitcher(!showUserSwitcher);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.topNavbar}>
        <div className={styles.leftSection}>
          {location.pathname === "/main" && (
            <h1 className={styles.greeting}>Добро пожаловать, <span className={styles.greetingName}>{user?.name}!</span></h1>
          )}
        </div>
        <div className={styles.rightSection}>
          <div className={styles.notifications}>
            <button className={styles.notificationButton}>
              <img src={Notification} alt="Notifications" />
              <span className={styles.notificationBadge}>3</span>
            </button>
          </div>
          <div className={styles.userProfile}>
            <button
              className={styles.profileButton}
              onClick={toggleUserSwitcher}
            >
              <img src={Arrow}  alt="arrow" className={styles.arrow}/>
              {/* <img src="/user-avatar.png" alt="User Avatar" /> */}
            </button>
            {showUserSwitcher && <UserSwitcher onClose={toggleUserSwitcher} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNavbar;
