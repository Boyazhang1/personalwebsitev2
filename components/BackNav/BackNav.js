import Link from 'next/link';
import styles from './BackNav.module.scss';
const BackNav = () => {
  return (
    <div className={styles.backNavContainer}>
      <Link href="/">
        <img src="back-svgrepo-com.svg" />
      </Link>
    </div>
  );
};

export default BackNav;
