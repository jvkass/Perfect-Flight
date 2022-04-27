import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.scss';

export const HomePage: React.FC = () => {

  const navigate = useNavigate();

  function handleButton() {
    navigate('/game');
  }

  return (
    <div className={styles.homeContainer}>
      <button onClick={handleButton}>Home Page</button>

    </div>)
};
