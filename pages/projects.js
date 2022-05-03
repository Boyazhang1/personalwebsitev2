import BackNav from '../components/BackNav/BackNav';
import styles from './index.module.scss';

const Projects = () => {
  return (
    <>
      <BackNav />
      <div className={styles.outerContainer}>
        <div className={styles.pageContainer}>
          <p className={styles.comingSoonText}>Coming soon! </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
