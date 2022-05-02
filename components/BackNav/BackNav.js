import styles from './BackNav.module.scss';
const BackNav = () => {
  return (
    <div className={styles.backNavContainer}>
      <a href="/">
        <img src="back-svgrepo-com.svg" />
      </a>
    </div>
  );
};

export default BackNav;
