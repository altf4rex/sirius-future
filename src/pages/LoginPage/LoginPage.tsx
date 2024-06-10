import React, { useState, useEffect } from "react";
import styles from './LoginPage.module.css';
import logo from "../../assets/images/Logomark_1_.svg";
import showPasswordIcon from "../../assets/images/show-password.svg";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from '../../store/store';

export default function LoginForm() {
  const [email, setEmail] = useState('test@example.com'); 
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (user) {
      navigate('/main');
    }
  }, [user, navigate]);

  const [activeLanguage, setActiveLanguage] = useState<string>("RU");

  const handleLanguageChange = (language: string) => {
    setActiveLanguage(language);
  };

  return (
    <main className={styles.loginPage}>
      <div className={styles.login}>
        <img className={styles.logo} src={logo} alt="logo" />
        <h1 className={styles.title}>Вход в Sirius Future</h1>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required 
            className={styles.input} 
          />
          <div className={styles.passwordContainer}>
            <input 
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
              required
              className={styles.input} 
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles.passwordToggle}
            >
              <img src={showPasswordIcon} alt="Показать пароль" />
            </button>
          </div>
          <label className={styles.checkboxContainer}>
            <input
              className={styles.checkboxContainerCheckbox}
              type="checkbox"
              name="remember"
              value="yes"
            />
            <span className={styles.checkboxContainerText}>
              Запомнить меня
            </span>
          </label>
          <button className={styles.button} type="submit">
            Войти
          </button>
          <div className={styles.linksContainer}>
            <a className={styles.link} href="#">
              Я забыл пароль
            </a>
            <a className={styles.link} href="#">
              Войти как тренер
            </a>
          </div>
          <div className={styles.signupContainer}>
            <p className={styles.signupContainerText}>Нет аккаунта?</p>
            <a className={styles.link} href="#">
              Зарегистрироваться
            </a>
          </div>
        </form>
        <div className={styles.languageContainer}>
          <button
            className={`${styles.languageButton} ${activeLanguage === "RU" ? styles.active : ""}`}
            onClick={() => handleLanguageChange("RU")}
          >
            RU
          </button>
          <button
            className={`${styles.languageButton} ${activeLanguage === "EN" ? styles.active : ""}`}
            onClick={() => handleLanguageChange("EN")}
          >
            EN
          </button>
        </div>
      </div>
    </main>
  );
}
