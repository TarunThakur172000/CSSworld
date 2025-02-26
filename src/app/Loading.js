// components/Loader.js
import styles from './style/Loader.module.css';

const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;
