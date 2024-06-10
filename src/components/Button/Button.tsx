import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string | number;
  type: "button" | "submit" | "reset";
}

export default function Button({ text, type }: ButtonProps) {
  return (
    <button className={styles.button} type={type}>
      {text}
    </button>
  );
}